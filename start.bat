@echo off
REM Waluipedia - double-click for the launcher window (site, chatroom, sheets suite, Token plates button).
REM
REM   start.bat                 the launcher window (python start.py)
REM   start.bat studio          Token Plate Studio: preview / crop / key / remove background / accept, one character at a time
REM   start.bat plates          the full token-plate run: every character still without a plate is rendered through
REM                             Comfy Desktop (Qwen-Image-2.1), cut, wired - hands-off; review with git afterwards
REM                             (take a bad one back with:  python tools\make-token-plates.py drop --ids <id>)
REM   start.bat plates --tier 2 --limit 20      extra arguments go to the render command
REM   start.bat --no-gui        anything else goes to start.py
REM
REM Renders need Comfy Desktop open with your instance running (127.0.0.1:8188 by default).
cd /d "%~dp0"
if /I "%~1"=="studio" goto studio
if /I "%~1"=="plates" goto plates
python start.py %*
goto end

:studio
python tools\token-plate-studio.py %2 %3 %4 %5 %6 %7 %8 %9
goto end

:plates
python tools\make-token-plates.py render --full %2 %3 %4 %5 %6 %7 %8 %9
echo.
echo Full run finished (exit code %errorlevel%: 0 = everybody plated, 2 = some left without a plate, 3 = the server went away).
echo Review: git status  --  the contact sheet is in ..\token-renders\run-sheet.png
echo Then:   python tools\sheets-suite.py        (plates -> prototype tokens -> Foundry packets)
pause
goto end

:end
if errorlevel 1 (
  echo.
  echo Something did not start. Python 3.10+ is needed; renders need Comfy Desktop running.
  pause
)

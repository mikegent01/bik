@echo off
REM Double-click to start the Waluipedia Hub and open it in your browser.
cd /d "%~dp0"
python server.py %*
if errorlevel 1 (
  echo.
  echo The hub could not start. Make sure Python 3.10+ and Node.js are installed.
  pause
)

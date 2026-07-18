import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // Fix: __dirname is not available in ES modules. Using import.meta.url is the modern way to get the current file's directory.
          '@': fileURLToPath(new URL('.', import.meta.url)),
        }
      }
    };
});
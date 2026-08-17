import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Reputation-Matrix2/',
  // Arena and similar review environments proxy the dev server through a
  // generated host. Static production hosting is unaffected by this setting.
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
});

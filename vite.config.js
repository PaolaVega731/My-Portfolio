// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://paolavega731.github.io/My-Portfolio/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:500', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
});

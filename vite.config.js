import { defineConfig } from 'vite';
import { copyFileSync, mkdirSync } from 'fs';
import path from 'path';

export default defineConfig({
  publicDir: 'public',
  plugins: [
    {
      name: 'copy-classic-scripts',
      buildStart() {
        // Keep public/ copies in sync with source during build
        mkdirSync('public/js', { recursive: true });
        copyFileSync('js/ion-animations.js', 'public/js/ion-animations.js');
        copyFileSync('js/worksheet-generator.js', 'public/js/worksheet-generator.js');
        copyFileSync('three.min.js', 'public/three.min.js');
      }
    }
  ],
  server: {
    proxy: {
      '/api/chem': {
        target: 'http://10.0.0.149:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/chem/, ''),
      },
    },
  },
});

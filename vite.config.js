import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [tailwindcss()],
  esbuild: {
    jsx: 'automatic',
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        casa: resolve(import.meta.dirname, 'index.html'),
        renda: resolve(import.meta.dirname, 'renda-extra/index.html'),
      },
    },
  },
});

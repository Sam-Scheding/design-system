import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ds/components': path.resolve(__dirname, 'src/components'),
      '@ds/css': path.resolve(__dirname, 'src/css'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});

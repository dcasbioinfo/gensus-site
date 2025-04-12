import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // Define a pasta 'client' como raiz do projeto para o Vite (onde se encontra o index.html)
  root: './client',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
      '@shared': path.resolve(__dirname, 'shared'),
    },
  },
  // Define o caminho base conforme o nome do repositório no GitHub Pages
  base: '/gensus-site/',
  build: {
    // O diretório de saída será '../dist' (na raiz do projeto)
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  },
});


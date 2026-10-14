import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Netlify serves the site from the domain root; GitHub Pages serves it from /collinmanyande/.
export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY ? '/' : '/collinmanyande/',
});

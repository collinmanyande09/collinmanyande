import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from the domain root (Netlify), so assets resolve from /.
export default defineConfig({
  plugins: [react()],
  base: '/',
});

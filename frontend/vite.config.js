

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The 'base' path needs to be correct for GitHub Pages
  // It should be '/React-Movies/' (your repo name)
  base: "/React-Movies/", // This is correct if your repo is 'React-Movies'
  // No 'root' or 'outDir' needed here if index.html is in 'frontend/' and you build from 'frontend/'
});
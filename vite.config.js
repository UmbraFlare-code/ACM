import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ACM/', // This is correct for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    // Ensure assets are properly hashed and referenced
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})

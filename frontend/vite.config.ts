import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    manifest: true,
    outDir: '../static/dist',
    rollupOptions: {
      input: './src/main.tsx'
    }
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true
  }
})
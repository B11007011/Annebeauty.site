import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  css: {
    modules: {
      localsConvention: 'camelCase',
      scopeBehaviour: 'local',
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    },
    postcss: './postcss.config.cjs'
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})

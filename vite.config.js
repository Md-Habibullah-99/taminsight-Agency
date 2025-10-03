import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base for GitHub Pages: https://<user>.github.io/<repo>/
  // Replace with your repo name if different
  base: '/taminsight-Agency/',
})

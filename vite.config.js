import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(),tailwindcss()],
    // Base is configurable per environment. For GitHub Pages build, set VITE_BASE to '/taminsight-Agency/'.
    // For Cloudflare Workers or other hosts at root, leave unset to default to '/'.
    base: env.VITE_BASE || '/',
  }
})

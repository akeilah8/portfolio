import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This repository will publish at akeilah8.github.io/portfolio/.
  base: '/portfolio/',
})

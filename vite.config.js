import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base is set for GitHub Pages project-site deployment at
// https://sagar1438.github.io/portfolio/ — change it to '/' if you deploy
// to a custom domain or to the root of a host instead.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})

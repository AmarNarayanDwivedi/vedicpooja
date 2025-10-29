/* eslint-env node */
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    coverage: {
      reporter: ['text', 'html'],
      thresholds: { lines: 35, functions: 35, branches: 35, statements: 35 },
      exclude: ['**/*.config.*', '**/dist/**', '**/node_modules/**', '**/*.test.*', '**/vitest.setup.*'],
    },
  },
  server: {
    host: true, // This makes the server accessible externally
    allowedHosts: [
      'fashionless-subjugular-lionel.ngrok-free.dev'
    ]
  }
})
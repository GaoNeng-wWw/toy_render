/// <reference types="vitest" />
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    reporters: 'verbose',
    coverage: {
      exclude: ["src/cssParser/**/*", "vite.config.ts", "vitest.setup.ts", "src/main.ts", "src/css-parser.ts"]
    }
  }
})

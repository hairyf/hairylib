import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'vue': '@hairy/react-lib-composition',
      '@vue/runtime-dom': '@hairy/react-lib-composition',
    },
  },
})

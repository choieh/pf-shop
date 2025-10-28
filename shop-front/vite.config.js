import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // CSS 파일 변경을 더 빠르게 감지
      usePolling: false,
      interval: 100,
    },
    // HMR 설정
    hmr: {
      overlay: true,
    },
  },
  // CSS 파일 변경 감지 개선
  css: {
    devSourcemap: true,
  },
})

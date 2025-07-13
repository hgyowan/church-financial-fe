import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // 원하는 포트 번호로 변경 가능
    open: true, // 브라우저 자동 열기
  },
})

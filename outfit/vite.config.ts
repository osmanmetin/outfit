import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},  // process nesnesini tanımlıyoruz
  },
  optimizeDeps: {
    exclude: ['onnxruntime-node'] // Burada onnxruntime-node'yu dışarıda bırakıyoruz
  }
})

import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

const root = import.meta.dirname

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'], rollupTypes: true, tsconfigPath: './tsconfig.json' }),
    {
      name: 'copy-theme-css',
      closeBundle() {
        copyFileSync(resolve(root, 'src/theme.css'), resolve(root, 'dist/theme.css'))
      },
    },
  ],
  resolve: {
    alias: { '@': resolve(root, 'src') },
  },
  build: {
    lib: {
      entry: resolve(root, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', '@puckeditor/core'],
    },
  },
})

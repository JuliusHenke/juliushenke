import {defineConfig} from 'vite'
import viteChecker from 'vite-plugin-checker'
import viteReact from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        viteReact(),
        viteChecker({ typescript: true }),
    ],
})

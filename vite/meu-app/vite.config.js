// @ts-check
import reactPlugin from 'vite-plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  plugins: [reactPlugin, reactRefresh()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom']
    }
  }
}

export default config

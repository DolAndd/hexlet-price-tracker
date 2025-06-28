import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import './index.css'

createInertiaApp({
  resolve: async (name) => {
    try {
      // Явный импорт с проверкой имени
      if (!name) throw new Error('Component name is undefined')

      const module = await import(`./pages/${name}.tsx`)
      return module.default
    } catch (error) {
      console.error('Failed to load component:', error)
      throw error
    }
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  }
})
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import './styles/index.css'

// Явно находим элемент перед инициализацией
const appElement = document.getElementById('app')

if (appElement) {
  createInertiaApp({
    resolve: (name) => import(`./Pages/${name}.tsx`),
    setup({ el, App, props }) {
      const root = createRoot(el)
      root.render(<App {...props} />)
    }
  })
} else {
  console.error('Элемент #app не найден в DOM!')
}
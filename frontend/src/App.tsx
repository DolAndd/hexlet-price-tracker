import { createInertiaApp } from '@inertiajs/react'
import MainLayout from './Layouts/MainLayout'

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
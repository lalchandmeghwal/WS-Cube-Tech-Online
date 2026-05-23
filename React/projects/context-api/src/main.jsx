import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyProvider } from './store/MyContext.jsx'
import AaddToCartProvider from './store/AaddToCart.jsx'

createRoot(document.getElementById('root')).render(
  <AaddToCartProvider>
    <MyProvider>
      <App />
    </MyProvider>
  </AaddToCartProvider>

)

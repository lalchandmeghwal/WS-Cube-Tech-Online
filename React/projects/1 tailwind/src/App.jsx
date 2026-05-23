import React from 'react'
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import ViewCart from './pages/ViewCart '
import { createBrowserRouter, RouterProvider } from  'react-router-dom'
import ProductDetails from './pages/ProductDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element:<Home/>
      }, {
        path: '/about',
        element:<About/>
      }, {
        path: '/products',
        element: <Products/>
        
      },{
        path: '/content',
        element:<Contact/>
      }, {
        path: '/view-cart',
        element:<ViewCart/>
      }, {
        path: '/products/:id',
        element: <ProductDetails/>
      }
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App

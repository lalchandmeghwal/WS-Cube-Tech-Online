import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Category from './components/Category';
import MailLayout from './layout/MailLayout';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const allPath = createBrowserRouter([
  {
    path: '/',
    element: <MailLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      }, {
        path: '/cart',
        element: <Cart />
      }, {
        path: '/product-details/:id',
        element: <ProductDetails />
      },

    ]
  }
])


const App = () => {
  return (<RouterProvider router={allPath} />)
}

export default App

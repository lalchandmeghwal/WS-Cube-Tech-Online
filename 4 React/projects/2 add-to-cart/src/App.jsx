import React from 'react'
import Header from './components/Header'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />
      }, {
        path: '/cart',
        element: <Cart />
      }, {
        path: '/register',
        element: <Register />
      }, {
        path: '/login',
        element: <Login />
      }
    ],
  },
]);

const App = () => {
  return (<RouterProvider router={router}/> )
}

export default App

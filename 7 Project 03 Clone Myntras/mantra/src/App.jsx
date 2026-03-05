import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/Home'
import Man from './pages/man/Man';
import Women from './pages/Women/Women';
import Kids from './pages/Kids/Kids';
import Genz from './pages/Genz/Genz';
import HomeMenu from './pages/HomeMenu/Home';

const allPath = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />
      }, {
        path: '/man',
        element: <Man />
      },{
        path:'/women',
        element:<Women/>
      },{
        path:'/kids',
        element:<Kids/>
      },{
        path:'/genz',
        element:<Genz/>
      },{
        path:'/home-menu',
        element:<HomeMenu/>
      }
    ]
  },
])

const App = () => {
  return (
    <RouterProvider router={allPath}>
    </RouterProvider>
  )
}

export default App

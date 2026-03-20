import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import One from './components/One.jsx';
import Two from './components/Two.jsx';
import Five from './components/Five.jsx';
import Four from './components/Four.jsx';
import Three from './components/Three.jsx';


const allPath = createBrowserRouter([
 {
  path:'/',
  element:<App/>,
  children:[
     {
    path:'/',
    element:<One/>
  },{
    path:'/two',
    element:<Two/>
  },,{
    path:'/three',
    element:<Three/>
  },{
    path:'/four',
    element:<Four/>
  },{
    path:'/five',
    element:<Five/>
  },
  ]
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allPath}/>
    
  </StrictMode>,
)

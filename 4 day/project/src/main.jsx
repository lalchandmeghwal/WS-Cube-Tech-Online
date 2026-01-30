import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Courses from './components/Courses.jsx';
import  Gallery from './components/Gallery.jsx';
import Enquiry from './components/Enquiry.jsx';
import Contact from './components/Contact.jsx';

const allPath = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:'/about',
        element:<About/>
      },{
        path:'/courses',
        element:<Courses/>
      },{
        path:'/gallery',
        element:<Gallery/>
      },{
        path:'/enquiry',
        element:<Enquiry/>
      },{
        path:'/contact',
        element:<Contact/>
      },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={allPath}/>
  </StrictMode>,
)

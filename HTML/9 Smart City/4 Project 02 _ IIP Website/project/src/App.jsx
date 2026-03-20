import React from 'react'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div className='bg-black flex justify-center ' >
      <div className='w-325'>
      <Header/>
      <Outlet/>
      </div>
    </div>
  )
}

export default App

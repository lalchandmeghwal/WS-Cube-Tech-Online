import React from 'react'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

// 292.5
const App = () => {
  return (
    <div className='w-292.5 m-auto '>
      <div className='bg-[#f1f0ef] '>

        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default App

import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>

      <div className=' grid lg:grid-cols-[16%_auto] ' >

        <div>

          <SideBar />


        </div>

        <div>
         
            <Header />
         


          <div className=' min-h-160  p-4' >
            <Outlet />
          </div>

          <Footer />



        </div>



      </div>

    </div>
  )
}

export default MainLayout

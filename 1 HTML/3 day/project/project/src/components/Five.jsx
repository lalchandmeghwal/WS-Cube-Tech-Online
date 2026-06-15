import React from 'react'
import Navbar from './Navbar'
import AsideBar from './AsideBar'
import Footer from './Footer'

const Five = () => {
  return (
	<div className='m-4 h-158 bg-white '>
		<Navbar/>
		<div className='flex'>
		<AsideBar/>
		<div className='text-black  w-full items-center flex justify-center  '>
			<div className='w-180 text-2xl font-medium '>
               <h3>Jodhpur Center</h3>
			   <h3>First Floor, Laxmi Tower, Bhaskar Circle, Ratanada Jodhpur - Rajasthan - India (342001)</h3>
			   <div className='my-5'>
			   <h3>Mobile Numbers</h3>
			   <h3>+91 90242-44886, +91 92696-98122</h3>
			   </div>
			   <h3>Email Address</h3>
			   <h3>learner@wscubetech.com</h3>
			</div>
		</div>
		</div>
		<Footer/>

	</div>
  )
}

export default Five

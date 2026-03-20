import React from 'react'
import Navbar from './Navbar'
import AsideBar from './AsideBar'
import Footer from './Footer'

const Two = () => {
  return (
	<div className='m-4 h-158 bg-white '>
		<Navbar/>
		<div className='flex'>
		<AsideBar/>
		<div className='text-black   w-full items-center  text-center  flex flex-col justify-center gap-5  '>
			<div className='w-180 h-80'>
			<h1 className='text-3xl my-3 font-bold'>Welcome to ws</h1>
			<p className='text-2xl'>WsCube Tech is a team of IT enthusiasts and Digital marketers on a mission to provide cutting-edge web development solutions to businesses and companies around the world. Our services include website & application designing and
				</p>

			</div>
		</div>
		</div>
		<Footer/>

	</div>
  )
}

export default Two






// export default Two

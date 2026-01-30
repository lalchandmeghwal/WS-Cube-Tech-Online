import React from 'react'
import Navbar from './Navbar'
import AsideBar from './AsideBar'
import Footer from './Footer'

const One = () => {
  return (
	<div className='m-4 h-screen relative bg-[#1D546D] '>
		<Navbar/>
		<div className='flex'>
			<div className='h-80 w-120  overflow-hidden'>
				
		<AsideBar/>

			</div>
		<div className='text-black gap-10 w-full items-center flex justify-center  '>
			<img className='w-100' src="https://img.freepik.com/premium-photo/anime-art-style-nature-environment-concept-art-illustration-background-image_492154-2357.jpg?w=2000" alt="" />
			<img className='w-100' src="https://img.freepik.com/premium-photo/anime-art-style-nature-environment-concept-art-illustration-background-image_492154-2357.jpg?w=2000" alt="" />
		</div>

		</div>

		<div className='bg-[#ACBAC4] p-4 text-center'>
	    <h2 className='text-4xl text-black'>Our Clients</h2>
		</div>

		<div className='flex'>
			<div className='w-full p-4 h-46 bg-[#249E94]'>
				<img className='w-full object-cover  h-full' src="https://img.freepik.com/premium-photo/anime-art-style-nature-environment-concept-art-illustration-background-image_492154-2357.jpg?w=2000" alt="" />
			</div>
			<div className='w-full p-4 h-46 bg-[#005461]'>
				<img className='w-full object-cover  h-full' src="https://img.freepik.com/premium-photo/anime-art-style-nature-environment-concept-art-illustration-background-image_492154-2357.jpg?w=2000" alt="" />
			</div>
			<div className='w-full p-4 h-46 bg-[#36656B]'>
				<img className='w-full object-cover  h-full' src="https://img.freepik.com/premium-photo/anime-art-style-nature-environment-concept-art-illustration-background-image_492154-2357.jpg?w=2000" alt="" />
			</div>
		</div>



		<div className='absolute w-full bottom-0 '>
		<Footer/>

		</div>

	</div>
  )
}

export default One

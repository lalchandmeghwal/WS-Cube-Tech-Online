import React from 'react'
import { FaChevronRight } from "react-icons/fa";
const Courses = () => {
  return (
	<div className=' w-full flex justify-center h-[82vh] my-3  ' >
	  <div className='w-325 h-full  '>

<div className='flex flex-wrap items-center justify-between gap-10 py-5'>

	<div className='w-154 '>
		<h3 className='text-3xl font-medium'>Explore Top Career Domains</h3>
		<p className='w-130 mt-4 text-lg text-gray-400'>Discover career paths that truly resonate with your passion & explore mentorship programs that align perfectly with you.</p>
	</div>

		<div className='bg-white w-70  text-black p-10 rounded-2xl flex justify-center items-center flex-col transition-all duration-1000 hover:scale-105 '>
			<img src="https://deen3evddmddt.cloudfront.net/images/home-images/digital-marketing-icon.svg" alt="" />
			<h2 className='text-2xl my-3 font-medium' >Digital Marketing</h2>
			<a className='text-lg flex items-center gap-2 text-blue-600' href="">
				See Programs
				<FaChevronRight/>
				</a>

		</div>
		<div className='bg-white  w-70  text-black p-10 rounded-2xl flex justify-center items-center flex-col transition-all duration-1000 hover:scale-105 '>
			<img src="https://deen3evddmddt.cloudfront.net/images/home-images/data-science-icon.svg" alt="" />
			<h2 className='text-2xl my-3 font-medium' >Data Analytics</h2>
			<a className='text-lg flex items-center gap-2 text-blue-600' href="">
				See Programs
				<FaChevronRight/>
				</a>

		</div>

<div className='bg-white  w-70  text-black p-10 rounded-2xl flex justify-center items-center flex-col transition-all duration-1000 hover:scale-105 '>
			<img src="https://deen3evddmddt.cloudfront.net/images/home-images/learn-web-dev.svg" alt="" />
			<h2 className='text-[20px] my-4 font-medium' >Web Development</h2>
			<a className='text-lg flex items-center gap-2 text-blue-600' href="">
				See Programs
				<FaChevronRight/>
				</a>
</div>


		<div className='bg-white  w-70  text-black p-10 rounded-2xl flex justify-center items-center flex-col transition-all duration-1000 hover:scale-105 '>
			<img src="https://deen3evddmddt.cloudfront.net/images/home-images/cyber-security-icon.svg" alt="" />
			<h2 className='text-2xl my-3 font-medium' >Cyber Security</h2>
			<a className='text-lg flex items-center gap-2 text-blue-600' href="">
				See Programs
				<FaChevronRight/>
				</a>

		</div>


		<div className='bg-white  w-70  text-black p-10 rounded-2xl flex justify-center items-center flex-col transition-all duration-1000 hover:scale-105 '>
			<img src="https://deen3evddmddt.cloudfront.net/images/home-images/app-development-icon.svg" alt="" />
			<h2 className='text-2xl my-3 font-medium' >App Development</h2>
			<a className='text-lg flex items-center gap-2 text-blue-600' href="">
				See Programs
				<FaChevronRight/>
				</a>

		</div>
		<div className='bg-white  w-70  text-black p-10 rounded-2xl flex justify-center items-center flex-col transition-all duration-1000 hover:scale-105 '>
			<img src="https://deen3evddmddt.cloudfront.net/images/home-images/digital-marketing-icon.svg" alt="" />
			<h2 className='text-2xl my-3 font-medium' >Digital Marketing</h2>
			<a className='text-lg flex items-center gap-2 text-blue-600' href="">
				See Programs
				<FaChevronRight/>
				</a>

		</div>
		
</div>

<div></div>


	  </div>
	  
	</div>
  )
}

export default Courses

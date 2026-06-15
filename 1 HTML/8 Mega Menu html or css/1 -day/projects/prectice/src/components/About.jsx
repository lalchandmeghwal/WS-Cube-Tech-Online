import React from 'react'
import { FaInstagramSquare,FaTwitterSquare  } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";
const About = () => {
  return (
	<div className='w-full flex  text-[#faf4f5] justify-center  h-148 mt-3 '>
	  <div className='w-325 flex  justify-between items-center '>

		<div className='rounded-full shadow-2xl transition-all hover:scale-120 duration-1000 hover:rotate-360  shadow-cyan-500/50 '>
			<img className='rounded-full shadow-lg w-80 h-80 ' src="https://img.freepik.com/free-photo/medium-shot-friends-with-coffee-cups_23-2149144334.jpg?w=360" alt="" />
		</div>


		<div className='text-center  w-200 '>
			
		<h1 className='text-center m-0 text-[24px] uppercase  font-bold'>About Us</h1>
		<div className='flex justify-center'>
			<div className='bg-[#aea5a5] w-25 rounded-2xl -mt-1 h-2 '></div>
		</div>
		<p className='text-[20px] text-justify  '>At Coffee House in Berndorf,Germany, we pride ourselves on being a go-to description for coffee lovers and conversation seekers alike. We're dedicated to providing an exceptional coffee experience in a cozy and inviting atmosphere, where guests can relax, unwind, a enjoy their time in comfort.</p>
		<div className='flex my-4 gap-3 justify-center text-2xl items-center'>
			<FaInstagramSquare className='text-4xl cursor-pointer rounded-full text-black transition-all duration-1000 hover:scale-120 bg-[aqua] p-1  hover:rotate-360 '/>
			<ImFacebook2 className='text-4xl cursor-pointer text-black transition-all duration-1000 hover:scale-120 bg-[aqua] p-1 rounded-full hover:rotate-360 '/>
			<FaYoutube className='text-4xl cursor-pointer text-black transition-all duration-1000 hover:scale-120 bg-[aqua] p-1 rounded-full hover:rotate-360 '/>
			<FaTwitterSquare className='text-4xl cursor-pointer text-black transition-all duration-1000 hover:scale-120 bg-[aqua] p-1 rounded-full hover:rotate-360 '/>
		</div>
		</div>

	  </div>
	  
	</div>
  )
}

export default About

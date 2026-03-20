import React from 'react'
import coffee from './gallery/coffee.png';
const Home = () => {
  return (
	
	<div className='w-full flex text-white  justify-center  h-148 mt-3 '>
		<div className='w-325 flex  justify-between items-start mt-20 '>

        <div className=' w-[40%] '>
			<h2 className='text-5xl my-4'>Best Coffee</h2>
			<h2 className='text-3xl  font-bold'>Make your day great with our special coffee!</h2>
			<p className='text-[20px] my-4 '>Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
			<div className='flex gap-5'>
				<button className='border text-2xl cursor-pointer transition-all hover:text-black hover:scale-105 duration-1000 hover:bg-white p-2 px-4 rounded-full '>Order Now</button>
				<button className='border text-2xl cursor-pointer transition-all hover:text-black hover:scale-105 duration-1000 hover:bg-white p-2 px-4 rounded-full '>Contact Us</button>
			</div>
		</div>


        <div className=' hover:rotate-360 duration-1000 transition-all  h-100 w-100  rounded-full'>
			<img className='w-full h-full object-cover' src={coffee} alt="" />
		</div>


		</div>
	</div>
  )
}

export default Home

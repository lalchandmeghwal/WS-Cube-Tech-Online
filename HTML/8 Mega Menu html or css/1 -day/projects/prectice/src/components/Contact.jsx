import React from 'react'
import { FaGlobe, FaLocationCrosshairs } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt,FaRegClock } from "react-icons/fa";
const Contact = () => {

	const contactData = [
		{
			span:<FaLocationCrosshairs/>,
			p:'123 Compsite Avenue, Wilderness, CA 98765'
		},{
			span:<CgMail/>,
			p:'info@coffeeshopwebsite.com'
		},{
			span:<FaPhoneAlt/>,
			p:'(123) 465-78909'
		},{
			span:<FaRegClock/>,
			p:'Monday - Friday: 9:00 AM - 5:00 PM'
		},{
			span:<FaRegClock/>,
			p:'Sunday: Closed'
		},{
			span:<FaGlobe/>,
			p:'www.codingnepalweb.com'
		},
	]

	


  return (
	<div className='w-full flex bg-[#252525] justify-center  h-147 mt-3 '>
		<div className='w-325 flex flex-col   '>
		<h1 className='text-center mt-10 text-[24px] uppercase  font-bold'>contact us</h1>
		<div className='flex justify-center'>
			<div className='bg-[#aea5a5] w-25 rounded-2xl -mt-1 h-2 '></div>
		</div>
<div className=' flex justify-between gap-5 my-30'>
	<div className='w-170'>
		<ul className='flex  flex-col gap-3'>
			{contactData.map((values, i)=>{
				return (<li className='flex items-center  text-[20px] gap-3'>
			<span className='text-[25px]'>{values.span}</span>
			<p>{values.p}</p>
			</li>)
			})}
		</ul>

	</div>

	<form className=' w-150 flex items-start flex-col gap-4'>
		<input type="text" placeholder='Enterh Your Name' className='bg-white p-3 w-full rounded-lg text-[20px] text-black placeholder:text-black outline-0 ' required />
		<input type="email" placeholder='Enterh Your Email' className='bg-white p-3 w-full rounded-lg text-[20px] text-black placeholder:text-black outline-0 ' required />
		<textarea type="email" placeholder='Message' className='bg-white p-2 px-3 w-full rounded-lg text-[20px] text-black placeholder:text-black outline-0 ' required />
		<button className='border transition-all duration-1000 hover:bg-white hover:text-black hover:scale-110 p-2 text-2xl px-8 rounded-4xl cursor-pointer'>Submit</button>
	</form>

</div>

		</div>
	</div>
  )
}

export default Contact

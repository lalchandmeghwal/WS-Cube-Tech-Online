import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

	const active= useLocation().pathname;
// contact

	const navberData = [
		{
			title:'home',
			link:'/',
		},{
			title:'about',
			link:'/about',
		},{
			title:'courses',
			link:'/courses',
		},{
			title:'gallery',
			link:'/gallery',
		},{
			title:'contact',
			link:'/contact',
		},
	];



  return (
	<div>
		<h1 className='text-center  text-2xl font-medium'>Welcome To  Coffee</h1>
		<h2  className='text-center cursor-pointer mb-3 text-2xl font-medium'>www.Coffee.com</h2>

		<header className='flex bg-gray-700 justify-center p-3 '>
			<div className='w-325 flex justify-between items-center '>
			<h1 className='text-3xl font-bold'>☕ Coffee</h1>
			<nav className=' flex gap-6 list-none text-2xl font-medium '>
				{navberData.map((value,i)=>{
					return (<li key={i} className='capitalize'>
						<Link to={value.link} className={`${active === value.link ? "text-[aqua]":'text-white'}`}>{value.title}</Link>
						</li>);
				})}
				{/* <li><Link to={'/'}>Home</Link> </li>
				<li><Link to={'/about'}>About</Link></li>
				<li><Link to={'/courses'}>Courses</Link></li>
				<li><Link to={'/gallery'}>Gallery</Link></li> */}
			</nav>
</div>



		</header>
	  
	</div>
  )
}

export default Header

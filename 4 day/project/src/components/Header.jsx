import React from 'react';
import logo from './images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
	
	<header className='bg-white p-2 flex justify-center text-black'>
		<div className='flex  justify-between items-end-safe w-325'>
			<div>
				<img className='w-40'  src={logo} alt="" />
			</div>
			<nav className='flex w-250 justify-between pb-3 list-none text-2xl font-medium gap-5'>

				{/*
				<li>Gallery</li>
				<li>Enquiry</li>
				<li>Contact Us</li> */}
				<Li to={'/'} titile={'Home'}/>
				<Li to={'/about'} titile={'About Us'}/>
				
				<Li to={'/courses'} titile={'Courses'}/>
				<Li to={'/gallery'} titile={'Gallery'}/>
				<Li to={'/enquiry'} titile={'Enquiry'}/>
				<Li to={'/contact'} titile={'Contact Us'}/>
			</nav>
		</div>
	</header>
  )
}

export default Header;

const Li = ({to, titile})=>{
	return (<NavLink className={({isActive})=>isActive ? 'text-[#00a8ec]':'text-black'} to={to}>{titile}</NavLink>)
}

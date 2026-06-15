import React from 'react';
import logo from './images/logo.png';
import web from './images/web.png';
import info from './images/INFO.png';

import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div>

			<div className='bg-[#343130] p-2 px-4 flex justify-between text-white '>
				
				<div className='text-lg font-semibold flex gap-3 items-center '>
					<div>
						<img src={web} alt="Logo" />
					</div>
					<div className=' cursor-pointer  ' title='www.iipacademy.com' ><span>www.iipacademy.com</span></div>
				</div>
				<div className='text-lg font-semibold flex gap-3 items-center '>
					<div>
						<img src={info} alt="Logo" />
					</div>
					<div className=' cursor-pointer  ' title='info@iipacademy.com' ><span>info@iipacademy.com</span></div>
				</div>

				
			</div>

			

			<header className='bg-white p-2 flex justify-center text-black'>

				<div className='flex  justify-between items-end-safe w-325'>
					<div>
						<img className='w-40' src={logo} alt="" />
					</div>
					<nav className='flex w-220 justify-between pb-3 px-5 list-none  text-xl   font-medium '>


						<Li to={'/'} titile={'Home'} />
						<Li to={'/about'} titile={'About Us'} />

						<Li to={'/courses'} titile={'Courses'} />
						<Li to={'/gallery'} titile={'Gallery'} />
						<Li to={'/enquiry'} titile={'Enquiry'} />
						<Li to={'/contact'} titile={'Contact Us'} />
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Header;

const Li = ({ to, titile, className }) => {
	return (<NavLink className={({ isActive }) => isActive ? 'text-[#00a8ec] hover:text-[#00a8ec]' : `text-black hover:text-[#00a8ec] `} to={to}>{titile}</NavLink>)
}

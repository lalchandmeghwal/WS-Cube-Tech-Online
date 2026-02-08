import React from 'react';
import logo from './images/logo.png'
import { NavLink } from 'react-router-dom';
import web from './images/web.png';
import INFO from './images/INFO.png';


const Header = () => {
	return (

		<header className='bg-white p-2 pt-0 flex justify-center text-black'>
			<div className='flex  justify-between flex-col items-end-safe w-325'>
				<div className='bg-[#343130] px-4 py-2 flex justify-between w-full '>
					<div className='flex items-center gap-2 '>
						<img src={web} alt="" />
						<div>
							<a className='text-white text-[20px] font-semibold ' href="http://www.iipacademy.com/" target='_blank'>www.iipacademy.com</a>
						</div>
					</div>
					<div className='flex items-center gap-2 '>
						<img src={INFO} alt="" />
						<div>
							<a  className='text-white text-[20px] font-semibold '  href="">info@iipacademy.com</a>
						</div>
					</div>
				</div>



				<div className='flex  justify-between items-end-safe w-325'>
					<div>
						<img className='w-40' src={logo} alt="" />
					</div>
					<nav className='flex w-245  justify-between  list-none text-2xl font-medium  px-5 '>

						{/*
				<li>Gallery</li>
				<li>Enquiry</li>
				<li>Contact Us</li> */}
						<Li to={'/'} titile={'Home'} />
						<Li to={'/about'} titile={'About Us'} />

						<Li to={'/courses'} titile={'Courses'} />
						<Li to={'/gallery'} titile={'Gallery'} />
						<Li to={'/enquiry'} titile={'Enquiry'} />
						<Li to={'/contact'} titile={'Contact Us'} />
					</nav>
				</div>



			</div>
		</header>
	)
}

export default Header;

const Li = ({ to, titile }) => {
	return (<NavLink className={({ isActive }) => isActive ? 'text-[#00a8ec]' : 'text-black'} to={to}>{titile}</NavLink>)
}

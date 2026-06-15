import React from 'react'
import { NavLink } from 'react-router-dom';
import dot from './images/dot.jpg';

const AsideBar = () => {
  return (
		
		<aside className='bg-white   p-2 flex flex-col w-80  justify-center text-black'>
				<nav className='flex  text-center   flex-col justify-center list-none text-2xl font-medium gap-2'>
					<Li to={'/'} titile={'Home'}/>
					<Li to={'/about'} titile={'About Us'}/>
					
					<Li to={'/courses'} titile={'Courses'}/>
					<Li to={'/gallery'} titile={'Gallery'}/>
					<Li to={'/enquiry'} titile={'Enquiry'}/>
					<Li to={'/contact'} titile={'Contact Us'}/>
				</nav>
				<div className='border rounded-t-2xl mt-5'>
					<div className='bg-amber-500 p-4 text-center font-bold text-white text-3xl rounded-t-2xl'>
						<h2>News</h2>
					</div>
					<div>
						<P/>
						<P/>
						<P/>
						<P/>
						<P/>
						
					</div>
				</div>
		</aside>
  )
}

export default AsideBar

const Li = ({to, titile})=>{
	return (<li className='bg-[#00a8ec] text-white p-2'>
		<NavLink  to={to}>{titile}</NavLink>
		</li>);
};

const P = ()=>{
	return (<p className='flex gap-2 text-[20px] m-3 items-center'><img className='w-5 h-5 rounded-full' src={dot} alt="" /> ipsum dolor sit amet,</p>)
}

import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
	<header className='bg-gray-700 flex justify-center p-4'>
		<nav className='flex text-3xl w-325 list-none justify-between '>
			<Li to='/' titile={'Home'}/>
			<Li to='/two' titile={'About'}/>
			<Li to='/three' titile={'Courses'}/>
			<Li to='/four' titile={'Gallery'}/>
			<Li to='/five' titile={'Content '}/>

		</nav>
	</header>
  )
}

export default Header;

const Li = ({to, titile})=>{
	return(<li ><NavLink className={({isActive})=>isActive? "text-[aqua]":'text-amber-50'} to={to}>{titile}</NavLink></li>)
}

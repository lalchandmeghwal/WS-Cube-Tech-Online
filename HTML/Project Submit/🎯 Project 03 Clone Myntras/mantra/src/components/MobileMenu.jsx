import React, { useState } from 'react'

import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
const MobileMenu = () => {

    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <nav className={` ${mobileMenu ? "left-0 " : "-left-50"}  flex  flex-col top-0  transition-all duration-700  w-30 pt-10  bg-white shadow-lg min-[850px]:hidden    items-center h-screen   absolute gap-5  font-bold `}>
            <span onClick={() => setMobileMenu(!mobileMenu)} className=' text-4xl cursor-pointer  ml-15 '>
                <IoClose /> </span>
            <NavLink to={'/man'}> Man</NavLink>
            <NavLink to={'/women'}>Women</NavLink>
            <NavLink to={'/kids'}>Kids</NavLink>
            <NavLink to={'/home-menu'}>Home</NavLink>

            <a href="">Beauty</a>
            <NavLink to={'/genz'}>Genz</NavLink>
            <a className='group    ' href="">Studio </a>

        </nav>
    )
}

export default MobileMenu

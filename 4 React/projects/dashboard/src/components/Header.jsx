import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { RiProfileFill } from "react-icons/ri";
import { FaUserCircle, FaLock } from 'react-icons/fa';
const Header = () => {
    return (
        <div >
            {/* top Header */}
            <header className=' px-7  flex items-center justify-between  p-3  ' >

                <div className=' flex items-center gap-3 ' >
                    <div>
                        <MdOutlineMenu className=' text-[#9ca3af] cursor-pointer text-2xl font-semibold  ' />

                    </div>
                    <NavLink to={'/dashboard'}>
                        <h1 className=' text-2xl font-semibold text-[#64748b]  ' >Dashboard</h1>
                    </NavLink>
                </div>



                <div className="relative inline-block group ">
                    <img className=' cursor-pointer h-12 w-12 rounded-full ' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />

                    <div className="absolute overflow-hidden right-0 top-full  mt-1  w-64 bg-white border rounded-xl shadow-lg hidden group-hover:block  z-50">
                        <NavLink to={'profile'}>
                            <li
                                className="flex items-center gap-3 px-5 py-4 hover:text-blue-700 hover:bg-gray-100  "
                            >
                                <FaUserCircle /> Profile
                            </li>
                        </NavLink>

                        <NavLink to={'company-profile'}>
                            <li
                                className="flex items-center gap-3 px-5 py-4  border-t hover:text-blue-700 hover:bg-gray-100 "
                            >
                                <RiProfileFill /> Company Profile
                            </li>
                        </NavLink>
                        <NavLink to={'logout'}>
                            <li

                                className="flex items-center gap-3 px-5 py-4  border-t hover:text-blue-700 hover:bg-gray-100 "
                            >
                                <FaLock />Logout
                            </li>
                        </NavLink>

                    </div>
                </div>



            </header>

            <div className='  px-7   border-y-2 border-[#e5e7eb] py-2  ' >
                <ul className=' flex  gap-4  ' >
                    <li className=' opacity-90 font-medium ' >Home</li>
                    <li className=' opacity-90 font-medium ' >Dashboard</li>
                </ul>
            </div>
        </div>
    )
}

export default Header

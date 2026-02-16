import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import Footer from './Footer';

import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {


    const [mobileMenu, setMobileMenu] = useState(false)
    const [search, setSearch] = useState(true)



    return (
        <>

            <header className=' flex justify-between max-w-full gap-15 px-5 bg-[#FFFFFF] z-50 sticky top-0 shadow  py-5 '>

                <div className='flex justify-between items-center  max-[850px]:gap-3 gap-15  ' >
                    <span onClick={()=>setMobileMenu(true)} className='max-[850px]:block hidden text-3xl cursor-pointer' ><AiOutlineMenu/> </span>
                    <NavLink to={'/'}>
                        <figure className='w-10  '>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-icon-svg-download-png-2249158.png" alt="" />
                        </figure>
                    </NavLink>
                    <nav className='flex max-[850px]:hidden    justify-between relative gap-5  font-bold '>

                        <NavLink to={'/man'}> Man</NavLink>
                        <NavLink to={'/women'}>Women</NavLink>
                        <NavLink to={'/kids'}>Kids</NavLink>
                        <NavLink to={'/home-menu'}>Home</NavLink>

                        <a href="">Beauty</a>
                        <NavLink to={'/genz'}>Genz</NavLink>
                        <a className='group    ' href="">Studio </a>
                        <span className='absolute -top-2 -right-8 text-sm  text-red-500   ' >NEW</span>
                    </nav>

                    {/* mobile Menu */}

                    <nav className={` ${ mobileMenu ? "left-0 ": "-left-50" }  flex  flex-col top-0  transition-all duration-700  w-30 pt-10  bg-white shadow-lg min-[850px]:hidden    items-center h-screen   absolute gap-5  font-bold `}>
                        <span onClick={()=>setMobileMenu(!mobileMenu)} className=' text-4xl cursor-pointer  ml-15 '> <IoClose/> </span>
                        <NavLink to={'/man'}> Man</NavLink>
                        <NavLink to={'/women'}>Women</NavLink>
                        <NavLink to={'/kids'}>Kids</NavLink>
                        <NavLink to={'/home-menu'}>Home</NavLink>

                        <a href="">Beauty</a>
                        <NavLink to={'/genz'}>Genz</NavLink>
                        <a className='group    ' href="">Studio </a>

                    </nav>


                </div>


                <div className='flex flex-1  max-[1050px]:justify-end gap-4  justify-between    items-center  ' >


                    <div className='items-center text-lg max-[1050px]:w-10 max-[1050px]:cursor-pointer   gap-2 p-2 rounded-md max-[1090px]:w-70 max-[1150px]:w-80  max-[1280px]:w-100 w-150 border border-gray-200 flex'>
                        <IoSearch  onClick={()=>setSearch(!search)}   className='text-xl' />
                        <input className='w-full focus:outline-0 max-[1050px]:hidden  ' type="search" placeholder="Search for products, brands and more" />
                    </div>

                    <div  className={` ${search ? " hidden " :'max-[1050px]:flex'} min-[1050px]:hidden  items-center w-full text-lg  left-0    bg-white  absolute     gap-2 p-2 rounded-md border border-gray-200 `}>
                       
                        <input className='w-full focus:outline-0  p-2  ' type="search" placeholder="Search for products, brands and more" />
                         <IoClose onClick={()=>setSearch(!search)} className='text-4xl cursor-pointer  ' />
                    </div>





                    <div className='flex gap-3   justify-between  '>

                        <div className='flex flex-col items-center cursor-pointer '>
                            <FaRegUser className='text-lg font-semibold ' />
                            <h2 className='font-semibold max-[820px]:hidden text-[15px] '>Profile</h2>

                        </div>
                        <div className='flex flex-col cursor-pointer items-center '>
                            <FaRegHeart className='text-lg font-semibold ' />
                            <h2 className='font-semibold max-[820px]:hidden  text-[15px] '>Wishlist </h2>

                        </div>
                        <div className='flex flex-col items-center cursor-pointer '>
                            <SlHandbag className='text-lg font-semibold ' />
                            <h2 className='font-semibold  max-[820px]:hidden  text-[15px] '>Bag  </h2>

                        </div>
                    </div>

                </div>



            </header>

            <Outlet/>

            <Footer/>



        </>
    )
}

export default Header




import React, { useState } from 'react'
import logo from '../images/logo.svg';
import { RiDashboard2Line } from "react-icons/ri";
import { FaEdit, FaShoppingBag, FaUser, FaUserEdit } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaFileLines, FaMessage, FaSliders } from "react-icons/fa6";
import { MdGTranslate, MdInvertColors, MdWatchLater } from 'react-icons/md';
import { FaMaximize } from "react-icons/fa6";
import { CiMenuFries } from 'react-icons/ci';
import { IoPaperPlane } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    const [menu, setMenu] = useState(0);



    return (
        <div className=' bg-pink-500 ' >
            <>

                <aside className="fixed bg-[#1f2937]  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
                    <div className='border-b-2 border-white  p-4 ' >
                        <img src={logo} alt="" />
                    </div>


                    <div className="h-[calc(100vh-100px)] px-3 py-4 overflow-y-auto    bg-neutral-primary-soft border-e border-default">
                        <ul className="space-y-2 font-medium">
                            <NavLink to={'/dashboard'}>
                                <li>

                                    <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                        <RiDashboard2Line className='text-xl' />
                                        <span className="flex-1 text-[18px] font-semibold ms-3 text-left rtl:text-right whitespace-nowrap">
                                            Dashboard
                                        </span>

                                    </div>
                                </li>
                            </NavLink>

                            {/* menu items */}

                            <li>

                                <div onClick={() => setMenu(menu === 1 ? 0 : 1)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                    <FaUser />
                                    <span className="flex-1 text-[18px] font-semibold ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Users
                                    </span>
                                    {menu === 1 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}


                                </div>


                                {menu === 1 &&
                                    <NavLink to={'users-view'}>


                                        <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                            <div>
                                                <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                </svg>
                                            </div>
                                            <span className="flex-1 text-lg font-semibold   ms-3 text-left  rtl:text-right ">
                                                View Users
                                            </span>
                                        </div>
                                    </NavLink>
                                }




                            </li>

                            <li>

                                <div onClick={() => setMenu(menu === 2 ? 0 : 2)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                    < FaMessage />
                                    <span className="flex-1 text-xl ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Enquirys
                                    </span>
                                    {menu === 2 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}


                                </div>

                                {menu === 2 &&
                                    <div>

                                        <NavLink to={'enquirys-contact'} >
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Contact Enquirys
                                                </span>
                                            </div>
                                        </NavLink>


                                        <NavLink to={'enquirys-newsletters'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Newsletters
                                                </span>
                                            </div>
                                        </NavLink>
                                    </div>
                                }




                            </li>

                            <li>

                                <div onClick={() => setMenu(menu === 3 ? 0 : 3)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <MdInvertColors />
                                    <span className="flex-1 text-xl ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Colors
                                    </span>
                                    {menu === 3 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>
                                {menu === 3 &&
                                    <div>

                                        <NavLink to={'color-add'}>

                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Add Color
                                                </span>
                                            </div>
                                        </NavLink>

                                        <NavLink to={'color-view'}>

                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    View Color
                                                </span>
                                            </div>
                                        </NavLink>
                                    </div>
                                }
                            </li>

                            <li>

                                <div onClick={() => setMenu(menu === 4 ? 0 : 4)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <FaMaximize />
                                    <span className="flex-1 text-xl ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Materials
                                    </span>
                                    {menu === 4 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>
                                {menu === 4 &&
                                    <div>


                                        <NavLink to={'material-add'} >
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Add Material
                                                </span>
                                            </div>
                                        </NavLink>
                                        <NavLink to={'material-view'} >
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    View Material
                                                </span>
                                            </div>
                                        </NavLink>
                                    </div>
                                }
                            </li>

                            <li>

                                <div onClick={() => setMenu(menu === 5 ? 0 : 5)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <CiMenuFries />
                                    <span className="flex-1 text-xl ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Parent Categorys
                                    </span>
                                    {menu === 5 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>
                                {menu === 5 &&
                                    <div>

                                        <NavLink to={'category-add'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Add Category
                                                </span>
                                            </div>
                                        </NavLink>

                                        <NavLink to={'category-view'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    View Category
                                                </span>
                                            </div>
                                        </NavLink>

                                    </div>
                                }
                            </li>


                            <li>


                                <div onClick={() => setMenu(menu === 6 ? 0 : 6)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <CiMenuFries />
                                    <span className="flex-1 text-[18px] font-semibold   ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Sub Categorys
                                    </span>
                                    {menu === 6 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>
                                {menu === 6 &&
                                    <div>

                                        <NavLink to={'category-add-sub'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Add Sub Category
                                                </span>
                                            </div>
                                        </NavLink>

                                        <NavLink to={'category-view-sub'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    View Sub Category
                                                </span>
                                            </div>
                                        </NavLink>

                                    </div>
                                }
                            </li>

                            <li>


                                <div onClick={() => setMenu(menu === 7 ? 0 : 7)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <CiMenuFries />
                                    <span className="flex-1  text-[18px] font-semibold    ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Sub  Sub  Categorys
                                    </span>
                                    {menu === 7 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>
                                {menu === 7 &&
                                    <div>


                                        <NavLink to={'category-add-sub-sub'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1    ms-3 text-left  rtl:text-right ">
                                                    Add  Sub  Sub Category
                                                </span>
                                            </div>
                                        </NavLink>

                                        <NavLink to={'category-view-sub-sub'} >
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    View  Sub  Sub Category
                                                </span>
                                            </div>
                                        </NavLink>
                                    </div>
                                }
                            </li>


                            <li>


                                <div onClick={() => setMenu(menu === 8 ? 0 : 8)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <FaShoppingBag />
                                    <span className="flex-1  text-[18px] font-semibold    ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Products
                                    </span>
                                    {menu === 8 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>
                                {menu === 8 &&
                                    <div>

                                        <NavLink to={'products-add'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Add  Products
                                                </span>
                                            </div>
                                        </NavLink>

                                        <NavLink to={'products-view'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    View  Products
                                                </span>
                                            </div>
                                        </NavLink>
                                    </div>
                                }
                            </li>


                            <li>


                                <div onClick={() => setMenu(menu === 9 ? 0 : 9)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <MdWatchLater />
                                    <span className="flex-1 text-xl ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Why Choose Us
                                    </span>
                                    {menu === 9 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>
                                {menu === 9 &&
                                    <div>
                                        <NavLink to={'why-choose-add'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Add  Why Choose Us
                                                </span>
                                            </div>
                                        </NavLink>

                                        <NavLink to={'why-choose-view'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    View  Why Choose Us
                                                </span>
                                            </div>
                                        </NavLink>
                                    </div>
                                }
                            </li>

                            <li>


                                <div onClick={() => setMenu(menu === 10 ? 0 : 10)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <FaEdit />
                                    <span className="flex-1 text-xl ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Orders
                                    </span>
                                    {menu === 10 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>
                                {menu === 10 &&
                                    <div>

                                        <NavLink to={'orders'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Orders
                                                </span>
                                            </div>
                                        </NavLink>
                                    </div>
                                }
                            </li>

                            <li>


                                <div onClick={() => setMenu(menu === 11 ? 0 : 11)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <FaSliders />
                                    <span className="flex-1 text-xl ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Sliders
                                    </span>
                                    {menu === 11 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>
                                {menu === 11 &&
                                    <div>

                                        <NavLink to={'sliders-add'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Add Sliders
                                                </span>
                                            </div>
                                        </NavLink>

                                        <NavLink to={'sliders-view'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    View  Sliders
                                                </span>
                                            </div>
                                        </NavLink>
                                    </div>
                                }
                            </li>


                            <li>


                                <div onClick={() => setMenu(menu === 12 ? 0 : 12)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <IoPaperPlane />
                                    <span className="flex-1 text-xl ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Country
                                    </span>
                                    {menu === 12 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>
                                {menu === 12 &&
                                    <div>

                                        <NavLink to={'country-add'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Add Country
                                                </span>
                                            </div>
                                        </NavLink>

                                        <NavLink to={'country-view'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    View  Country
                                                </span>
                                            </div>
                                        </NavLink>

                                    </div>
                                }
                            </li>


                            <li>


                                <div onClick={() => setMenu(menu === 13 ? 0 : 13)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <FaUserEdit />
                                    <span className="flex-1 text-xl ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Testimonials
                                    </span>
                                    {menu === 13 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>
                                {menu === 13 &&
                                    <div>

                                        <NavLink to={'testimonials-add'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Add Testimonials
                                                </span>
                                            </div>
                                        </NavLink>

                                        <NavLink to={'testimonials-view'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    View  Testimonials
                                                </span>
                                            </div>
                                        </NavLink>

                                    </div>
                                }
                            </li>

                            <li>


                                <div onClick={() => setMenu(menu === 14 ? 0 : 14)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <MdGTranslate />
                                    <span className="flex-1 text-xl ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Faqs
                                    </span>
                                    {menu === 14 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>
                                {menu === 14 &&
                                    <div>

                                        <NavLink to={'faqs-add'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    Add Faqs
                                                </span>
                                            </div>
                                        </NavLink>

                                        <NavLink to={'faqs-view'}>
                                            <div className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">

                                                <div>
                                                    <svg fill="currentColor" class="shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                                    </svg>
                                                </div>
                                                <span className="flex-1   ms-3 text-left  rtl:text-right ">
                                                    View  Faqs
                                                </span>
                                            </div>
                                        </NavLink>
                                    </div>
                                }
                            </li>

                            <li>


                                <div onClick={() => setMenu(menu === 14 ? 0 : 14)} className="flex dark:hover:bg-gray-700 rounded cursor-pointer items-center w-full justify-between px-2 py-1.5 text-white ">
                                    <FaFileLines />
                                    <span className="flex-1 text-xl ms-3 text-left rtl:text-right whitespace-nowrap">
                                        Terms & Conditions
                                    </span>
                                    {menu === 14 ? <IoIosArrowUp className=' text-2xl ' /> : <IoIosArrowDown className=' text-2xl ' />}

                                </div>

                            </li>

                        </ul>

                    </div>
                </aside>

            </>

        </div>
    )
}

export default SideBar


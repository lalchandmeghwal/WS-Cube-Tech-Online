import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Booter'


const Header = () => {

    const [showMenu, setShowMenu] = useState(true)


    return (
        <div>
            <header className=' sticky top-0 z-1000 text-white p-4   bg-[#101828] ' >
                <div className=' flex items-center justify-between max-w-317 mx-auto  ' >
                    <div className=' flex items-center sm:gap-4  gap-2 ' >
                        {showMenu ?
                                <AiOutlineClose onClick={() => setShowMenu(!showMenu)} size={25} className='min-[700px]:hidden cursor-pointer ' /> :
                                <AiOutlineMenu onClick={() => setShowMenu(!showMenu)} size={25} className='min-[700px]:hidden cursor-pointer ' />
                        }

                        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                        <h1 className=' sm:text-2xl  font-semibold ' >Flowbite</h1>
                    </div>

                    <div className='max-[700px]:hidden ' >
                        <ul className=' flex text-lg gap-5  '  >
                            <Li to={'/'} title={'Home'} />
                            <Li to={'/about'} title={'About'} />
                            <Li to={'/products'} title={'Products'} />
                            <Li to={'/'} title={'Contact'} />


                        </ul>
                    </div>

                    <div className=' flex sm:gap-4  gap-2  ' >
                        <button className=' bg-[#155dfc] font-semibold rounded py-2 sm:px-3 px-2  cursor-pointer hover:bg-[#0752f4] ' >View Cart (4)</button>
                        <button className=' bg-[#155dfc] font-semibold rounded py-2 sm:px-3 px-2 cursor-pointer hover:bg-[#0752f4]  ' >Login</button>
                    </div>

                </div>

            </header>
            {/* Mobile menu */}
            <div className={` ${showMenu ? " top-17" : "-top-17"}  transition-all duration-700    z-10 fixed   w-full bg-white  min-[700px]:hidden shadow-lg p-5 `} >
                <ul className=' flex text-lg gap-5 justify-center  '  >
                    <Li to={'/'} title={'Home'} />
                    <Li to={'/about'} title={'About'} />
                    <Li to={'/products'} title={'Products'} />
                    <Li to={'/'} title={'Contact'} />


                </ul>
            </div>

            <Outlet />
            <Footer />
        </div>
    )
};

const Li = ({ title, to }) => {
    return (
        <li>
            <NavLink to={to}>{title} </NavLink>
        </li>

    )
}

export default Header

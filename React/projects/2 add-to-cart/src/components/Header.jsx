import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {

    const cart = useSelector(state => state.cart.cart);



    return (
        <div>
            <nav className="bg-[#111827] sticky   w-full z-20 top-0 inset-s-0 ">
                <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <NavLink to={'/'} >
                        <div className="flex  items-center space-x-3 rtl:space-x-reverse">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-7"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-white text-xl text-heading font-semibold whitespace-nowrap">
                                Flowbite
                            </span>
                        </div>
                    </NavLink>

                    <button type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 text-white focus:ring-neutral-tertiary">
                        ==
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                            <Li to={'/cart'} title={`Cart (${cart.length})`} />
                            <Li to={'/register'} title={'Register'} />
                            <Li to={'/login'} title={'Login'} />
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />

        </div>
    )
};


const Li = ({ to, title }) => {
    return (
        <li className=' text-white ' >
            <NavLink to={to} >
                {title}
            </NavLink>
        </li>
    )
}

export default Header

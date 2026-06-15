import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { FaHeart } from "react-icons/fa";
import LikeList from './LikeList';
import { closeLike } from '../store/features/cart/cartSlice';
const Header = () => {


    const showLike = useSelector(state => state.cart.showLike);
    const cart = useSelector(state => state.cart.cart);
    const like = useSelector(state => state.cart.like);


    const dispatch = useDispatch();




    return (
        <>

            <nav className="bg-[#111827] sticky   w-full z-20 top-0  ">
                <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <Link to={'/'} >
                        <div className="flex  items-center space-x-3 rtl:space-x-reverse">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-7"
                                alt="Flowbite Logo"
                            />
                            <h1 className="self-center text-white text-2xl  text-heading font-bold whitespace-nowrap">
                                KadriBazar
                            </h1>
                        </div>
                    </Link>

                    <button type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 text-white focus:ring-neutral-tertiary">
                        ==
                    </button>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex items-center  flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                            <Li to={'/cart'} title={`Cart (${cart.length})`} />
                            <Li to={'/register'} title={'Register'} />
                            <Li to={'/login'} title={'Login'} />
                            {/* <Li to={'/'} title={<FaHeart />} /> */}
                            <div onClick={() => dispatch(closeLike(true))} className=' relative cursor-pointer ' >
                                <FaHeart className=' text-white  text-2xl mt-2 cursor-pointer ' />
                                <span className="absolute text-[#fb2c36] inset-0 flex items-center top-1 justify-center text-sm">
                                    {like.length}
                                </span>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>

            {showLike && <LikeList />}

        </>

    );
};


const Li = ({ to, title }) => {
    return (
        <li className=' text-white ' >
            <Link to={to}  >
                {title}
            </Link>
        </li>
    )
}

export default Header

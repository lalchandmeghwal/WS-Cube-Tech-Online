import { FaCartArrowDown, FaHeart } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import LikeList from "./LikeList";
import { toast, ToastContainer } from "react-toastify";
import { useMyAaddToCart } from "../store/AaddToCart";


const Header = () => {



    const { cart, like, closeLike, setlCoseLike } = useMyAaddToCart();





    return (
        <>

            <nav className=" bg-white shadow-lg sticky   w-full z-20 top-0  ">
                <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <div className=" flex items-center " >
                        <NavLink to={'/'} >
                            <div className="flex  items-center space-x-3 rtl:space-x-reverse">
                                <img
                                    src="https://product-listings.vercel.app/static/media/myntra.23d804112ff164fbba64.png"
                                    className="h-7"
                                    alt="Flowbite Logo"
                                />
                                <h1 className="self-center text-white text-2xl  text-heading font-bold whitespace-nowrap">
                                    KadriBazar
                                </h1>
                            </div>
                        </NavLink>


                        <button type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 text-white focus:ring-neutral-tertiary">
                            ==
                        </button>

                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex items-center  flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                                <li>MEN</li>
                                <li>WOMEN</li>
                                <li>KIDS</li>
                                <li>HOME & LIVING</li>
                                <li>StudioNEW</li>
                                <li> BEAUTY</li>

                            </ul>
                        </div>


                    </div>

                    <div className=" flex gap-5 text-2xl   " >

                        {cart.length < 1 ? <FaCartArrowDown onClick={() => toast.warning('Please Add To Card')} /> :
                            <NavLink to={'/cart'} >
                                <div className=" relative  " >
                                    <FaCartArrowDown />
                                    <span className=" text-lg text-center flex justify-center items-center bg-red-600 rounded-full  h-5 w-5 absolute -top-3 -right-3 text-white   "  >
                                        {cart.length}
                                    </span>
                                </div>
                            </NavLink>
                        }

                        {like.length < 1 ? <FaHeart onClick={() => toast.warning('Please Like To Card')} /> :
                            <div onClick={() => setlCoseLike(true)} className=" cursor-pointer relative  " >
                                <FaHeart />
                                <span className=" text-lg text-center flex justify-center items-center bg-red-600 rounded-full  h-5 w-5 absolute -top-3 -right-3 text-white   " >
                                    {like.length}
                                </span>
                            </div>
                        }
                    </div>
                    
                </div>
            </nav>

            {closeLike && <LikeList />}


            <ToastContainer />

        </>

    );
};



export default Header

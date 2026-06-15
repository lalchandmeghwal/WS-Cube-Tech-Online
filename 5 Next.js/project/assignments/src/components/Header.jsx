import Link from "next/link";
import {
    Heart,
    ShoppingCart,
    Search,
    ChevronDown,
} from "lucide-react";

const Header = () => {
    return (
        <header>
            {/* Top Bar */}
            <div className="border-b border-[#ebebeb]  sm:block  hidden ">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between text-sm">
                    <p>
                        Contact us 24/7 : +91-98745612330 /
                        furniture@gmail.com
                    </p>

                    <div className=" hover:text-[#c09578] " >
                        <Link href="#">Login</Link>
                        <span className="mx-2">/</span>
                        <Link href="#">Register</Link>
                    </div>
                </div>
            </div>

            {/* Middle Header */}
            <div className="border-b border-[#ebebeb] ">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                    {/* Logo */}

                    <div>
                        <img className=" w-40 " src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="" />
                    </div>


                    <div className=" flex items-center gap-3 " >


                        {/* Search */}
                        <div className="hidden lg:flex">
                            <div className="flex h-13  border border-[#ebebeb] ">
                                <input
                                    type="text"
                                    placeholder="Search product..."
                                    className="w-70 text-sm px-4   outline-none"
                                />
                                <button className="px-5 py-0 ">
                                    <Search size={18} />
                                </button>

                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <button className="border  sm:p-3   p-2 border-[#ebebeb] ">
                                <Heart size={22} />
                            </button>

                            <button className="border cursor-pointer p-2 px-3 border-[#ebebeb] flex items-center gap-3 relative">
                                <div className="">
                                    <ShoppingCart size={20} />
                                    <span className="absolute top-3 -left-3   bg-[#c09578] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                        12
                                    </span>
                                </div>

                                <span className="  sm:block  hidden  px-3 py-1 font-semibold">
                                    Rs. 255,400
                                </span>

                                <ChevronDown size={18} className=" sm:block  hidden" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className=" sm:block  hidden" >
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="flex text-[15px]    justify-center gap-16     ">


                        <li className="py-8" >
                            <Link
                                href="/"
                                className="text-[#c09578]"
                            >
                                HOME
                            </Link>
                        </li>

                        <li className="py-8" >
                            <Link
                                href="/product-list"
                                className="flex items-center gap-1"
                            >
                            Product List
                                
                            </Link>
                        </li>
                        <li className="py-8" >
                            <Link
                                href="/"
                                className="flex items-center gap-1"
                            >
                                LIVING
                                <ChevronDown size={16} />
                            </Link>
                        </li>

                        <li className="py-8" >
                            <Link
                                href="/"
                                className="flex items-center gap-1"
                            >
                                SOFA
                                <ChevronDown size={16} />
                            </Link>
                        </li>

                        <li className="py-8  relative group " >


                            <div className="flex cursor-pointer items-center gap-1">
                                PAGES
                                <ChevronDown size={16} />
                            </div>

                            <ul className=" hidden group-hover:block  text-[#919191]   w-55 p-7 border-[#ebebeb]   absolute -left-5 top-21  bg-white z-10  border " >

                                <Link href={'/about-us'} className=" my-1 " >
                                    About Us
                                </Link>

                                <Link href={'/cart'} >
                                    <li className=" my-2 " > Cart</li>
                                </Link>
                                <Link href={'/'} >
                                    <li className=" my-2 " >Checkout</li>
                                </Link>

                                <Link href={'/faq-items'}>
                                    <li className=" my-2 " >Frequently Questions</li>
                                </Link>




                            </ul>
                        </li>

                        <li className="py-8" >
                            <Link href="/contact-us">
                                CONTACT US
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header

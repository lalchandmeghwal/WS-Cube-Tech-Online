// import {
//     Facebook,
//     Instagram,
//     Twitter,
//     Youtube,
//     Send,
// } from "lucide-react";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbSend } from "react-icons/tb";





const Footer = () => {
    return (
        <footer className=" pt-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top Footer */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 pb-12">
                    {/* Contact */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">
                            Contact Us
                        </h3>

                        <div className="space-y-3 text-gray-600">
                            <p>
                                Address: Claritas est etiam processus
                                dynamicus
                            </p>
                            <p>Phone: 98745612330</p>
                            <p>Email: furniture@gmail.com</p>
                        </div>

                        <div className="flex gap-3 mt-8">
                            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube, TbSend ].map(
                                (Icon, index) => (
                                    <div
                                        key={index}
                                        className="w-12 h-12 text-[#a7a5a5] hover:border-[#c09578] hover:text-[#c09578] border border-[#ebebeb] rounded-full flex items-center justify-center   transition cursor-pointer"
                                    >
                                        <Icon size={20} />
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">
                            Information
                        </h3>

                        <ul className="space-y-4 text-gray-600">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Frequently Questions</a></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">
                            My Account
                        </h3>

                        <ul className="space-y-4 text-gray-600">
                            <li><a href="#">My Dashboard</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Cart</a></li>
                            <li><a href="#">Checkout</a></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">
                            Top Rated Products
                        </h3>

                        <div className="space-y-5">
                            <div className="flex gap-4 border-b pb-4">
                                <img
                                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617989633213Winona%20Mirror__.jpg"
                                    alt=""
                                    className="w-24 h-20 object-cover"
                                />

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Wooden Mirrors
                                    </p>

                                    <h4 className="font-medium">
                                        Winona Mirror
                                    </h4>

                                    <div className="flex gap-2 mt-2">
                                        <span className="line-through text-gray-400">
                                            Rs. 2,000
                                        </span>

                                        <span className="font-bold text-[#bf9477]">
                                            Rs. 1,500
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <img
                                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"
                                    alt=""
                                    className="w-24 h-20 object-cover"
                                />

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Nest Of Tables
                                    </p>

                                    <h4 className="font-medium">
                                        Caroline Study Tables
                                    </h4>

                                    <div className="flex gap-2 mt-2">
                                        <span className="line-through text-gray-400">
                                            Rs. 3,000
                                        </span>

                                        <span className="font-bold text-[#bf9477]">
                                            Rs. 2,500
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Menu */}
                <div className="border-y border-[#ebebeb] py-6">
                    <ul className="flex flex-wrap justify-center gap-8 text-gray-600">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Online Store</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                    </ul>
                </div>

                {/* Bottom Footer */}
                <div className="py-10 text-center">
                    <p className="text-gray-600 mb-5">
                        All Rights Reserved By Furniture | © 2026
                    </p>

                    <div className="flex justify-center gap-3">
                        <img
                            src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png"
                            alt=""
                        />
                       
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer

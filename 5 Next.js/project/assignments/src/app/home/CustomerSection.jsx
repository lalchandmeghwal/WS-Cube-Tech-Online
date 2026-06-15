"use client"
import UserSlider from "../../components/UserSlider";
import {
    Truck,
    RotateCcw,
    Headphones,
    Star,
} from "lucide-react";

export default function CustomerSection() {
    return (
        <>
            {/* Features */}
            <section className="border-y-2 border-[#c7c2c2] bg-[#f8f9f9] py-16">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center">

                    <div>
                        <div className="w-20 h-20 mx-auto border rounded-full flex items-center justify-center mb-4">
                            <Truck size={28} />
                        </div>
                        <h3 className="font-bold text-xl mb-2">
                            Free Shipping
                        </h3>
                        <p className="text-gray-500">
                            Free shipping on all orders
                        </p>
                    </div>

                    <div>
                        <div className="w-20 h-20 mx-auto border rounded-full flex items-center justify-center mb-4">
                            <RotateCcw size={28} />
                        </div>
                        <h3 className="font-bold text-xl mb-2">
                            Money Return
                        </h3>
                        <p className="text-gray-500">
                            Back guarantee under 7 days
                        </p>
                    </div>

                    <div>
                        <div className="w-20 h-20 mx-auto border rounded-full flex items-center justify-center mb-4">
                            <Headphones size={28} />
                        </div>
                        <h3 className="font-bold text-xl mb-2">
                            Online Support
                        </h3>
                        <p className="text-gray-500">
                            Support online 24 hours a day
                        </p>
                    </div>

                </div>
            </section>




            {/* slider */}
           

            <UserSlider/>




            {/* Newsletter */}
            <section className="py-20 bg-[#f8f9f9] ">
                <div className="max-w-3xl mx-auto text-center px-4">

                    <h2 className="text-4xl font-serif font-bold mb-3">
                        Our Newsletter
                    </h2>

                    <p className="text-gray-500 mb-10">
                        Get E-mail updates about our latest shop
                        and special offers.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-3 justify-center">
                        <input
                            type="email"
                            placeholder="Email address..."
                            className="border px-5 py-3 flex-1 outline-none"
                        />

                        <button
                            className="bg-[#bf9477] text-white px-10 py-3 hover:bg-[#a87c60] transition"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>
            </section>
        </>
    );
}
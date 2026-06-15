"use client"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const products = [
    {
        id: 1,
        image:
            "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg",
        category: "Nest Of Tables",
        title: "Caroline Study Tables",
        oldPrice: "Rs. 3,000",
        newPrice: "Rs. 2,500",
    },
    {
        id: 2,
        image:
            "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg",
        category: "Coffee Tables",
        title: "Evan Coffee Table",
        oldPrice: "Rs. 2,600",
        newPrice: "Rs. 2,300",
    },
    {
        id: 3,
        image:
            "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg",
        category: "Shoe Racks",
        title: "Gloria Shoe Racks",
        oldPrice: "Rs. 3,400",
        newPrice: "Rs. 2,900",
    },
    {
        id: 4,
        image:
            "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg",
        category: "Bookshelves",
        title: "Erica Bookshelfs",
        oldPrice: "Rs. 38,000",
        newPrice: "Rs. 30,000",
    },
    ,
    {
        id: 5,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615277326496Sapien%20Sofa%20Cum%20Bed__.jpg",
        category: "Wooden Sofa Cum Bed",
        title: "Sapien Sofa Cum Bed",
        oldPrice: "Rs. 64,000",
        newPrice: "Rs. 54,000",
    },
    {
        id: 6,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615225341228Ganthur%20Sheesham%20Wood%20Sofa%20Set___.jpg",
        category: "2 Seater Sofa",
        title: "Ganthur Sheesham Wood Sofa Set",
        oldPrice: "Rs. 8,000",
        newPrice: " Rs. 7,600",
    },
    {
        id: 7,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617816851291Calina%20Swing%20Jhula__.jpg",
        category: "Wooden Jhula",
        title: "Calina Swing Jhula",
        oldPrice: "Rs. 65,000",
        newPrice: "Rs. 58,000",
    },

    {
        id: 8,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg",
        category: "Side and End Tables",
        title: "Hrithvik Stool",
        oldPrice: "Rs. 7,000",
        newPrice: "Rs. 6,000",
    }, {
        id: 9,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617828302132Godfrey%20Coffee%20Table%20Set__.jpg",
        category: "Coffee Table Sets",
        title: "Godfrey Coffee Table Set",
        oldPrice: "Rs. 3,000",
        newPrice: "Rs. 2,200",
    }, {
        id: 10,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1608312103476Dorian%20Shoe%20Rack_.jpg",
        category: "Display Unit",
        title: "Dorian Shoe Rack",
        oldPrice: "Rs. 3,500",
        newPrice: "Rs. 2,800",
    }, {
        id: 11,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253167208651620078433247Louise%20Cabinet_.jpg",
        category: "Cabinets and Sideboard",
        title: "Louise Cabinet",
        oldPrice: "Rs. 28,000",
        newPrice: "Rs. 23,000",
    }, {
        id: 12,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617989633213Winona%20Mirror__.jpg",
        category: "Wooden Mirrors",
        title: "Winona Mirror",
        oldPrice: "Rs. 2,000",
        newPrice: "Rs. 1,500",
    }, {
        id: 13,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg",
        category: "1 Seater Sofa",
        title: "Yuvi sheesham wood sofa set",
        oldPrice: "Rs. 10,000",
        newPrice: "Rs. 7,600",
    },
    {
        id: 14,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663996596738Group%201.jpg",
        category: "Wooden Sofa Sets",
        title: "Grace Sheesham Wood Sofa Set",
        oldPrice: "Rs. 90,000",
        newPrice: "Rs. 72,000",
    },


    {
        id: 15,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg",
        category: "Prayer Units",
        title: "Hardwell Temple Prayer Unit",
        oldPrice: "Rs. 10,000",
        newPrice: "Rs. 9,400",
    }, {
        id: 16,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg",
        category: "Chest Of Drawers",
        title: "Isaac Chest of Drawer",
        oldPrice: "Rs. 32,000",
        newPrice: "Rs. 25,000",
    }, {
        id: 17,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1619988418966Leo%20TV%20Cabinets.jpg",
        category: "Tv Units",
        title: "Leo TV Cabinets",
        oldPrice: "Rs. 26,000",
        newPrice: "Rs. 21,000",
    }, {
        id: 18,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1661762520951Group%201.jpg",
        category: "L Shape Sofa",
        title: "Harper L Shaped Wooden Sofa with Drawer",
        oldPrice: "Rs. 85,000",
        newPrice: "Rs. 76,000",
    }, {
        id: 19,
        image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1661502549484Group%201.jpg",
        category: "3 Seater Sofa",
        title: "Victoria Sheesham Wood Sofa Set",
        oldPrice: "Rs. 8,000",
        newPrice: "Rs. 7,000",
    },



];

const BestSellingProducts = () => {
    return (
        <section className=" py-20">
            <div className="max-w-7xl mx-auto px-4" id="bestsellingProducts" >
                {/* Heading */}
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-5 flex-1">
                        <h2 className=" md:text-5xl text-2xl font-serif font-bold whitespace-nowrap">
                            Bestselling Products
                        </h2>

                        <div className="h-px sm:block hidden bg-gray-300 flex-1"></div>
                    </div>

                    <div className="flex gap-3 ml-5">
                        <button className="custom-prev cursor-pointer">
                            <ChevronLeft size={24} />
                        </button>

                        <button className="custom-next cursor-pointer" >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Products */}
                <div  >

                    <Swiper
                        slidesPerView={5}
                        spaceBetween={15}
                        freeMode={true}

                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}

                        modules={[FreeMode, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 5,
                            },
                        }}

                    >

                        {products.map((item) => (
                            <SwiperSlide
                                key={item.id}
                                className="bg-white my-1 shadow-[0_10px_20px] shadow-[#dfdfdf] overflow-hidden group"
                            >
                                {/* Image */}
                                <div className="overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full   transition duration-500  "
                                    />
                                </div>

                                {/* Content */}
                                <div className="text-center p-6">
                                    <p className="text-gray-500 mb-3">
                                        {item.category}
                                    </p>

                                    <h3 className=" line-clamp-1 font-serif text-black/80 font-semibold  mb-6 hover:text-[#bf9477] ">
                                        {item.title}
                                    </h3>

                                    <div className="flex justify-center gap-3 mb-6">
                                        <span className="line-through text-gray-500">
                                            {item.oldPrice}
                                        </span>

                                        <span className="font-bold text-[#bf9477]">
                                            {item.newPrice}
                                        </span>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex justify-center">
                                        <button className="bg-gray-100 p-2 hover:bg-[#bf9477] cursor-pointer hover:text-white transition">
                                            <Heart size={22} />
                                        </button>

                                        <button className="bg-gray-100 px-4 cursor-pointer py-2 ml-1 hover:bg-[#bf9477] hover:text-white transition">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>



                </div>

            </div>
        </section>
    );
}

export default BestSellingProducts




// <section className = " py-20" >
//     <div className="max-w-7xl mx-auto px-4" id="bestsellingProducts" >
//         {/* Heading */}
//         <div className="flex items-center justify-between mb-10">
//             <div className="flex items-center gap-5 flex-1">
//                 <h2 className="text-5xl font-serif font-bold whitespace-nowrap">
//                     Bestselling Products
//                 </h2>

//                 <div className="h-px bg-gray-300 flex-1"></div>
//             </div>

//             <div className="flex gap-3 ml-5">
//                 <button>
//                     <ChevronLeft size={24} />
//                 </button>

//                 <button>
//                     <ChevronRight size={24} />
//                 </button>
//             </div>
//         </div>

//         {/* Products */}
//         <div  >

//             <Swiper
//                 slidesPerView={5}
//                 spaceBetween={15}
//                 freeMode={true}

//                 navigation={true}
//                 modules={[FreeMode, , Navigation]}
//                 className="mySwiper"
//             >

//                 {products.map((item) => (
//                     <SwiperSlide
//                         key={item.id}
//                         className="bg-white m-1 shadow-[0_10px_20px] shadow-[#dfdfdf] overflow-hidden group"
//                     >
//                         {/* Image */}
//                         <div className="overflow-hidden">
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="w-full   transition duration-500  "
//                             />
//                         </div>

//                         {/* Content */}
//                         <div className="text-center p-6">
//                             <p className="text-gray-500 mb-3">
//                                 {item.category}
//                             </p>

//                             <h3 className=" line-clamp-1 font-serif text-black/80 font-semibold  mb-6 hover:text-[#bf9477] ">
//                                 {item.title}
//                             </h3>

//                             <div className="flex justify-center gap-3 mb-6">
//                                 <span className="line-through text-gray-500">
//                                     {item.oldPrice}
//                                 </span>

//                                 <span className="font-bold text-[#bf9477]">
//                                     {item.newPrice}
//                                 </span>
//                             </div>

//                             {/* Buttons */}
//                             <div className="flex justify-center">
//                                 <button className="bg-gray-100 p-2 hover:bg-[#bf9477] cursor-pointer hover:text-white transition">
//                                     <Heart size={22} />
//                                 </button>

//                                 <button className="bg-gray-100 px-4 cursor-pointer py-2 ml-1 hover:bg-[#bf9477] hover:text-white transition">
//                                     Add To Cart
//                                 </button>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}

//             </Swiper>



//         </div>

//     </div>
//     </section >

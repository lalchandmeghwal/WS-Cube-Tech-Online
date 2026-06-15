
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star } from 'lucide-react';

export default function UserSlider() {
    return (
        <>
    
            {/* Testimonial */}
            <section className="py-20 " id='customers' >
                <div className="max-w-3xl mx-auto text-center px-4">

                    <h2 className="text-4xl font-serif font-bold mb-6">
                        What Our Customers Say ?
                    </h2>

                </div>


                <div className=" text-center px-4" >


                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}

                        modules={[Autoplay, Pagination,]}
                        className="mySwiper"
                    >


                        <SwiperSlide>

                            <div className=" mb-15  " >

                                <p className="text-gray-500 max-w-4xl mx-auto   leading-8 mb-10">
                                    These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                                </p>

                                <img
                                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg"
                                    alt=""
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                />

                                <h3 className="font-bold uppercase">
                                    Kathy Young
                                </h3>

                                <p className="text-gray-500 mt-2 mb-4">
                                    CEO of SunPark
                                </p>

                                <div className="flex justify-center gap-1 mb-6">
                                    <Star size={18} fill="currentColor" className=" text-[#bf9477] " />
                                    <Star size={18} fill="currentColor" className=" text-[#bf9477] " />
                                    <Star size={18} fill="currentColor" className=" text-[#bf9477] " />
                                    <Star size={18} fill="currentColor" className=" text-[#bf9477] " />
                                    <Star size={18} fill="currentColor" className=" text-[#bf9477] " />
                                </div>



                            </div>
                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="" >

                                <p className="text-gray-500  max-w-4xl mx-auto      leading-8 mb-10">
                                    These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                                </p>

                                <img
                                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg"
                                    alt=""
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                />

                                <h3 className="font-bold uppercase">
                                    Kathy Young
                                </h3>

                                <p className="text-gray-500 mt-2 mb-4">
                                    CEO of SunPark
                                </p>

                                <div className="flex justify-center gap-1 mb-6">
                                    <Star size={18} fill="currentColor" className=" text-[#bf9477] " />
                                    <Star size={18} fill="currentColor" className=" text-[#bf9477] " />
                                    <Star size={18} fill="currentColor" className=" text-[#bf9477] " />
                                </div>



                            </div>
                        </SwiperSlide>


                        <SwiperSlide>

                            <div className="" >

                                <p className="text-gray-500  max-w-4xl mx-auto      leading-8 mb-10">
                                    These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                                </p>

                                <img
                                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png"
                                    alt=""
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                />

                                <h3 className="font-bold uppercase">
                                    Kathy Young
                                </h3>

                                <p className="text-gray-500 mt-2 mb-4">
                                    CEO of SunPark
                                </p>

                                <div className="flex justify-center gap-1 mb-6">
                                    <Star size={18} fill="currentColor" className=" text-[#bf9477] " />
                                    <Star size={18} fill="currentColor" className=" text-[#bf9477] " />
                                    <Star size={18} fill="currentColor" className=" text-[#bf9477] " />
                                    <Star size={18} fill="currentColor" className=" text-[#bf9477] " />
                                </div>



                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </section>
        </>
    );
}
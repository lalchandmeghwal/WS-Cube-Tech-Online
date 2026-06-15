import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <>


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
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://smartcitymohaliplots.realtynivesh.com/img/banner1.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://smartcitymohaliplots.realtynivesh.com/img/banner2.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://smartcitymohaliplots.realtynivesh.com/img/banner3.jpg" alt="" />
                </SwiperSlide>
            </Swiper>



            <div className='bg-[#306598] p-10 ' >
                <div className=' max-w-292 m-auto  ' >
                    <h3 className='  text-lg sm:text-2xl text-white '>Are you interested in FREE Site Visit</h3>

                    <form className=' my-4 flex  gap-5 max-[990px]:flex-col   justify-between' >
                        <input className=' w-full outline-0 text-lg bg-white p-3 ' type="text" placeholder='ENTER NAME' />
                        <input className=' w-full outline-0 text-lg bg-white p-3 ' type="number" placeholder='ENTER PHONE' />
                        <input className=' w-full outline-0 text-lg bg-white p-3 ' type="email" placeholder='ENTER EMAIL' />
                        <button className=' w-full outline-0 text-lg bg-[#4ca344] text-white p-3 ' >BOOK A FREE SITE VISIT</button>
                    </form>

                </div>
            </div>

            


            <div className='bg-[#f3f3f3] p-10 ' >
                <div className=' text-center max-w-292 m-auto  ' >
                    <h3 className=' text-2xl sm:text-3xl my-4 font-semibold text-[#306598]  '>Why Smart City ?</h3>

                    <p>Your Dream Home Awaits you to Own Exquisite Site in the Smart City.</p>
                    <div className=' mt-4 hidden  sm:flex justify-center p-4' >
                        <Swiper
                            spaceBetween={70} 
                            
                            // centeredSlides={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, ]}
                            className="mySwiper "
                        >
                            <SwiperSlide>
                                <div className='flex  justify-center '> 
                                    <img className='max-[960px]:w-40 max-[1080px]:w-70 max-[1190px]:w-80 w-90' src="https://smartcitymohaliplots.realtynivesh.com/why/1.png" alt="" />
                                    <img className='max-[960px]:w-40 max-[1080px]:w-70 max-[1190px]:w-80 w-90' src="https://smartcitymohaliplots.realtynivesh.com/why/2.png" alt="" />
                                    <img className='max-[960px]:w-40 max-[1080px]:w-70 max-[1190px]:w-80 w-90' src="https://smartcitymohaliplots.realtynivesh.com/why/3.png" alt="" />
                               
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='flex justify-center ' >

                                    <img className='max-[960px]:w-40 max-[1080px]:w-70 max-[1190px]:w-80 w-90' src="https://smartcitymohaliplots.realtynivesh.com/why/4.png" alt="" />
                                    <img className='max-[960px]:w-40 max-[1080px]:w-70 max-[1190px]:w-80 w-90' src="https://smartcitymohaliplots.realtynivesh.com/why/5.png" alt="" />
                                    <img className='max-[960px]:w-40 max-[1080px]:w-70 max-[1190px]:w-80 w-90' src="https://smartcitymohaliplots.realtynivesh.com/why/6.png" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div  className='flex justify-center ' >

                                    <img className='max-[960px]:w-40 max-[1080px]:w-70 max-[1190px]:w-80 w-90' src="https://smartcitymohaliplots.realtynivesh.com/why/7.png" alt="" />
                                    <img className='max-[960px]:w-40 max-[1080px]:w-70 max-[1190px]:w-80 w-90' src="https://smartcitymohaliplots.realtynivesh.com/why/8.png" alt="" />
                                    <img className='max-[960px]:w-40 max-[1080px]:w-70 max-[1190px]:w-80 w-90' src="https://smartcitymohaliplots.realtynivesh.com/why/9.png" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='flex justify-center '>

                                    <img className='max-[960px]:w-40 max-[1080px]:w-70 max-[1190px]:w-80 w-90' src="https://smartcitymohaliplots.realtynivesh.com/why/10.png" alt="" />
                                    <img className='max-[960px]:w-40 max-[1080px]:w-70 max-[1190px]:w-80 w-90' src="https://smartcitymohaliplots.realtynivesh.com/why/11.png" alt="" />
                                    <img className='max-[960px]:w-40 max-[1080px]:w-70 max-[1190px]:w-80 w-90' src="https://smartcitymohaliplots.realtynivesh.com/why/12.png" alt="" />
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                </div>
            </div>




        </>
    );
}


export default Slider




import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
    return (
        <div>


            {/* slide  */}

            <div className='my-10'>
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
                        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/3/fg7fKlf3_f7a15d2b8f2e4bb793b1ccc60df89699.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/15/aEqIXcxR_25d6bdf1158c41e2bcf03b171ba591c5.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/15/MxWhMgAV_d0a4b2da573f4908a110fe91f51fca4b.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/15/Mmvh5ptn_07c16f04b94f4778add31ecfece4ebf7.png" alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/15/akinftiU_2d56988e04c34a3bb2bd4d7d25478d37.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/15/UjFBCkVq_3e91c84dfed64ded8b161c301645e79e.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/15/z1crCP1q_fed91e2cd872455da1d52b9838d56afa.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/15/cpJvSKVf_d61645d7443d491e93478d973fc2f8b6.png" alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className='  flex justify-center flex-wrap ' >
                <img className='max-[1135px]:w-full max-[1215px]:w-140 max-[1280px]:w-150 w-180 ' src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/AUGUST/25/P6zD7j1z_f8a4c9305474464b9d6f9bb0bc628270.png" alt="" />
                <img className='max-[1135px]:w-full max-[1215px]:w-140 max-[1280px]:w-150  w-180  ' src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/30/a5d38292-c9b1-48cf-b5f5-5c9425a590761727694224635-1.jpg" alt="" />
            </div>

            <h2 className='text-3xl text-[#3E4152] uppercase mt-14 mb-10  tracking-widest font-bold ml-8'>Biggest Deals On Top Drips</h2>

            <div className=' p-10 justify-between gap-5 flex flex-wrap ' >
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/F8MxKVPK_338a0b7a1d974515bc2a17358bdd5bb0.png" alt="" />
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/8WEvkqR3_3c0f4520bd374e878e010e46a48dda11.png" alt="" />
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/PrKrxMQ0_61f9682563464443bdcbba636b600c6d.png" alt="" />
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/tiTulCRM_60e1001495144a18a5ec832a4273e974.png" alt="" />
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/TPmXcxMJ_f9a6ec16d97a41fe975e48b990e48a1c.png" alt="" />
                
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/2PrEdt1t_888935f77cc04658bd0a30f29dd808d4.png" alt="" />
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/sohVGYiQ_9a9161478d7e4cacb3a6b831c01dd2fa.png" alt="" />
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/m0kBqHyr_467ddd19de2249498fe6bc8cea308dc8.png" alt="" />
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/yBvCoIHJ_461000047ab4459aaa967229075f4bae.png" alt="" />
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/asloP3vU_2a199d3c0bae40bf98d78cf64979f725.png" alt="" />

                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/SlgEEysk_4037a4ede2124282aa761d3f89f9f512.png" alt="" />
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/jaw2RZ6j_52a1ab6a82c1414094828e289925cba7.png" alt="" />
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/d3JRSKTl_2e64aa2e6e084a7abdb05183c7618860.png" alt="" />
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/8WqltwfN_149fcbc00ee94c6bb7f5e07d176bc39d.png" alt="" />
                <img className=' max-w-66' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/14/CpuLXb7v_142364fbb26a4a578255002b9bd93a79.png" alt="" />



            </div>


        </div>
    )
}

export default Hero

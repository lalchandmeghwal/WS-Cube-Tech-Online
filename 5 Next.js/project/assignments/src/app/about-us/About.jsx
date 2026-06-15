"use client";
import React from 'react'
import Link from "next/link";
import UserSlider from '@/components/UserSlider';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto  px-4 py-6">

            <div className="text-center  mb-5">
                <h1 className="text-4xl font-serif font-bold">
                    About Us
                </h1>

                <p className="text-sm text-gray-500 mt-2">

                    <Link href={'/'}>  Home  </Link> <span className=" ml-3 text-[#bf9477] " > &gt; About Us</span>
                </p>
            </div>

            <div className="border-t border-[#ebebeb] pt-6 mb-12 ">
                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg" alt="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg" className="w-full " />

                <div className=' text-center' >
                    <h2 className='text-2xl  font-serif font-semibold  my-5'>Welcome to Monsta!</h2>

                    <p className=' text-sm text-[#5a5a5a]  leading-7 ' >Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.</p>

                    <p className='  text-sm mt-5 text-[#c09578]  leading-7 ' >“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</p>

                    <h2 className='text-2xl  font-serif font-semibold  my-5 mt-7 '>Why chose us?</h2>


                    <div className=' grid md:grid-cols-3 gap-6 ' >
                        <div className=' flex flex-col  items-center ' >
                            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/89df96b6-b70d-463b-affb-58a74d49ed6b-1670161065.jpg" alt="" />
                            <h3 className='  text-[#242424] font-serif my-2 ' >100% Money Back Guarantee</h3>
                            <p className=' text-sm text-[#5a5a5a] ' >Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                        </div>

                        <div className=' flex flex-col  items-center ' >
                            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/eb6a7519-f0f9-469f-af25-4ba0536060fd-1670161090.jpg" alt="" />
                            <h3 className='  text-[#242424] font-serif my-2 ' >Online Support 24/7</h3>
                            <p className=' text-sm text-[#5a5a5a] ' >Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                        </div>

                        <div className=' flex flex-col  items-center ' >
                            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/d86a55b7-bbd1-4565-86ad-b3463e728fdc-1760712425.jpg" alt="" />
                            <h3 className='  text-[#242424] font-semibold my-2 ' >Creative-Design</h3>
                            <p className=' text-sm text-[#5a5a5a] ' >Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim God has created everything like air,water,tree and metal</p>
                        </div>


                    </div>

                    <div className=' grid md:grid-cols-3 gap-6 ' >
                        
                        <div className=' flex flex-col  items-center ' >
                            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg" alt="" />
                            <h3 className='  text-[#242424] font-semibold  font-serif my-3 ' >What Do We Do?</h3>
                            <p className=' text-sm text-[#5a5a5a] leading-6 ' >Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                        </div>

                        <div className=' flex flex-col  items-center ' >
                            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg" alt="" />
                            <h3 className='  text-[#242424] font-semibold  font-serif my-3 ' >Our Mission</h3>
                            <p className=' text-sm text-[#5a5a5a] leading-6 ' >Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                        </div>

                        <div className=' flex flex-col  items-center ' >
                            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg" alt="" />
                            <h3 className='  text-[#242424] font-semibold  font-serif my-3 ' >History Of Us</h3>
                            <p className=' text-sm text-[#5a5a5a] leading-6 ' >Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                        </div>

                    </div>

                    {/* UserSlider */}

                    <div>
                        <UserSlider />
                    </div>

                    

                </div>


            </div>


        </div>
    )
}

export default About

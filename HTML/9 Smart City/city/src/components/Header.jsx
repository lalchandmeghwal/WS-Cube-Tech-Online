import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <header className='flex sticky top-0 bg-white z-40 shadow items-center lg:px-5 xl:px-13 justify-between ' >

            <div className='max-w-25' >
                <img className=' w-full '    src="/Logo.svg" alt="" />

            </div>

            <div className='flex items-center lg:px-13 justify-between ' >

                <div>
                    <ul className='flex text-[#004282] lg:px-13 lg:gap-3 xl:gap-5  font-bold justify-between ' >
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#Projects">Project Highlights</a></li>
                        <li><a href="#sitePlan">Site Plan</a></li>
                        <li><a href="#location">Location</a></li>
                        <li><a href="#priceList">Price List</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contentUs">Contact Us</a></li>
                    </ul>
                </div>

                <div className='flex lg:gap-4 xl:gap-8  xl:text-lg font-semibold ' >
                    <button className=' cursor-pointer bg-[#40d753] ' ></button>
                    <Button titile={'Book Online'} style={'text-white lg:px-3 py-1'}/>
                    <button className=' cursor-pointer border-2 border-[#f3842f] text-[#f3842f] px-3 py-1' > Call us at: 9896216660</button>
                   
                </div>

            </div>

        </header>
    )
}

export default Header

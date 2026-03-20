import React from 'react'

const Footer = () => {
    return (
        <footer className=' bg-[#306598]  text-white lg:p-20' >
            <div className='max-w-292 m-auto' >
                <div className=' grid grid-cols-1 sm:grid-cols-2 justify-between ' >

                    <div className='max-w-110  lg:leading-13  text-right p-10 font-semibold  lg:text-2xl  ' >
                        <h3>SPECIAL LAUNCH OFFERS ON LIMITED INVENTORY</h3>
                    </div>

                    <div className=' flex-1  text-center   sm:p-10   ' >
                        <p className=' text-lg' id='contentUs' ><strong>Phone:</strong> +919896216660 </p>
                        <strong>Site Address:</strong>
                        <p className=' text-lg'>NH-205A, Banur-Landran Road,</p>
                        <p className='max-w-120 text-lg  m-auto ' >Adj. Bharat Petrol Pump, Near Upcoming Aerocity Extension, Mohali</p>
                    </div>

                </div>
                <div className=' text-center' >
                    <p className=' text-gray-50/70 ' >Copyright © 2022 - Smartcity. All Rights Reserved.</p>
                    <p className=' text-green-50/70  text-sm cursor-pointer font-semibold ' >Terms & Conditions | Privacy Policy</p>

                </div>
            </div>
        </footer>
    )
}

export default Footer

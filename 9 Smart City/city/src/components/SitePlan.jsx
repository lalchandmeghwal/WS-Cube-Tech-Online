import React from 'react'

const SitePlan = () => {
    return (
        <div className='  p-10  ' >
            <div className=' text-center max-w-200 m-auto  '>

                <h3 className=' text-[#306598] my-2 mb-5 text-3xl font-semibold uppercase ' id='sitePlan'>Site Plan</h3>
                <p className=' mb-10 text-lg'>Adj. Bharat Petrol Pump, Near Upcoming Aerocity Extension, Mohali</p>

                <div>
                    <img src="https://smartcitymohaliplots.realtynivesh.com/site-map-1-scaled.jpg" alt="" />
                </div>

                <div className=' text-center my-10 sm:my-20 ' >

                    <button className=' bg-[#f4b609] transition-all duration-700 hover:bg-[#d3a016] cursor-pointer shadow-black/50 shadow-[0px_10px_50px] px-10 rounded-lg py-2  sm:text-3xl font-semibold '>Download Brochure</button>
                </div>

                <h3 className=' text-[#306598] my-2 mb-5 text-3xl font-semibold uppercase ' id='location'>Location</h3>
                <p className=' my-5 sm:my-15 '>Your Dream Home Awaits you to Own Exquisite Site in the Smart City.</p>
                <div>
                    <img src="https://smartcitymohaliplots.realtynivesh.com/location-map.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default SitePlan

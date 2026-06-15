import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
const Overview = () => {
    return (
        <div id='overview' >

            <div className='flex flex-col lg:flex-row items-center  lg:items-start text-center lg:text-left my-10 gap-8 max-w-7xl p-5 lg:p-10 mx-auto' >

                <div className=' w-full lg:w-1/2 flex ' >
                    <img src="https://smartcitymohaliplots.realtynivesh.com/img/1.jpeg" alt="" />
                </div>

                <div className=' w-full lg:w-1/2 text-start  ' >
                    <h3 className=' text-[#306598] my-2 mb-8 text-3xl font-semibold uppercase '>Project Overview</h3>
                    <p>Smart City Mohali is a 22-acre fully integrated plotted development project in Banur-Landran Road Mohali, that includes 446 Residential plots Near Aero City & IT City Mohali with exceptional amenities and intelligent landscaping. The project provides excellent family living options as well as first-rate recreational facilities and amenities to make your life easier. This property has something for everyone, from the clubhouse to the indoor game area, children's playground, yoga & meditation hall, party hall, business center, and cafeteria.</p>
                    <p className=' my-5' >Smart City Mohali is a 100% clear title project and a bank-approved plot with a full campus compounded wall, an underground EB line, grand elevation architecture, and more. Smart City Mohali will be an ideal place to live with your family as well as work and play.</p>
                    <ul>
                        <li className='flex gap-2 items-center  my-2'> <IoMdCheckmark className=' text-[#337ab7]' /> Plot Size - 80/100/110/137 Sq.Yards</li>
                        <li className='flex gap-2 items-center  my-2'> <IoMdCheckmark className=' text-[#337ab7]' /> Price Starts From - ₹ 25.60 Lakhs</li>
                        <li className='flex gap-2 items-center  my-2'> <IoMdCheckmark className=' text-[#337ab7]' /> RERA Approved</li>
                        <li className='flex gap-2 items-center  my-2'> <IoMdCheckmark className=' text-[#337ab7]' />  Possession - Immediate</li>
                        <button className=' cursor-pointer bg-[#40d753]  text-white text-lg px-4 py-2' >Book Now</button>

                    </ul>
                </div>


            </div>


        </div>
    )
}

export default Overview

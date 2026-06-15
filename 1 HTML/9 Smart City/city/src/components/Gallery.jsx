import React from 'react'
import Button from './Button'

const Gallery = () => {
  return (
    <div>
      <div className=' p-10 max-w-290 m-auto ' >

        <h3 className=' text-center text-[#065096]  my-2 mb-8 text-3xl font-semibold uppercase ' id='gallery'>Project Gallery</h3>

        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   gap-5' >

          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/1.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/2.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/3.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/4.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/5.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/6.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/7.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/8.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/9.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/10.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/11.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/12.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/13.jpeg" alt="" />
          <img className=' w-full h-70 ' src="https://smartcitymohaliplots.realtynivesh.com/cons/14.jpeg" alt="" />

        </div>
        <h3 className=' text-center text-[#065096] my-10  sm:mt-20  mb-5 text-3xl font-semibold uppercase ' >Home Loan Facility</h3>
        <p className='text-lg text-center '>Your Dream Home Awaits you to Own Exquisite Site in the Smart City Mohali Project.</p>

        <div className=' w-full grid max-[400px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-5 justify-center my-10' >

          <div className='w-full flex flex-col items-center shadow-gray-500 shadow-[0_0_5px]  justify-center' >
            <img className=' w-full ' src={'https://smartcitymohaliplots.realtynivesh.com/bank/1.png'} alt="" />

          </div>

          <div className='w-full flex flex-col items-center shadow-gray-500 shadow-[0_0_5px]  justify-center' >
            <img className='w-40' src={'https://smartcitymohaliplots.realtynivesh.com/bank/2.png'} alt="" />

          </div>

          <div className='w-full flex flex-col items-center p-5 shadow-gray-500 shadow-[0_0_5px]  justify-center' >
            <img className='w-40' src={'https://smartcitymohaliplots.realtynivesh.com/bank/3.png'} alt="" />

          </div>

          <div className='w-full flex flex-col items-center shadow-gray-500 p-5 shadow-[0_0_5px]  justify-center' >
            <img className='w-40' src={'https://smartcitymohaliplots.realtynivesh.com/bank/4.png'} alt="" />

          </div>
          <div className='w-full flex flex-col items-center shadow-gray-500 shadow-[0_0_5px]  justify-center' >
            <img className='w-40' src={'https://smartcitymohaliplots.realtynivesh.com/bank/5.png'} alt="" />

          </div>
          <div className='w-full flex flex-col items-center  justify-center shadow-gray-500 shadow-[0_0_5px] ' >
            <img className='w-40' src={'https://smartcitymohaliplots.realtynivesh.com/bank/6.png'} alt="" />

          </div>





        </div>
      </div>


      <div className='bg-[#f3f3f3] p-5 '>
        <div className='   grid grid-cols-1 w-full sm:grid-cols-2 gap-8 justify-between  border-5 border-[#0886c7] p-4 max-w-290 m-auto '>

          <div>
            <img className=' ' src="https://smartcitymohaliplots.realtynivesh.com/img/s3.jpg" alt="" />
          </div>

          <div className='flex  flex-col justify-center    ' >
            <h3 className='  text-[#065096]  my-2 mb-5 sm:text-3xl font-semibold uppercase ' id='gallery'>
              Schedule Your Site Visit
            </h3>
            <p className=' leading-7 text-sm  ' >
              If you are interested in a site visit, please contact us immediately or visit us at the following link to get assistance from our executives and learn more about our project and the benefits you will receive here with us.
            </p>

            <div className='flex my-5 gap-5'>

              <Button titile={' Make A Call'} style={'px-4 py-2 text-white sm:text-2xl  font-semibold '} />
              <Button titile={'  Download Brochure'} style={'px-4 py-2 text-white sm:text-2xl  font-semibold '} />

            </div>



          </div>


        </div>
      </div>




    </div>
  )
}

export default Gallery

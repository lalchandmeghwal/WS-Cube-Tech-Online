import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'

const Dashboard = () => {
  return (
    <div>

      <div className=' grid grid-cols-3 gap-5 p-4 text-white ' >
        
        <div className=' bg-[#5956d3] rounded h-48 p-5' >
          <div className='  flex justify-between items-center  ' >
            <h2 className=' text-xl  font-bold  ' > <span className=' text-3xl  ' >26K </span> (-12.4% ↓)</h2>
            <HiDotsVertical className=' text-3xl ' />
          </div>
          <h3 className=' text-2xl  font-semibold  mt-2 ' >Users</h3>

        </div>

        <div className=' bg-[#2998fe] rounded h-48 p-5' >
          <div className='  flex justify-between items-center  ' >
            <h2 className=' text-xl  font-bold  ' > <span className=' text-3xl  ' >$6,200</span>  (40.9% ↑)</h2>
            <HiDotsVertical className=' text-3xl ' />
          </div>
          <h3 className=' text-2xl  font-semibold  mt-2 ' >Product</h3>

        </div>

        <div className=' bg-[#fcb01e] rounded h-48 p-5' >
          <div className='  flex justify-between items-center  ' >
            <h2 className=' text-xl  font-bold  ' > <span className=' text-3xl  ' >2.49% </span>(84.7% ↑)</h2>
            <HiDotsVertical className=' text-3xl ' />
          </div>
          <h3 className=' text-2xl  font-semibold  mt-2 ' >Category</h3>

        </div>

        <div className=' bg-[#e95353] rounded h-48 p-5' >
          <div className='  flex justify-between items-center  ' >
            <h2 className=' text-xl  font-bold  ' > <span className=' text-3xl  ' >44K</span>  (-23.6% ↓)</h2>
            <HiDotsVertical className=' text-3xl ' />
          </div>
          <h3 className=' text-2xl  font-semibold  mt-2 ' >Orders</h3>

        </div>
      </div>
    </div>
  )
}

export default Dashboard

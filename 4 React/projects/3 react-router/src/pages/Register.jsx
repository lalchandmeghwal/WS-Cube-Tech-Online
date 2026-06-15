import React from 'react'

const Register = () => {
  return (
    <div className=' sm:h-screen px-5  ' >



      <div>


        <div className=' rounded max-w-160 border border-gray-300 mx-auto ' >

          <h2 className=' p-5  text-2xl font-bold ' >Register for a free account</h2>
          <div className=' h-px w-full bg-gray-300 ' ></div>

          <form className=' p-5 ' >

            <div >
              <label htmlFor="email" className='  font-bold '  >Email Address</label>
              <input id='email' className=' w-full p-2 text-lg  border border-gray-300 rounded  mt-1 ' type="text" placeholder='Enter Your Email ' />
            </div>

            <div className=' my-3' >
              <label htmlFor="email" className='  font-bold '  >Email Address</label>
              <input id='email' className=' w-full p-2 text-lg  border border-gray-300 rounded  mt-1 ' type="text" placeholder='Enter Your Email ' />
              <p>At least 6 characters</p>
            </div>

            <button className=' bg-[#3b82f6] cursor-pointer rounded-full py-2 px-4 text-white font-bold mt-3 ' >Sign Up</button>

          </form>
        </div>
        <p className=' text-center my-5 text-sm cursor-pointer ' >I already have an account</p>
        <p className=' text-center my-5 text-sm cursor-pointer ' >This is a product of <b>Your Company</b> </p>
      </div>


    </div>
  )
}

export default Register

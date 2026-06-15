import React from 'react'
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className=' bg-[#f3f4f6] h-screen  p-4 py-5 flex justify-center items-center   ' >

      <div className=' max-w-193 flex sm:flex-row flex-col  p rounded-lg overflow-hidden   ' >

        <div className=' text-center text-white bg-[#3b82f6] flex justify-center items-center flex-col p-5 sm:w-[72%] '  >
          <h2 className=' my-5 text-5xl font-bold ' >K-WD</h2>
          <p className=' text-gray-200/70 mb-5 ' >With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the UI design on us!</p>
          <p >Don't have an account?</p>
          <p className=' text-lg  underline ' >Get Started!</p>
          <p className=' my-5 ' >Read our <u>terms</u> and <u> conditions</u> </p>
        </div>

        <div className=' bg-white w-full p-5  ' >
          <h2 className=' text-xl font-semibold ' >Account Login</h2>
          <form className=' ' >

            <div className=' my-3 ' >
              <label htmlFor="email" className=' font-semibold text-gray-500 '  >Email Address</label>
              <input id='email' className=' outline-0 w-full p-2 text-lg  border border-gray-300 rounded  mt-1 ' type="text" />
            </div>

            <div className=' my-3 mt-5 ' >
              <div className=' flex justify-between  ' >
                <label htmlFor="pass" className=' font-semibold text-gray-500 '  >Password</label>
                <p className=' text-[#2563eb] cursor-pointer hover:underline ' >Forgot Password?</p>
              </div>

              <input id='pass' className=' outline-0 w-full p-2 text-lg  border border-gray-300 rounded  mt-1 ' type="password" />
            </div>

            <div className=' flex gap-1  items-center  my-3 ' >

              <input id='check' className='' type="checkBox" />
              <label htmlFor="check" className=' font-semibold text-gray-500 '  >Remember me</label>
            </div>

            <button className=' w-full bg-[#3b82f6] cursor-pointer rounded-lg py-2 px-4 text-white font-bold mt-3 ' >
              Log in</button>

            <div className=' flex items-center justify-center gap-1   my-4 ' >
              <div className=' w-15 h-px bg-gray-400 ' ></div>
              <p>or login with</p>
              <div className='  w-15 h-px bg-gray-400 ' ></div>
            </div>

            <button className=' flex items-center justify-center gap-1 w-full hover:bg-[#242424] text-black border border-black cursor-pointer rounded-lg py-2 px-4 hover:text-white  ' >
              <FaGoogle/>
              Login with Google
            </button>
            <button className=' flex items-center justify-center gap-1 w-full text-[#3b82f6] hover:bg-[#3b82f6] border border-[#3b82f6] cursor-pointer rounded-lg py-2 px-4 hover:text-white  mt-3 ' >
              <FaFacebook/>
              Login with Facebook</button>
          </form>
        </div>

      </div>


    </div>
  )
}

export default Login

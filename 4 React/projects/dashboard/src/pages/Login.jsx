import React from 'react';
import logo from '../images/logo.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // /dashboard

    const navigate = useNavigate();
    const formHandle = (e) => {
        e.preventDefault();
        navigate('/dashboard')

    };


    return (
        <div className=' w-full flex justify-center items-center h-screen bg-[#f9fafb]  ' >
            <div>
                <div className='  flex items-center justify-center  ' >
                    <img src={logo} alt="" />
                </div>

                <div className=' bg-white w-122 p-5 mt-4 rounded-lg shadow-2xl ' >
                    <h1 className=' text-2xl font-bold ' >Sign in to your account</h1>

                    <div>
                        <form onClick={formHandle} className=' mt-3' autoComplete="off" >
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' className='w-full mt-1 p-2 border border-[#ccc] rounded text-black bg-[#f9fafb] ' placeholder='Enter Email' />

                            </div>
                            <div className=' mt-4' >
                                <label htmlFor="pass">Password</label>
                                <input type="password" id='pass' className='w-full mt-1 p-2 border border-[#ccc] rounded text-black bg-[#f9fafb] ' placeholder='Enter Password' autoComplete="new-password" />

                            </div>
                            <button className=' bg-[#2563eb] text-white cursor-pointer  mt-4 w-full p-2 rounded-lg hover:opacity-95 ' >Sing Up</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

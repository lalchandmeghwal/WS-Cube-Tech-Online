import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='  px-7   border-y-2 border-[#e5e7eb] py-2  ' >
                <ul className=' flex justify-between  gap-4  ' >
                    <p>© 2026 WsCube Tech™. All Rights Reserved.</p>
                    <li className=' opacity-90 font-medium cursor-pointer hover:underline ' >
                        Design By
                        <span className=' text-[#2998fe] '> WsCube Tech </span> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer

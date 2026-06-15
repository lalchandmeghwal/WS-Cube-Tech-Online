import Link from 'next/link'
import React from 'react'
import FaqItems from './FaqItems'

const page = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto  px-4 py-6">
                <div className="text-center  mb-5">
                    <h1 className="text-4xl font-serif font-bold">
                        Frequently Questions
                    </h1>

                    <p className="text-sm text-gray-500 mt-2">

                        <Link href={'/'}>  Home  </Link> <span className=" ml-3 text-[#bf9477] " > &gt; Frequently Questions</span>
                    </p>
                </div>

                <div className=' my-4 bg-[#ebebeb] h-px w-full '></div>

                <div>
                    <FaqItems />
                </div>
            </div>
        </div>
    )
}

export default page

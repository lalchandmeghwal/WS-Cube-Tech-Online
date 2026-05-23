import React from 'react'

const Booter = () => {
    return (
        <div>
            <footer className=' text-white p-5 rounded-xl m-5 bg-[#101828] ' >
                <div className=' max-w-317 mx-auto   ' >
                    <div className=' flex sm:flex-row flex-col gap-2  sm:items-center justify-between  ' >


                        <div className=' flex items-center   gap-2 ' >

                            <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                            <h1 className=' sm:text-2xl  font-semibold ' >Flowbite</h1>
                        </div>
                        <ul className=' flex  gap-4 '  >
                            <li><a href="#">About</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Licensing</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className=' w-full h-[0.1px] bg-[#364153] my-5  ' > </div>

                    <p className=' text-center ' >© 2023 <span className=' cursor-pointer ' >Flowbite™</span>. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Booter

import React from 'react'

const ChairCollection = () => {
    return (
        <div>


            <div className='  max-w-7xl grid xl:grid-cols-3 md:grid-cols-2 gap-5 sm:p-4 p-4 mx-auto my-10 ' >
              
              
                <div className=' h-75  relative  overflow-hidden group ' >
                    <img className=' w-full  h-full group-hover:scale-110 duration-700 absolute top-0 left-0 z-0 ' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="" />
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    <div className='relative z-10 p-10' >
                        <p>Design Creative</p>
                        <h2 className=" text-4xl font-extralight italic ">Chair Collection</h2>
                    </div>

                </div>


                <div className='  h-75 relative  overflow-hidden group ' >
                    <img className=' w-full  h-full group-hover:scale-110 duration-700 absolute top-0 left-0 z-0 ' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp" alt="" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className='relative z-10 p-10' >
                        <p>Bestselling Products</p>
                        <h2 className=" text-4xl font-extralight italic ">Chair Collection</h2>
                    </div>

                </div>
                <div className=' h-75   relative  overflow-hidden group ' >
                    <img className=' w-full h-full group-hover:scale-110 duration-700 absolute top-0 left-0 z-0 ' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className='relative z-10 p-10' >
                        <p>Onsale Products</p>
                        <h2 className=" text-4xl font-extralight italic ">Chair Collection</h2>
                    </div>

                </div>

               

            </div>

        </div>
    )
}

export default ChairCollection

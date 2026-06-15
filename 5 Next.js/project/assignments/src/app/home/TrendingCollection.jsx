import React from 'react'


const TrendingCollection = () => {
  return (
    <div>
      <div className=' relative h-128 overflow-hidden' >
        <img className=' absolute z-1 top-0 right-0 h-full  ' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg" alt="" />

        <div className='   max-w-6xl hover:scale-110 duration-700 flex gap-5 flex-col justify-center  h-full py-5  mx-auto p-5 relative z-3 ' >
          <h2 className=' text-5xl font-semibold italic text-black/65 ' >New Trending Collection</h2>
          <p className=' text-lg text-black/50 ' >We Believe That Good Design is Always in Season</p>
          <div>

            <button className=' py-3 px-15 border-2 border-[#c09578] rounded text-sm duration-700 cursor-pointer hover:text-white hover:bg-[#c09578] text-[#c09578] uppercase font-semibold ' >shopping Now</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TrendingCollection

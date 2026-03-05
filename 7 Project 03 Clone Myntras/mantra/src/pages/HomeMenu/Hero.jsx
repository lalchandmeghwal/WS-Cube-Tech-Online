import React from 'react'
import liItems from './li.json'
const Hero = () => { 
  
  return (
    <div>

      <div className=' max-[400px]:p-6 p-4 sm:px-15  sm:mt-10'>

        <div className=''>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg" alt="" />

        </div>


        <div className='flex'>
          <div className=' max-w-290' >
            <h2 className='text-3xl my-10 tracking-widest font-semibold text-[#3E4152]  ' >NICE TO SEE YOU, COME ON IN!</h2>

            <div className='  flex gap-x-2 flex-wrap ' >

              <div className=' max-[500px]:w-80  max-[640px]:w-100 max-w-140 overflow-hidden ' >
                <img className=' object-contain transition-all duration-700 hover:scale-105 cursor-pointer  max-w-140 ' src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg" alt="" />
              </div>


              <div className=' max-[500px]:w-80    max-[640px]:w-100 max-w-140 overflow-hidden ' >
                <img className=' transition-all duration-700 hover:scale-105 max-w-140 ' src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg" alt="" />
              </div>

              <div className=' max-[500px]:w-80    max-[640px]:w-100 max-w-140 overflow-hidden ' >
                <img className=' transition-all duration-700 hover:scale-105 max-w-140 ' src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg" alt="" />
              </div>

              <div className=' max-[500px]:w-80    max-[640px]:w-100 max-w-140 overflow-hidden ' >
                <img className=' transition-all duration-700 hover:scale-105 max-w-140 ' src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563866590-lamps.jpg" alt="" />
              </div >

              <div className=' max-[500px]:w-80    max-[640px]:w-100 max-w-140 overflow-hidden ' >
                <img className=' transition-all duration-700 hover:scale-105 max-w-140 ' src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563925069-kitchen.jpg" alt="" />
              </div>

              <div className=' max-[500px]:w-80    max-[640px]:w-100 max-w-140 overflow-hidden ' >
                <img className=' transition-all duration-700 hover:scale-105 max-w-140 ' src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563958962-bath.jpg" alt="" />
              </div>

            </div>

          </div>

          <div>
            <ul className=' max-[750px]:hidden ' >
              {liItems.map(li => {
                return (<li className=' cursor-pointer mt-1 hover:underline opacity-90 ' key={li}>{li}</li>)
              })}


            </ul>
          </div>

        </div>
      </div>

      <div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478281102-Home-page-Desktop_12.jpg" alt="" />
        </div>

        <div className=' flex justify-between flex-wrap p-17 bg-[#EFECF0] ' >

          <div className=' max-w-115  overflow-hidden '>
            <img className=' max-w-full  cursor-pointer transition-all duration-700 hover:scale-110 ' src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517485441956-Wedding-checklist.jpg" alt="" />
          </div>

          <div className=' max-w-115 overflow-hidden '>
            <img className=' max-w-full cursor-pointer transition-all duration-700 hover:scale-110 ' src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592904-Home-page-Desktop_14.jpg" alt="" />
          </div>

          <div className=' max-w-115 overflow-hidden '>
            <img className=' cursor-pointer transition-all duration-700 hover:scale-110 ' src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592892-Home-page-Desktop_15.jpg" alt="" />
          </div>

        </div>

      </div>

      <div className='px-15' >
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478696928-Home-page-Desktop_16.jpg" alt="" />
      
        <div className='flex justify-between flex-wrap ' >
          <div className='max-w-70  overflow-hidden ' ><img className=' transition-all duration-700 hover:scale-105 ' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/13606c4a-14e9-48e4-a56a-a9c3979e7db21650971940091-swayam_logo_new_1980_x_1280.jpg" alt="" /></div>
          <div className='max-w-70  overflow-hidden ' ><img className=' transition-all duration-700 hover:scale-105 ' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/ff6b8a0b-83fa-4f9f-bbb3-0fc51fd9454a1647517771374-updated-logo.jpg" alt="" /></div>
          <div className='max-w-70  overflow-hidden ' ><img className=' transition-all duration-700 hover:scale-105 ' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/9830dff5-9056-402f-9bf0-ba3ead0abcaf1647499996169-SPACES---LOGO-01--BEDBATHRUGS-.jpg" alt="" /></div>
          <div className='max-w-70  overflow-hidden ' ><img className=' transition-all duration-700 hover:scale-105 ' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/06f9e39d-a4d4-4ba4-b4cb-960c87ff5d511647499996189-M-S-Logo.jpg" alt="" /></div>
          <div className='max-w-70  overflow-hidden ' ><img className=' transition-all duration-700 hover:scale-105 ' src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/1/a38e440e-1ff7-4092-acbe-46d74b38384a1551443106457-Home-page-Desktop-Brands_13.jpg" alt="" /></div>

        </div>
      </div>






    </div>
  )
}

export default Hero

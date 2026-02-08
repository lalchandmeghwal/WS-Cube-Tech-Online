import React from 'react'
import AsideBar from './AsideBar';
import banners from './images/banners.png';
import pht from './images/php.png';
import marketing from './images/digi-mkting.png';
import adv from './images/adv-php.png';
import graphic from './images/graphic-design.png';
import python from './images/python.png';
import seo from './images/seo.png';
import abdroid from './images/abdroid.png';
import wordpress from './images/wordpress.png';
import work1 from './images/HOW-WE-WORK1.png'
import Footer from './Footer';



const Home = () => {
  return (
	<div className='bg-[#f1f0ef] pt-2 '>
	<div className='flex items-start bg-white m-4 gap-5'>
		<AsideBar/>
<div >

<img className='w-240 mr-50 h-120 pb-4 bg-[#f1f0ef]  ' src={banners} alt="" />
<h3 className='bg-[#f1f0ef] inline-block p-4 text-[#00a8ec] px-8 text-2xl font-bold '>Courses</h3>
<div className='grid grid-cols-2 mb-8  gap-3 m-4'>

	<Courses color={'#e6611c'} src={pht} title={'PHP (Website Development)'}/>
	<Courses color={'#5e5da4'}  src={ marketing} title={'Digital Marketing'}/>
	<Courses color={'#5e5da4'}  src={adv} title={'Advance PHP'}/>
	<Courses color={'#d60726'}  src={graphic} title={'Graphic Designing'}/>
	<Courses color={'#7bb1e0'} src={python} title={'Python'}/>
	<Courses color={'#308a7c'} src={seo} title={'Search Engine Optimization'}/>
	<Courses color={'#89c222'} src={abdroid} title={'Android App Development'}/>
	<Courses color={'#e6611c'} src={wordpress} title={'Wordpress'}/>

</div>
</div>
	</div>
	
		<h1 className='text-center mb-4 text-3xl font-bold text-[#00a8ec]'>How We Work</h1>
	<div className='flex m-4 gap-5 '>

		<div className='w-full relative flex justify-center items-center flex-col h-60 bg-[#bc486dcc]'>
			<h3 className='text-center content-center z-10 text-white text-3xl font-bold'>We Listen</h3>
			<h3 className='text-center content-center z-10 text-white text-3xl font-bold'>To You</h3>
			<img className='absolute left-[28%] z-0 bottom-0 ' src={work1} alt="" />
		</div>



		
		<div className='w-full relative flex justify-center items-center flex-col h-60 bg-[#F075AE]'>
			<h3 className='text-center content-center z-10 text-white text-3xl font-bold'>We Plan</h3>
			<h3 className='text-center content-center z-10 text-white text-3xl font-bold'>Your Work</h3>
			<img className='absolute left-[28%] z-0 bottom-0 ' src={work1} alt="" />
		</div>
		
		<div className='w-full relative flex justify-center items-center flex-col h-60 bg-[#DE802B]'>
			<h3 className='text-center content-center z-10 text-white text-3xl font-bold'>We Design</h3>
			<h3 className='text-center content-center z-10 text-white text-3xl font-bold'>creativity</h3>
			<img className='absolute left-[28%] z-0 bottom-0 ' src={work1} alt="" />

		</div>

		<div className='w-full relative flex justify-center items-center flex-col h-60 bg-[#FFD41D]'>
			<h3 className='text-center content-center z-10 text-white text-3xl font-bold'>We Execute,</h3>
			<h3 className='text-center content-center z-10 text-white text-3xl font-bold'>Publish &</h3>
			<h3 className='text-center content-center z-10 text-white text-3xl font-bold'>Maintain</h3>
			<img className='absolute left-[28%] z-0 bottom-0 ' src={work1} alt="" />
		</div>


	</div>
	<Footer/>
	</div>
  )
}

export default Home


const Courses =({color, src, title})=>{
	return(<div className='flex  items-center gap-2'>
	<div style={{background:color,}} className='h-9 w-9 p-2 flex justify-center items-center  rounded-full'><img className='w-full' src={src} alt="" /></div>
	<p style={{color:color,}} className='text-[20px]'>{title}</p>
	</div>)
}

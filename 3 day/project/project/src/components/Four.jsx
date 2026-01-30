import React from 'react'
import Navbar from './Navbar'
import AsideBar from './AsideBar'
import Footer from './Footer'

const Four = () => {
  return (
	<div className='m-4 h-158 bg-white '>
		<Navbar/>
		<div className='flex'>
		<AsideBar/>
		<div className='text-black   w-full items-center flex-wrap flex justify-center gap-5  '>
			<img className='w-65 h-50 object-cover'  src="https://www.pngmagic.com/product_images/hd-nature-background-wallpapers_59f.jpeg" alt="" />
			<img className='w-65 h-50 object-cover'  src="https://img.freepik.com/premium-photo/mountain-valley-with-house-top_662214-170565.jpg" alt="" />
			<img className='w-65 h-50 object-cover'  src="https://img.freepik.com/premium-photo/landscape-view-picture_940802-3533.jpg" alt="" />
			<img className='w-65 h-50 object-cover'  src="https://tse3.mm.bing.net/th/id/OIP.tUrLAQE5yAp5yG2yUmzeKAHaFg?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
			<img className='w-65 h-50 object-cover'  src="https://tse4.mm.bing.net/th/id/OIP.sd-_9RB7wKnW7GacuMW3cwHaFj?w=960&h=720&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
			<img className='w-65 h-50 object-cover'  src="https://5.imimg.com/data5/SELLER/Default/2023/5/312045620/YC/SG/WJ/187501798/dubai-tour-package-500x500.jpg" alt="" />
			<img className='w-65 h-50 object-cover'  src="https://static.tekce.com/files/upload/images/TC-most-visited-cities-in-2023-blog-05.jpg" alt="" />
			<img className='w-65 h-50 object-cover'  src="https://tse1.mm.bing.net/th/id/OIP.zaCd1X_6Ht-5j9-ngpHXZAHaER?w=626&h=361&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
		</div>
		</div>
		<Footer/>

	</div>
  )
}

export default Four

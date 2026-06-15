import React from 'react'
import Navbar from './Navbar'
import AsideBar from './AsideBar'
import Footer from './Footer'

const Three = () => {
  return (
	<div className='m-4 h-158 bg-white '>
		<Navbar/>
		<div className='flex'>
		<AsideBar/>
		<div className='text-black   w-full items-center  flex flex-col justify-center gap-5  '>
			<div>
				
			<h1 className='text-3xl my-3 font-bold'>Cours</h1>
			<ol className='list-decimal text-2xl list-inside'>
				<li>Web Development</li>
				<li>App Development</li>
				<li>Python</li>
				<li>SEO</li>
				<li>Ethical Hacking</li>
			</ol>
			</div>
		</div>
		</div>
		<Footer/>

	</div>
  )
}

export default Three

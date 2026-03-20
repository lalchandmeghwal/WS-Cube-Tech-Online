import React from 'react';
import insta from './images/instagram.png';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import linked from './images/linked-in.png';

const Footer = () => {
  return (
	<footer className='w-full text-white   bg-[#343130]'>

<div className=' flex justify-between  p-10'>

	<div>  
	<h2 className='text-3xl font-medium my-2'>Quick Links</h2>
	<nav className='flex flex-col gap-3 text-[20px] '>
		<a href="">Home</a>
		<a href="">About Us</a>
		<a href="">Courses</a>
		<a href="">Gallery</a>
		<a href="">Enquiry</a>
		<a href="">Contact Us</a>
	</nav>
	</div>
	
	<div>  
	<h2 className='text-3xl font-medium my-2'>Training</h2>
	<div className='flex  gap-15'>
	<nav className='flex flex-col gap-3 text-[20px] '>
		<a href="">PHP(Web Development)</a>
		<a href="">Advance PHP</a>
		<a href="">Python</a>
		<a href="">Android APP Development</a>
		<a href="">Digital Marketing</a>
	</nav> 
	<nav className='flex flex-col gap-3 text-[20px] '>
		<a href="">Graphic Design</a>
		<a href="">Search Engine Optimization</a>
		<a href="">Wordpress</a>
		<a href="">Web design</a>
		<a href="">Java</a>
	</nav> 
	</div>

	</div>

	
	<div>  
	<h2 className='text-3xl font-medium my-2'>Contact Info:</h2>
	<p className='text-[20px]'>Call At: 9269698122</p>
	<p className='text-[20px] w-60'>1st floor, Laxmi Tower, Bhaskar Circle, Ratanda, Raj - Jodhpur(342001)</p>
	<div className='flex gap-3 mt-5'>
		<img  src={insta} alt="Instagram" />
		<img src={twitter} alt="Instagram" />
		<img src={facebook} alt="Instagram" />
		<img src={linked} alt="Instagram" />
	</div>
	</div>

</div>

	</footer>
  )
}

export default Footer

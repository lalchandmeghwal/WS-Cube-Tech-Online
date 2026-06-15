import React from 'react'

const Navbar = () => {
  return (
	<div>
		<div>
			<h1 className='text-center bg-white text-black text-3xl uppercase font-medium '>wscubetech</h1>
		</div>
		<nav className='bg-black flex  justify-around list-none text-2xl '>
			
			<Li color={'#6594B1'} title={'Home'}/>
			<Li color={'#5DD3B6'} title={'About'}/>
			<Li color={'#36656B'} title={'Course'}/>
			<Li color={'#F375C2'} title={'Gallery'}/>
			<Li color={'#2D3C59'} title={'Content Us'}/>
			
		
		</nav>
	</div>
  )
}

export default Navbar;

const Li = ({color,title})=>{
	
	return (<li style={{background:color,}} className={` flex justify-center cursor-pointer items-center   w-full p-4`}>{title}</li>)
}

		
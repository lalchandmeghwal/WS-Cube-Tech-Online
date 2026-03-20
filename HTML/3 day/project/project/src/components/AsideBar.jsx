import React from 'react'

const AsideBar = () => {
  return (
	<div>
		
		<nav className='bg-black h-117 flex  flex-col w-90 list-none text-2xl '>
			
			<Li color={'#1A3D64'} title={'Home'}/>
			<Li color={'#26CCC2'} title={'About'}/>
			<Li color={'#2F5755'} title={'Course'}/>
			<Li color={'#005461'} title={'Gallery'}/>
			<Li color={'#018790'} title={'Content Us'}/>
			
		
		</nav>
	  
	</div>
  )
}

export default AsideBar


const Li = ({color,title})=>{
	
	return (<li style={{background:color,}} className={` flex justify-center cursor-pointer items-center   w-full p-4`}>{title}</li>)
}


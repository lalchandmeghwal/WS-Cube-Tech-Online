import React from 'react';
import hot from './gallery/hot.png';
import cold from './gallery/cold.png';
import refreshment from './gallery/Refreshment.png';
import combos from './gallery/Combos.png';
import desser from './gallery/Desser.png';
import burger from './gallery/Burger.png';


const Gallery = () => {

const gallery = [
	{
		title:'Hot Beverages',
		text:'Wide range of Steaming hot coffee to make you fresh and light.',
		img:hot,
	},{
		title:'Cold Beverages',
		text:'Creamy and frothy cold coffee to make you cool.',
		img:cold,
	},{
		title:'Refreshment',
		text:'Fruit and icy referrerpolicy drink to make feel refresh.',
		img:refreshment,
	},{
		title:'Special Combos',
		text:'Your favorite eating and drinking combations.',
		img:combos,
	},{
		title:'Dessert',
		text:'Satiate your palate and take you on a culinary treat.',
		img:desser,
	},{
		title:'Burger & French Fries',
		text:'Quick bites to satisty your small size hunger.',
		img:burger,
	},
]






  return (
	<div className='w-full flex bg-[#252525] justify-center  h-148 mt-3 '>
		<div className='w-325 flex flex-wrap gap-5 justify-between '>
			
			
			{gallery.map((value,i)=>{
				return(<div key={i} className=' text-center flex flex-col justify-center items-center w-80'>
				<img className='h-50' src={value.img} alt="" />
				<h2 className='text-2xl font-medium'>{value.title}</h2>
				<p className='text-lg leading-5'>{value.text}</p>
			</div>)
			})}

		</div>
	  
	  
	  
	</div>
  )
}

export default Gallery



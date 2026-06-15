import React from 'react'
import { IoBagAddOutline } from "react-icons/io5";
import homdeData from '../data/homeData.json'
const Home = () => {
  return (
    <div>

      <h2 className='  text-center text-black sm:text-4xl text-3xl font-bold sm:mt-10  mt-5 ' >Celebration wear for Men </h2>
      <p className=' text-center my-4 ' >Welcome to Bagtesh Fashion Buy Indian Men's Ethnic suits, Tuxedos, Sherwanis, Nehru jacket, Jodhpurs pants, Blazers, Shirts and much more.</p>


      <div className=' mt-20 sm:mt-10  xl:p-0 p-4   max-w-317 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2   gap-10  ' >

        {
          homdeData.filter((item, i) => {
            return (item.category !== 'tops')
          }).map((item, i) => {
            return (<Cart data={item} key={i} />)
          })
        }






      </div>


      <h2 className='  text-center text-black sm:text-4xl text-3xl font-bold sm:mt-20  mt-10 ' >
        Celebration wear for Women
      </h2>
      <p className=' text-center my-4 ' >
        Beautiful collection of Lehenga cholis, Sarees, Salwar suits for engagement, wedding and other ethnic occasions.
      </p>


      <div className=' mt-20 sm:mt-10  xl:p-0 p-4   max-w-317 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2   gap-10  ' >

        {
          homdeData.filter((item, i) => {
            return (item.category === 'tops')
          }).map((item, i) => {
            return (<Cart data={item} key={i} />)
          })
        }






      </div>








    </div>
  )
};

const Cart = ({ data }) => {

  const { img, brand, category, title, price, currentPrice } = data

  return (
    <div className=' group shadow-lg rounded-lg pb-4 hover:scale-105 transition-all duration-700 ' >

      <div> 
        <img src={img} />
      </div>

      <div className=' p-3' >
        <p className=' text-[#99a1af]  text-[17px] ' > Brand :{brand}  Category : {category}</p>
        <h3 className=' text-[20px] font-semibold line-clamp-1 my-2 ' >{title}</h3>

        <div className=' flex  my-2 mt-4 items-center justify-between ' >
          <div className=' flex items-center gap-2 ' >
            <span className=' font-semibold text-lg ' >{price}</span>
            <span className=' line-through ' >{currentPrice}</span>
          </div>
          <IoBagAddOutline className=' text-2xl cursor-pointer font-semibold ' />
        </div>
      </div>
    </div>
  )
}




export default Home

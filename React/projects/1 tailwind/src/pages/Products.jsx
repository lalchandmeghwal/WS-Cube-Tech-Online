import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const Products = () => {

  const [data, setData] = useState([]);
  const [isLoader, setIsLoader] = useState(true)


  const getProductData = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    setData(response.data.products);
    setIsLoader(false)

  };

  useEffect(() => {
    getProductData();
  }, []);




  return (
    <div>

      {isLoader ? 
        <div className=' text-black flex justify-center items-center min-h-80 mt-10  ' >
          <div className=' bg-black w-fit p-10 rounded-lg ' >
             <Loader/>
          </div>
         
        </div>:


        <div className=' grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-5  ' >
          {data.map((item, i) => <Card item={item} key={i} />)}

        </div>
      }
    </div>
  )
}

export default Products



const Card = ({ item }) => {


  const navigate = useNavigate();

  const showProductDetails = (id) => {
    navigate(`/products/${id}`)
  };

  return (
    <div onClick={() => showProductDetails(item.id)} className='group overflow-hidden shadow-lg  transition-all duration-700  hover:bg-[#f3f4f6a3] cursor-pointer  ' key={item.id}>
      <img className='group-hover:scale-110 w-full  transition-all duration-700 ' src={item.thumbnail} alt="" />

      <div className=' px-4   ' >
        <h1 className=' text-xl line-clamp-1   font-semibold ' >{item.title}</h1>
        <p className=' my-3 line-clamp-3 ' >{item.description}</p>
        <div className=' my-3 text-xl   flex gap-4 items-center ' >
          <button className=' bg-[#00a63e] px-2 py-1 rounded text-white ' > ⭐ {item.rating}</button>
          <span >{item.stock}</span>
        </div>
        <div className=' text-center ' >
          <button className=' w-full bg-black text-white py-2 rounded cursor-pointer ' >Add To Card</button>
        </div>

        <h2 className=' my-2 text-xl font-semibold ' >Price:  ${item.price} </h2>

      </div>

    </div>
  )
}

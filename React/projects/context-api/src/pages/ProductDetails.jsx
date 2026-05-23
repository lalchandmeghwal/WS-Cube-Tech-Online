import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';

import Loading from '../components/Loading';
import { ToastContainer, toast } from 'react-toastify'
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {


  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);



  const urlId = useParams().id;


  const getData = async () => {
    const res = await axios.get('https://wscubetech.co/ecommerce-api/products.php', {
      params: {
        page: 167 - urlId,
        limit: 1,
      }
    });
    setData(res.data.data[0]);

    setLoading(false)
  };




  useEffect(() => {
    getData();
  }, [urlId]);




  const {
    name,
    description,
    price,
    discount_percentage,
    rating,
    stock,
    image,
    brand_name,
    category_name,
    multiple_images
  } = data;

  console.log(multiple_images);

  const [showImg, setShowImg] = useState(image);



  return (
    <div className="max-w-300 mx-auto px-4 py-10">

      <div className=" grid grid-cols-2 shadow-lg gap-10 ">

        {/* Left Side Image */}
        <div className="flex gap-5   border rounded-xl p-5 shadow-md">

          <div className=' flex flex-col justify-between ' >
            {multiple_images?.map((src, i) => <img
              src={src || 'https://media.tenor.com/G7LfW0O5qb8AAAAi/loading-gif.gif'  }
              onMouseEnter={() => setShowImg(src  || 'https://media.tenor.com/G7LfW0O5qb8AAAAi/loading-gif.gif' )}
              alt={name}
              className="w-25   cursor-pointer  h-15    object-cover rounded-lg"
            />)}


          </div>



          <div className='  w-full ' >
            <img
              src={showImg || image ||   'https://media.tenor.com/G7LfW0O5qb8AAAAi/loading-gif.gif'}
              alt={name}
              className="w-full   object-cover rounded-lg"
            />
          </div>



        </div>

        {/* Right Side Details */}
        <div className=" w-full  ">

          <h1 className="text-4xl font-bold ">
            {name}
          </h1>

          <p className="text-gray-600 text-lg mb-5">
            {description}
          </p>

          <div className="space-y-3 text-lg">

            <h2>
              <span className="font-semibold">Brand :</span> {brand_name}
            </h2>

            <h2>
              <span className="font-semibold">Category :</span> {category_name}
            </h2>

            <h2>
              <span className="font-semibold">Price :</span> ${price}
            </h2>

            <h2>
              <span className="font-semibold">Discount :</span>{" "}
              {discount_percentage}%
            </h2>

            <h2>
              <span className="font-semibold">Rating :</span> {rating} ⭐
            </h2>

            <h2>
              <span className="font-semibold">Stock :</span> {stock}
            </h2>

          </div>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Add To Cart
          </button>

        </div>
      </div>
    </div>
  );

};





const Product = () => {

  const product = {
    id: "166",
    name: "Pacifica Touring",
    slug: "pacifica-touring",
    description:
      "the pacifica touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.",
    price: "32000",
    discount_percentage: "7",
    rating: "3",
    stock: "22",
    brand_id: "50",
    category_id: "19",
    image:
      "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/thumbnail.png",
    brand_name: "Chrysler",
    category_name: "Vehicle",
    brand_slug: "chrysler",
    category_slug: "vehicle",
  };

  // Object Destructuring
  const {
    name,
    description,
    price,
    discount_percentage,
    rating,
    stock,
    image,
    brand_name,
    category_name,
  } = product;

  return (
    <div className="max-w-300 mx-auto px-4 py-10">

      <div className="flex flex-col lg:flex-row gap-10 items-center">

        {/* Left Side Image */}
        <div className="w-full lg:w-[40%] border rounded-xl p-5 shadow-md">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side Details */}
        <div className="w-full lg:w-[60%]">

          <h1 className="text-4xl font-bold mb-4">
            {name}
          </h1>

          <p className="text-gray-600 text-lg mb-5">
            {description}
          </p>

          <div className="space-y-3 text-lg">

            <h2>
              <span className="font-semibold">Brand :</span> {brand_name}
            </h2>

            <h2>
              <span className="font-semibold">Category :</span> {category_name}
            </h2>

            <h2>
              <span className="font-semibold">Price :</span> ${price}
            </h2>

            <h2>
              <span className="font-semibold">Discount :</span>{" "}
              {discount_percentage}%
            </h2>

            <h2>
              <span className="font-semibold">Rating :</span> {rating} ⭐
            </h2>

            <h2>
              <span className="font-semibold">Stock :</span> {stock}
            </h2>

          </div>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Add To Cart
          </button>

        </div>
      </div>
    </div>
  );
};






export default ProductDetails;






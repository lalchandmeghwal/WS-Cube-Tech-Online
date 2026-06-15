import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';

import Loading from '../components/Loading';
import { ToastContainer, toast } from 'react-toastify'
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useMyAaddToCart } from '../store/AaddToCart';

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
    multiple_images,
    id,
  } = data;

  const obj = { name, description, price, discount_percentage, rating, image, id, qty: 1 }

  const [showImg, setShowImg] = useState(image);

  const { cart, addToCart, removeToCartInItem  } = useMyAaddToCart();

  const checkItemInCart = cart.some(item => item.id === id);

    const removeToCart = () => {
        Swal.fire({
            title: "Are you sure you want to remove this item from the cart?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire("Item removed from cart", "", "success");
                removeToCartInItem(id);
            } else if (result.isDenied) Swal.fire("Item was not removed from the cart", "", "info");
        });

    };


  return (
    <div className="max-w-300 mx-auto px-4 py-10">

      <div className=" grid lg:grid-cols-2  shadow-lg p-2 gap-10 ">

        {/* Left Side Image */}
        <div className="flex lg:flex-row flex-col-reverse gap-5   border rounded-xl p-5 shadow-md">

          <div className=' flex lg:flex-col flex-row  overflow-x-auto   justify-between     carScroll ' >
            {multiple_images?.map((src, i) => <img
              key={i}
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
          <div onClick={(e) => e.stopPropagation()} >

            {checkItemInCart ?
              <button
                onClick={removeToCart}

                type="button"
                className="inline-flex border cursor-pointer text-white bg-[tomato]  border-[#ccc] items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium "
              >
                <svg
                  className="-ms-2 me-2 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Remove
              </button> :
              <button
                onClick={() => addToCart(obj)}
                type="button"
                className="inline-flex border cursor-pointer  border-[#ccc] items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black "
              >
                <svg
                  className="-ms-2 me-2 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Add to cart
              </button>}

          </div>
        </div>
      </div>
    </div>
  );

};








export default ProductDetails;






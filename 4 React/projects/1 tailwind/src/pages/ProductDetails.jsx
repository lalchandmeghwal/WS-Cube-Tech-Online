import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader'
const ProductDetails = () => {





    const [product, setProduct] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    const [showImg, setShowImg] = useState('');

    const id = useParams().id;

    const getProductData = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            setProduct(response.data);
            setIsLoading(false);
        } catch (err) {
            console.log('Net Work Error', err)
        }


    };

    useEffect(() => {
        getProductData();
    }, []);


    console.log(product)









    return (
        <div className='sm:min-h-screen min-h-100  bg-gray-100 flex  justify-center p-5'>

            {
                isLoading ?
                    <div className=' text-black flex justify-center items-center min-h-80 mt-10  ' >
                        <div className=' bg-black w-fit p-10 rounded-lg ' >
                            <Loader />
                        </div>

                    </div> :
                    <div className='max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid '>

                        {/* Image Section */}
                        <div className=' grid justify-center items-center md:grid-cols-2  p-10'>
                            <div>
                                <img
                                    src={showImg ? showImg : product.thumbnail}
                                    alt={product.title}
                                    className='w-80 hover:scale-105 duration-300'
                                />
                                <div className=' flex my-5 flex-wrap gap-2  ' >
                                    {product?.images?.map((img, id) => {
                                        return (
                                            <img onMouseOver={() => setShowImg(img)} className=' cursor-pointer shadow-xl w-20 ' src={img??""} alt="" />

                                        )
                                    })}
                                  
                                </div>
                            </div>


                            <div>

                                <div className='flex items-center justify-between'>
                                    <span className='bg-pink-500 text-white px-4 py-1 rounded-full text-sm capitalize'>
                                        {product.category}
                                    </span>

                                    <span className='text-green-600 font-semibold'>
                                        {product.availabilityStatus}
                                    </span>
                                </div>

                                <h1 className='text-3xl font-bold mt-5'>
                                    {product.title}
                                </h1>

                                <p className='text-gray-600 mt-4 leading-7'>
                                    {product.description}
                                </p>

                                {/* Price */}
                                <div className='mt-6 flex items-center gap-4'>
                                    <h2 className='text-4xl font-bold text-pink-600'>
                                        ${product.price}
                                    </h2>

                                    <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm'>
                                        {product.discountPercentage}% OFF
                                    </span>
                                </div>

                                {/* Details */}
                                <div className='mt-6 space-y-3 text-gray-700'>

                                    <p>
                                        <span className='font-semibold'>Brand:</span> {product.brand}
                                    </p>

                                    <p>
                                        <span className='font-semibold'>Stock:</span> {product.stock}
                                    </p>

                                    <p>
                                        <span className='font-semibold'>SKU:</span> {product.sku}
                                    </p>

                                    <p>
                                        <span className='font-semibold'>Warranty:</span>{" "}
                                        {product.warrantyInformation}
                                    </p>

                                    <p>
                                        <span className='font-semibold'>Shipping:</span>{" "}
                                        {product.shippingInformation}
                                    </p>

                                    <p>
                                        <span className='font-semibold'>Return Policy:</span>{" "}
                                        {product.returnPolicy}
                                    </p>

                                    <p>
                                        <span className='font-semibold'>Minimum Order:</span>{" "}
                                        {product.minimumOrderQuantity}
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className='flex gap-4 mt-8'>
                                    <button className='bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold duration-300'>
                                        Add To Cart
                                    </button>

                                    <button className='border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-xl font-semibold duration-300'>
                                        Buy Now
                                    </button>
                                </div>


                            </div>
                        </div>

                        {/* Content Section */}
                        <div className='p-8'>




                            {/* Reviews */}
                            <div className='mt-10'>
                                <h2 className='text-2xl font-bold mb-5'>
                                    Customer Reviews
                                </h2>

                                <div className='space-y-4'>
                                    {
                                        product.reviews.map((item, index) => (
                                            <div
                                                key={index}
                                                className='border rounded-xl p-4 bg-gray-50'
                                            >
                                                <div className='flex items-center justify-between'>
                                                    <h3 className='font-semibold'>
                                                        {item.reviewerName}
                                                    </h3>

                                                    <span className='text-yellow-500'>
                                                        ⭐ {item.rating}
                                                    </span>
                                                </div>

                                                <p className='text-gray-600 mt-2'>
                                                    {item.comment}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
            }


        </div>
    )
}

export default ProductDetails

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useMyContext } from '../store/MyContext';
import { FaRegHeart, FaStar, FaHeart } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart, likeToCart, ulLikeToCart } from '../redux/features/addToCartSlice';
import { useNavigate } from 'react-router-dom';
// import { FaHeart } from "react-icons/fa6";
import Pagination from './Paginate';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

const Hero = () => {

    const { products, setProducts, select, setSelect, selectBrands, loading, setLoading, page } = useMyContext();
    const [sort, setSort] = useState('');

    const getProducts = async () => {
        const res = await axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: {

                page: page,

                limit: 8,

                sorting: sort,

                price_from: null,

                price_to: null,

                discount_from: null,

                discount_to: null,

                name: null,

                rating: null,

                brands: selectBrands.join(","),

                categories: select

            }
        });

        setProducts(res.data.data);
        setLoading(false)
    };


    useEffect(() => {
        getProducts();
    }, [select, sort, selectBrands, page]);

    return (
        <div>
            <section className=" py-8 antialiased md:py-12">
                <div className="mx-auto max-w-7xl  px-4 2xl:px-0">
                    {/* Heading & Filters */}
                    <div className="mb-0  items-end justify-end space-y-4 sm:flex sm:space-y-0 ">




                        <div className="">

                            <select value={sort} onChange={(e) => setSort(e.target.value)} id="countries" className=" my-2 border border-[#ccc] outline-0  p-2 rounded ">
                                <option value="" >Sort by : Recommended</option>


                                <option value="1">Name : A to Z</option>
                                <option value="2">Name : Z to A</option>
                                <option value="3">Price : Low to High</option>
                                <option value="4">Price : High to Low</option>
                                <option value="5">Discounted Price : Low to High</option>
                                <option value="6"> Discounted Price : High to Low</option>
                                <option value="7">Rating : Low to High</option>
                                <option value="8">Rating : High to Low</option>

                            </select>
                        </div>


                    </div>

                    {loading ? <div className='  flex justify-center  ' >
                        <Loading />
                    </div> :
                        <>

                            <div className="mb-4 mt-0 grid gap-4   sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                                {products.length < 1 ? <RecordFound /> :
                                    products.map((items, i) => (<Cart data={items} key={i} />))
                                }




                            </div>
                            <Pagination />
                        </>
                    }






                </div>


            </section>
            <ToastContainer position='top-center' />

        </div>
    );
};



const Cart = ({ data }) => {

    const { name, description, price, discount_percentage, rating, image, id } = data;

    const cart = useSelector(state => state.addToCart.cart);
    const dispatch = useDispatch();

    const checkItemInCart = cart.some(items => items.id === id);

    const addToCartInItem = () => {
        dispatch(addToCart({ ...data, qty: 1 }));
        toast.success('Add to Cart')
    };
    const removeToCartInItem = () => {
        // dispatch(removeToCart(id))
        Swal.fire({
            title: "Are you sure you want to remove this item from the cart?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire("Item removed from cart", "", "success");
                dispatch(removeToCart(id))
            } else if (result.isDenied) Swal.fire("Item was not removed from the cart", "", "info");
        });
    };

    const like = useSelector(state => state.addToCart.like);
    const checkLike = like.some(item => item.id === id);

    const likeToCartInItem = () => {
        dispatch(likeToCart(data));
    };

    const ulLikeToCartInItem = () => {
        dispatch(ulLikeToCart(id));
    };




    return (
        <div className="rounded-lg relative border text-black border-gray-200 bg-white p-6 shadow-sm  ">

            <div className=' top-3 cursor-pointer  text-2xl right-3 absolute   ' >
                {checkLike ? <FaHeart onClick={ulLikeToCartInItem} className='text-red-500' /> : <FaRegHeart onClick={likeToCartInItem} />}

            </div>

            <div className="h-56 w-full">

                <img
                    className="mx-auto h-full "
                    src={image}
                    alt=""
                />


            </div>
            <div className="pt-6">





                <h2 className=' text-lg font-semibold line-clamp-1 ' >
                    {name}
                </h2>
                <p className=' line-clamp-3 ' >{description}</p>



                <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">



                        {/* <FaRegStar /> */}

                        {
                            Array(5).fill(0).map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={
                                        i < Math.round(rating)
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                    }
                                />
                            ))
                        }




                    </div>
                    <p className="text-sm font-medium  ">
                        {rating}
                    </p>
                    <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {" "}
                        Up to {discount_percentage}% off{" "}
                    </span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-2xl font-extrabold leading-tight ">
                        ${price}
                    </p>
                    {checkItemInCart ?
                        <button
                            onClick={removeToCartInItem}
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
                            onClick={addToCartInItem}
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
    )
}

const RecordFound = () => {
    return (<div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">No Record Found !!</h5>

    </div>);
}


export default Hero

import { useEffect } from "react";
import getProduct from "../store/features/product/productThunk";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaStar, FaPlus, FaMinus, FaRegHeart } from "react-icons/fa";

import { addToCart, changeQty, likeToCart, removeToCart, removeToLike } from "../store/features/cart/cartSlice";
import { useNavigate } from "react-router";
import Loading from '../components/Loading';
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const Home = () => {

    const { product, loading, error } = useSelector(state => state.product);



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct());

    }, []);

    return (
        <div>

            {/* hero section */}
            <section className="bg-white  dark:bg-gray-900">
                <div className="  flex md:flex-row flex-col-reverse    max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16  ">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            Payments tool for software companies
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            From checkout to global sales tax compliance, companies around the world
                            use Flowbite to simplify their payment stack.
                        </p>
                        <button className="inline-flex bg-[#ef4444] items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg
                                className="w-5 h-5 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <button

                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            Speak to Sales
                        </button>
                    </div>

                    <div className=" lg:mt-0 lg:col-span-5 lg:flex">
                        <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                            alt="mockup"
                        />
                    </div>

                </div>
            </section>



            {/* img section */}

            <section className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-10  min-h-screen   max-w-337.5 mx-auto lg:my-30 sm:my-10 my-5 m-5 lg:p-0 p-5  '  >

                <div>
                    <img className=' w-full h-227 object-cover ' src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="" />
                </div>
                <div className=' grid  gap-10  w-full h-227  ' >
                    <img className=' w-full h-full   object-cover ' src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="" />
                    <img className=' w-full h-full  object-cover  ' src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="" />
                </div>
                <div className='  ' >
                    <img className='  w-full lg:h-full    object-cover  ' src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="" />
                </div>

            </section>



            {/* item section */}
            <section className=' max-w-355.5  mx-auto my-5 flex items-center flex-col    ' >

                {loading ? <Loading /> :
                    <div className=' grid gap-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:mx-0 mx-5 ' >


                        {product.map((obj, i) => <ProductCard items={obj} key={i} />)}
                    </div>
                }
            </section>



            <ToastContainer position="top-center" />
        </div>
    );
};

export default Home




const ProductCard = ({ items }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { thumbnail, title, price, brand, rating, id } = items;

    const cart = useSelector(state => state.cart.cart);
    const checkItemInCart = cart.find(items => items.id === id);

    const obj = { thumbnail, title, price, brand, rating, id, qty: 1 }


    const addToCartInCart = () => {
        dispatch(addToCart(obj));
        toast.success('Your Item Seved in Cart !')
    };

    const removeToCartInItem = () => {
        dispatch(removeToCart(id));
    };


    let finalQty = checkItemInCart?.qty || 1;
    const removeQtyItem = (type) => {
        if (type === "+") {
            finalQty += 1;

            // toast.success('Qty Added!');
        } else {
            if (finalQty > 1) {

                finalQty -= 1;
                // toast.success('Qty Remove!');
            } else {
                Swal.fire({
                    title: "Are you sure you want to delete the item?",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Save",
                    denyButtonText: `Don't save`
                }).then((result) => {

                    if (result.isConfirmed) {
                        Swal.fire("Item Delete Successfully", "", "success");
                        dispatch(removeToCart(id));
                    }
                    else if (result.isDenied) Swal.fire("Delete Cancelled", "", "info");
                });
            };

        };


        dispatch(changeQty({ id, finalQty }));
    };


    const like = useSelector(state => state.cart.like)

    const checkItemIniLke = like.find(items => items.id === id);

    const likeToCartInItem = () => {
        dispatch(likeToCart(items));
    };

    const likeToCartInRemove = () => {
        dispatch(removeToLike(id))
    };




    return (
        <div onClick={() => navigate(`/cart/${id}`)} className="w-w-85 cursor-pointer bg-white shadow-md rounded-lg p-4 relative">

            {/* Heart Icon */}
            <div onClick={e => e.stopPropagation()} >
                {checkItemIniLke ? <FaHeart onClick={likeToCartInRemove} className="absolute top-4 right-4 text-red-500 text-2xl cursor-pointer" /> :
                    <FaRegHeart onClick={likeToCartInItem} className="absolute top-4 right-4  text-2xl cursor-pointer" />}

            </div>


            {/* Product Image */}
            <img
                src={thumbnail}
                alt={title}
                className="w-full h-62.5 object-contain"
            />

            {/* Product Details */}
            <h2 className="text-lg line-clamp-1  mt-4">
                {title}
            </h2>

            <h3 className="text-orange-700 font-semibold text-xl mt-2">
                Rs {price}
            </h3>

            <p className="text-gray-600 text-sm mt-2">
                {brand}
            </p>

            {/* Rating + Button */}
            <div className="flex items-center justify-between mt-4">

                <div className="flex items-center text-sm gap-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <span className="text-gray-700 ml-1">
                        ({rating})
                    </span>
                </div>

                <div onClick={(e) => e.stopPropagation()} >

                    {/* <button onClick={removeToCartInItem} className="bg-[tomato] text-white px-3 py-1 cursor-pointer rounded">
                        Remove
                    </button>  */}


                    {checkItemInCart ?
                        <div className=" flex items-center  gap-2 " >

                            <FaMinus onClick={() => removeQtyItem("-")} />
                            <button className="bg-blue-600 text-white px-3 py-1 cursor-pointer rounded">
                                {finalQty}
                            </button>
                            <FaPlus onClick={() => removeQtyItem("+")} />


                        </div> :

                        <button onClick={addToCartInCart} className="bg-blue-600 text-white px-3 py-1 cursor-pointer rounded">
                            ADD
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};


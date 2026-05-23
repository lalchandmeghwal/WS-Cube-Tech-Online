import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { removeToCart, changeQty } from '../redux/features/cart/cartSlice';


const Cart = () => {


  const cart = useSelector(state => state.cart.cart);



  return (
    <div>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-7xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cart.map((item, i) => <CartList data={item} key={i} />)}




              </div>

              <div className="hidden xl:mt-8 xl:block">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Continue Shopping
                </h3>

              </div>

            </div>

            <OrderSummary />

          </div>
        </div>
      </section>

    </div>
  )
}



const CartList = ({ data }) => {

  const { thumbnail, title, price, brand, rating, id, qty } = data;


  const dispatch = useDispatch();


  const removeToCartInItem = () => {
    dispatch(removeToCart(id));
  };




  let finalQty = qty;
  const removeQtyItem = (type) => {
    if (type === "+") {
      finalQty += 1;
    } else {
      if (finalQty > 1) {

        finalQty -= 1;
      };


    };

    dispatch(changeQty({ id, finalQty }))
  };




  return (<div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">

      <div className="shrink-0 md:order-1">
        <img
          className="h-20 w-20 "
          src={thumbnail}
          alt="imac image"
        />

      </div>

      <p className="sr-only">
        Choose quantity:
      </p>

      <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="flex items-center">
          <button
            onClick={() => removeQtyItem("-")}
            type="button"

            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h16"
              />
            </svg>
          </button>


          <p className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">
            {finalQty}
          </p>

          <button
            type="button"
            onClick={() => removeQtyItem("+")}

            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>

        </div>
        <div className="text-end md:order-4 md:w-32">
          <p className="text-base font-bold text-gray-900 dark:text-white">
            ${(qty * price).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <h2

          className="text-base font-medium text-gray-900 hover:underline dark:text-white"
        >
          {title} ${price}
        </h2>

        <div className="flex items-center gap-4">

          <button
            type="button"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="me-1.5 h-5 w-5"
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
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            Add to Favorites
          </button>

          <button
            onClick={removeToCartInItem}
            type="button"
            className="inline-flex cursor-pointer items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
          >
            <svg
              className="me-1.5 h-5 w-5"
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
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>);
}




const OrderSummary = () => {


  const cart = useSelector(state => state.cart.cart);

  const totalPrice = cart.reduce((tot, obj) => tot + obj.price * obj.qty, 0);
  





  return (<div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <p className="text-xl font-semibold text-gray-900 dark:text-white">
        Order summary
      </p>
      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Original price
            </dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              ${totalPrice.toFixed(2)}
            </dd>
          </dl>



          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Tax
            </dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              $23.23
            </dd>
          </dl>
        </div>


        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
          <dt className="text-base font-bold text-gray-900 dark:text-white">
            Total
          </dt>
          <dd className="text-base font-bold text-gray-900 dark:text-white">
            ${(totalPrice + 23.23).toFixed(2)}
          </dd>
        </dl>
      </div>



      <p className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Proceed to Checkout
      </p>

      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {" "}
          or {" "}
        </span>
        <p

          className=" flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
        >
          Continue Shopping

          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>


        </p>
      </div>
    </div>





  </div>)
}

export default Cart;
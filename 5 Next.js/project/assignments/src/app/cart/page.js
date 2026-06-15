import Link from 'next/link'
import React from 'react'

const cart = () => {
  return (
      <div className="max-w-7xl mx-auto  px-4 py-6">
          <div className="text-center  mb-5">
              <h1 className="text-4xl font-serif font-bold">
                  Shopping Cart
              </h1>

              <p className="text-sm text-gray-500 mt-2">

                  <Link href={'/'}>  Home  </Link> <span className=" ml-3 text-[#bf9477] " > &gt; Shopping Cart</span>
              </p>
          </div>

          <div>
              <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg" alt="" />
              <p className=' text-center text-[#5a5a5a] text-sm   ' >Your shopping cart is empty!</p>
        </div>
    </div>
  )
}

export default cart

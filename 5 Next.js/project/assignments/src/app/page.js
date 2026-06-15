import React from 'react'
import HeroSection from './home/HeroSection'
import ChairCollection from './home/ChairCollection'
import CartTab from './home/CartTab'
import TrendingCollection from './home/TrendingCollection'
import BestsellingProducts from './home/BestsellingProducts'
import CustomerSection from './home/CustomerSection'

const page = () => {
  return (
    <div>
      <HeroSection />
      <ChairCollection />
      <CartTab />
      <TrendingCollection />
      <BestsellingProducts />
      <CustomerSection/>
    </div>
  )
}

export default page

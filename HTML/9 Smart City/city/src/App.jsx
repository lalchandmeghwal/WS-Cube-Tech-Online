import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Overview from './components/Overview'
import Projects from './components/Projects'
import SitePlan from './components/SitePlan'
import Map from './components/Map';
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Overview />
      <Projects />
      <SitePlan />
      <Map />
      <Gallery />
      <Footer/>
     
      
    </div>
  )
}

export default App

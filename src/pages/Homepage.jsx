import React from 'react'
import Fixture from '../components/fixture/Fixture'
import Footer from '../components/footer/Footer'
import Highlights from '../components/highlights/Highlights'
import Home from '../components/home/Home'
import Navbar from '../components/navbar/Navbar'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Fixture/>
        <Highlights/>
        <Footer/>
    </div>
  )
}

export default Homepage
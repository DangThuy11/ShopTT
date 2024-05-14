import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Categories from '../Components/Categories/Categories'
import Products from '../Components/Products/Products'
import Offers from '../Components/Offers/Offers'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'
import Popular from '../Components/Popular/Popular'

const Home = () => {
  return (
    <div className='container'>
        <Hero />
        <Categories />
        <Products />
        <Offers />
        <Popular />
    </div>
  )
}

export default Home
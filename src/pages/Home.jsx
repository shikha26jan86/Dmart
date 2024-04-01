import React from 'react'
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import PopularCategory from '../components/PopularCategory';
import Card from '../components/Card';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
        <Header/>
        <Carousel/>
        <PopularCategory/>
        <Card/>
        <Footer/>
    </>
  )
}

export default Home




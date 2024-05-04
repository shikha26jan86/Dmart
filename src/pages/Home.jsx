import React from 'react'
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import PopularCategory from '../components/PopularCategory';
import Card from '../components/Cards';
import Footer from '../components/Footer';
import SecondCarousel from '../components/SecondCarousel';
import FruitsAndVegetable from '../components/FruitsAndVegetable';
import FooterCarousol from '../components/FooterCarousol';



const Home = () => {
  return (
    <>
      <Header/>
        <Carousel/>
        <PopularCategory/>
        <SecondCarousel/>
        <FruitsAndVegetable/>
        <FooterCarousol/>
      <Footer/>
    </>
  )
}

export default Home




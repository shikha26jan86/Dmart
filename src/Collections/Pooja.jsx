import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

const Pooja = () => {
  const backendData = [
    {
      title: "Pears Pure & Gentle Bathing Bar",
      desc: "This Pears Pure & Gentle Bathing Bar.",
      price: 20,off :"10%",
      src:"https://ik.imagekit.io/wlfr/wellness/images/products/230590-4.jpg/tr:w-3840,dpr-1,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-webp,q-80,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end"
    },
    {
      title: "Dove Cream Beauty Bathing Bar ",
      desc: "Nescafé Classic CoffeeDove Cream Beauty Bathing Bar ",off :"20%",
      price: 30,
      src:"https://m.media-amazon.com/images/I/51nf-MK31vL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "Medimix Ayurvedic Classic  ",
      desc: "Medimix Ayurvedic Classic ",off :"30%",
      price: 40,
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lF9d4J9adgSKTrbcywslykvuaYQdic-DfCzVGaw8zQ&s"
    },
    {
      title: "Lux Flaw-Less Glow Jasmine & Vitamin C+E Beauty Soap",
      desc: "Lux Flaw-Less Glow Jasmine & Vitamin C+E Beauty Soap   ",off :"30%",
      price: 500,
      src:"https://m.media-amazon.com/images/I/51ua60lj05L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Medimix Ayurvedic Classic  ",
        desc: "Medimix Ayurvedic Classic ",off :"30%",
        price: 40,
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lF9d4J9adgSKTrbcywslykvuaYQdic-DfCzVGaw8zQ&s"
      },
      {
        title: "Lux Flaw-Less Glow Jasmine & Vitamin C+E Beauty Soap",
        desc: "Lux Flaw-Less Glow Jasmine & Vitamin C+E Beauty Soap   ",off :"30%",
        price: 500,
        src:"https://m.media-amazon.com/images/I/51ua60lj05L._AC_UF1000,1000_QL80_.jpg"
      },
      {
        title: "Dove Cream Beauty Bathing Bar ",
        desc: "Nescafé Classic CoffeeDove Cream Beauty Bathing Bar ",off :"20%",
        price: 30,
        src:"https://m.media-amazon.com/images/I/51nf-MK31vL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        title: "Lux Flaw-Less Glow Jasmine & Vitamin C+E Beauty Soap",
        desc: "Lux Flaw-Less Glow Jasmine & Vitamin C+E Beauty Soap   ",off :"30%",
        price: 500,
        src:"https://m.media-amazon.com/images/I/51ua60lj05L._AC_UF1000,1000_QL80_.jpg"
      },
      {
        title: "Pears Pure & Gentle Bathing Bar",
        desc: "This Pears Pure & Gentle Bathing Bar.",
        price: 20,off :"10%",
        src:"https://ik.imagekit.io/wlfr/wellness/images/products/230590-4.jpg/tr:w-3840,dpr-1,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-webp,q-80,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end"
      },
      {
        title: "Dove Cream Beauty Bathing Bar ",
        desc: "Nescafé Classic CoffeeDove Cream Beauty Bathing Bar ",off :"20%",
        price: 30,
        src:"https://m.media-amazon.com/images/I/51nf-MK31vL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        title: "Medimix Ayurvedic Classic  ",
        desc: "Medimix Ayurvedic Classic ",off :"30%",
        price: 40,
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lF9d4J9adgSKTrbcywslykvuaYQdic-DfCzVGaw8zQ&s"
      },
{
title: "Pears Pure & Gentle Bathing Bar",
desc: "This Pears Pure & Gentle Bathing Bar.",
price: 20,off :"10%",
src:"https://ik.imagekit.io/wlfr/wellness/images/products/230590-4.jpg/tr:w-3840,dpr-1,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-webp,q-80,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end"
},
];
  return (
    <div>
      <Header/>
      <Carousel/>
      <Footer/>

    </div>
  )
}

export default Pooja
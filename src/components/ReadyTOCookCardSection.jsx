import React from 'react'
import Cards from './Cards';
import Header from './Header';
import Footer from './Footer';

const ReadyTOCookCardSection = () => {
    const backendData = [
        {
          title: "Gits Gulab Jamun",
          desc: "Gits Gulab Jamun.",
          price: 20,off :"10%",
          src:"https://www.justgotochef.com/img/1540616362-Gits-Gulab%20Jamun%20Mix-Front.jpg"
        },
        {
          title: "MTR Rava Idli Mix ",
          desc: "This MTR Rava Idli Mix ",off :"20%",
          price: 30,
          src:"https://i5.walmartimages.com/asr/9ad351f1-0b32-486d-96e6-cc4e10788537.a1e70d42f19fbaf91af343d0d53c6721.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
        },
        {
          title: "ID Idly & Dosa Batter Mix",
          desc: "ThisID Idly & Dosa Batter Mix.",off :"30%",
          price: 40,
          src:"https://www.desiclik.com/images/P/34f18cd3fed3a4a5076f74a842b1962157d4ae95e11f37b6460ec83d0b867714-01.jpg"
        },
        {
          title: "ID Idly & Dosa Batter Mix",
          desc: "This ID Idly & Dosa Batter Mix.",off :"30%",
          price: 500,
          src:"https://www.mishry.com/wp-content/uploads/2022/03/id-fresho-idly-dosa-batter-review.png"
        },
        {
          title: "Slurrp Farm Chocolate Millet",
          desc: "ThisSlurrp Farm Chocolate Millet.",off :"10%",
          price: 60,
          src:"https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/90072688_XL1_20210425.jpg"
        },
        {
          title: "Gits Basundi Mix",
          desc: "This Gits Basundi Mix.",off :"30%",
          price: 700,
          src:"https://m.media-amazon.com/images/I/81IxtI4qwEL._SL1500_.jpg"
  },
  {
    title: "cocolate ",
    desc: "cocolate .",
    price: 700,off :"30%",
    src:"https://d.newsweek.com/en/full/235643/mccardle-nm0122-chocolate-tease.jpg"
},
{
    title: "Haldiram namkeen",
    desc: "This Haldiram namkeen.",
    price: 700,off :"10%",
    src:"https://www.desiclik.com/images/P/34f18cd3fed3a4a5076f74a842b1962157d4ae95e11f37b6460ec83d0b867714-01.jpg"
},
{
    title: "Slurrp Farm Chocolate Millet Pancake Mix",
    desc: "This Slurrp Farm Chocolate Millet Pancake Mix",
    price: 700,off :"10%",
    src:"https://cdnprod.mafretailproxy.com/sys-master-root/hcf/h55/29594356776990/1881368_main.jpg_480Wx480H"
},
{
    title: "Gits Basundi Mix",
    desc: "Pears soapGits Basundi Mix.",
    price: 70,off :"30%",
    src:"https://m.media-amazon.com/images/I/81IxtI4qwEL._SL1500_.jpg"
},
{
    title: "MTR 3 Minute Breakfast Vegetable Upma",
    desc: "MTR 3 Minute Breakfast Vegetable Upma.",
    price: 100,off :"40%",
    src:"https://www.justgotochef.com/uploads/1521699892-MTR-Vegetable%20Upma-Front.jpg"
},
{
    title: "Slurrp Farm Chocolate Millet Pancake Mix",
    desc: "This Slurrp Farm Chocolate Millet Pancake Mix",
    price: 700,off :"10%",
    src:"https://cdnprod.mafretailproxy.com/sys-master-root/hcf/h55/29594356776990/1881368_main.jpg_480Wx480H"
}
    ];
  return (
<>
<Header/>
<div className="container">
       <div className='row mt-5'>
        {backendData.map((product, i)=>{
          return(
            <div key={i} className ="col-lg-3 mt-3">
          
                <Cards src={product.src} title={product.title} desc={product.desc} price={product.price} off={product.off}/>

               </div>
         );
      })}
     </div>
   </div>
   <Footer/>
</>
         
 
  )
}

export default ReadyTOCookCardSection
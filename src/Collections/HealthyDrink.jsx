import React from 'react'
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const HealthyDrink = () => {
    const backendData = [
        {
          title: "Cadbury Bournvita Chocolate Drink",
          desc: "Cadbury Bournvita Chocolate Drink  .",
          price: 20,off :"10%",
          src:"https://tse4.mm.bing.net/th?id=OIP.7Kqf_JRjSy-n-yv0knkX-gHaHa&pid=Api&P=0&h=180"
        },
        {
          title: "Pediasure Nutritional Powder ",
          desc: "Pediasure Nutritional Powder ",off :"20%",
          price: 30,
          src:"https://cdn01.pharmeasy.in/dam/products_otc/L63283/pediasure-complete-balanced-nutrition-to-help-kids-grow-400-gm-chocolate-jar-2-1629369362.jpg"
        },
        {
          title: "Horlicks Health & Nutrition Drink ",
          desc: "Horlicks Health & Nutrition Drink.",off :"30%",
          price: 40,
          src:"https://cdn01.pharmeasy.in/dam/products_otc/I04914/horlicks-health-nutrition-drink-classic-malt-1kg-pet-jar-1.jpg?dim=900x0&f=jpg&dpr=1&q=60"
        },
        {
          title: "Protinex Chocolate Flavour Health",
          desc: "Protinex Chocolate Flavour Health.",off :"30%",
          price: 500,
          src:"https://m.media-amazon.com/images/I/81RRScmZfzL._SL1500_.jpg"
        },
        {
            title: "Women's Horlicks ",
            desc: "Women's Horlicks .",off :"30%",
            price: 40,
            src:"https://tse4.mm.bing.net/th?id=OIP.rhhtWWiPrt07jwIqxHIHfAHaHa&pid=Api&P=0&h=180"
          },
          {
            title: "Cadbury Bournvita Chocolate Drink",
            desc: "Cadbury Bournvita Chocolate Drink  .",
            price: 20,off :"10%",
            src:"https://tse4.mm.bing.net/th?id=OIP.7Kqf_JRjSy-n-yv0knkX-gHaHa&pid=Api&P=0&h=180"
          },
          {
            title: "Pediasure Nutritional Powder ",
            desc: "Pediasure Nutritional Powder ",off :"20%",
            price: 30,
            src:"https://cdn01.pharmeasy.in/dam/products_otc/L63283/pediasure-complete-balanced-nutrition-to-help-kids-grow-400-gm-chocolate-jar-2-1629369362.jpg"
          },
          {
            title: "House Instant Coffee ",
            desc: "House Instant Coffee .",off :"30%",
            price: 40,
            src:"https://tse4.mm.bing.net/th?id=OIP.Rkt1UyRDtf-m6ec-2wmJqQHaHa&pid=Api&P=0&h=180"
          },
          {
            title: "Cadbury Bournvita Chocolate Drink",
            desc: "Cadbury Bournvita Chocolate Drink  .",
            price: 20,off :"10%",
            src:"https://tse4.mm.bing.net/th?id=OIP.7Kqf_JRjSy-n-yv0knkX-gHaHa&pid=Api&P=0&h=180"
          },
{
    title: "House Instant Coffee ",
    desc: "House Instant Coffee .",off :"30%",
    price: 40,
    src:"https://tse4.mm.bing.net/th?id=OIP.Rkt1UyRDtf-m6ec-2wmJqQHaHa&pid=Api&P=0&h=180"
  },
  {
    title: "Pediasure Nutritional Powder ",
    desc: "Pediasure Nutritional Powder ",off :"20%",
    price: 30,
    src:"https://cdn01.pharmeasy.in/dam/products_otc/L63283/pediasure-complete-balanced-nutrition-to-help-kids-grow-400-gm-chocolate-jar-2-1629369362.jpg"
  },
  {
    title: "House Instant Coffee ",
    desc: "House Instant Coffee .",off :"30%",
    price: 40,
    src:"https://tse4.mm.bing.net/th?id=OIP.Rkt1UyRDtf-m6ec-2wmJqQHaHa&pid=Api&P=0&h=180"
  },
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
      
  );
};
export default HealthyDrink
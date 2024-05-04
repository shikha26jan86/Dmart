import React from 'react'
import Cards from './Cards';
import Header from './Header';
import Footer from './Footer';

const CookwareSection = () => {
    const backendData = [
        {
          title: "Butterfly Stainless Steel Cooker",
          desc: "This Butterfly Stainless Steel Cooker.",
          price: 20,off :"10%",
          src:"https://images-na.ssl-images-amazon.com/images/I/61XomPR4O7L._SL1500_.jpg"
        },
        {
          title: "Prestige Deluxe Alpha Svachh Stainless Steel Pressure Cooker",
          desc: "This a Prestige Deluxe Alpha Svachh Stainless Steel Pressure Cooker.",off :"20%",
          price: 30,
          src:"https://mrcookware.in/wp-content/uploads/2022/03/Prestige-Deluxe-Alpha-Svachh-Stainless-Steel-Pressure-Cooker-1.jpg  "
        },
        {
          title: "Hawkins Contura Black Hard Anodised Cooker CB30",
          desc: "This Hawkins Contura Black Hard Anodised Cooker CB30.",off :"30%",
          price: 40,
          src:"https://tse4.mm.bing.net/th?id=OIP.1ar1BtihF_ACz54pjCXZ-gHaHa&pid=Api&P=0&h=180"
        },
         {
            title: "Butterfly Stainless Steel Cooker",
            desc: "This Butterfly Stainless Steel Cooker.",
            price: 20,off :"10%",
            src:"https://images-na.ssl-images-amazon.com/images/I/61XomPR4O7L._SL1500_.jpg"
          },
          {
            title: "Prestige Deluxe Alpha Svachh Stainless Steel Pressure Cooker",
            desc: "This a Prestige Deluxe Alpha Svachh Stainless Steel Pressure Cooker.",off :"20%",
            price: 30,
            src:"https://mrcookware.in/wp-content/uploads/2022/03/Prestige-Deluxe-Alpha-Svachh-Stainless-Steel-Pressure-Cooker-1.jpg  "
          },
          {
            title: "Butterfly Stainless Steel Cooker",
            desc: "This Butterfly Stainless Steel Cooker.",
            price: 20,off :"10%",
            src:"https://images-na.ssl-images-amazon.com/images/I/61XomPR4O7L._SL1500_.jpg"
          },
          {
            title: "Prestige Deluxe Alpha Svachh Stainless Steel Pressure Cooker",
            desc: "This a Prestige Deluxe Alpha Svachh Stainless Steel Pressure Cooker.",off :"20%",
            price: 30,
            src:"https://mrcookware.in/wp-content/uploads/2022/03/Prestige-Deluxe-Alpha-Svachh-Stainless-Steel-Pressure-Cooker-1.jpg  "
          },
          {
            title: "Hawkins Contura Black Hard Anodised Cooker CB30",
            desc: "This Hawkins Contura Black Hard Anodised Cooker CB30.",off :"30%",
            price: 40,
            src:"https://tse4.mm.bing.net/th?id=OIP.1ar1BtihF_ACz54pjCXZ-gHaHa&pid=Api&P=0&h=180"
          },
           {
              title: "Butterfly Stainless Steel Cooker",
              desc: "This Butterfly Stainless Steel Cooker.",
              price: 20,off :"10%",
              src:"https://images-na.ssl-images-amazon.com/images/I/61XomPR4O7L._SL1500_.jpg"
            },
            {
                title: "Butterfly Stainless Steel Cooker",
                desc: "This Butterfly Stainless Steel Cooker.",
                price: 20,off :"10%",
                src:"https://images-na.ssl-images-amazon.com/images/I/61XomPR4O7L._SL1500_.jpg"
              },
              {
                title: "Butterfly Stainless Steel Cooker",
                desc: "This Butterfly Stainless Steel Cooker.",
                price: 20,off :"10%",
                src:"https://images-na.ssl-images-amazon.com/images/I/61XomPR4O7L._SL1500_.jpg"
              },
              {
                title: "Butterfly Stainless Steel Cooker",
                desc: "This Butterfly Stainless Steel Cooker.",
                price: 20,off :"10%",
                src:"https://images-na.ssl-images-amazon.com/images/I/61XomPR4O7L._SL1500_.jpg"
              },
{
    title: "Butterfly Stainless Steel Cooker",
    desc: "This Butterfly Stainless Steel Cooker.",
    price: 20,off :"10%",
    src:"https://images-na.ssl-images-amazon.com/images/I/61XomPR4O7L._SL1500_.jpg"
  },

{
    title: "Butterfly Stainless Steel Cooker",
    desc: "This Butterfly Stainless Steel Cooker.",
    price: 20,off :"10%",
    src:"https://images-na.ssl-images-amazon.com/images/I/61XomPR4O7L._SL1500_.jpg"
  },
  {
    title: "Prestige Deluxe Alpha Svachh Stainless Steel Pressure Cooker",
    desc: "This a Prestige Deluxe Alpha Svachh Stainless Steel Pressure Cooker.",off :"20%",
    price: 30,
    src:"https://mrcookware.in/wp-content/uploads/2022/03/Prestige-Deluxe-Alpha-Svachh-Stainless-Steel-Pressure-Cooker-1.jpg  "
  },
  {
    title: "Butterfly Stainless Steel Cooker",
    desc: "This Butterfly Stainless Steel Cooker.",
    price: 20,off :"10%",
    src:"https://images-na.ssl-images-amazon.com/images/I/61XomPR4O7L._SL1500_.jpg"
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

export default CookwareSection
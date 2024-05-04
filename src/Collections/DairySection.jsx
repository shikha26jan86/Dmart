import React from 'react'
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const DairySection = () => {
    const backendData = [
        {
          title: "Amul Butter",
          desc: "Amul Butter.",
          price: 20,off :"10%",
          src:"https://tse3.mm.bing.net/th?id=OIP.MbfOEEvusA1t7qnTRmdILQHaE_&pid=Api&P=0&h=180"
        },
        {
          title: "Nutralite Fat Spread Tub",
          desc: "Nutralite Fat Spread Tub",off :"20%",
          price: 30,
          src:"https://m.media-amazon.com/images/I/71K1mv9SigL._SL1500_.jpg"
        },
        {
          title: "Delicious Fat Spread ",
          desc: "Delicious Fat Spread    .",off :"30%",
          price: 40,
          src:"https://www.jiomart.com/images/product/600x600/490010287/delicious-fat-spread-500-g-carton-product-images-o490010287-p490010287-4-202203150530.jpg"
        },
        {
          title: "Amul Taaza Toned Milk",
          desc: "Amul Taaza Toned Milk.",off :"30%",
          price: 500,
          src:"https://tse2.mm.bing.net/th?id=OIP.yj8n0fJBEJMRiXzsqHdKAQHaIF&pid=Api&P=0&h=180"
        },
        {
            title: "Amul Kool Kesar Milk  ",
            desc: "Amul Kool Kesar Milk .",off :"30%",
            price: 40,
            src:"https://tse1.mm.bing.net/th?id=OIP.fsoDATEzk-AQ4I62b8HtXwHaHa&pid=Api&P=0&h=180"
          },
          {
            title: "Nutralite Fat Spread Tub",
            desc: "Nutralite Fat Spread Tub",off :"20%",
            price: 30,
            src:"https://m.media-amazon.com/images/I/71K1mv9SigL._SL1500_.jpg"
          },
          {
            title: "Nescafé Classic Coffee",
            desc: "Nescafé Classic Coffee",off :"20%",
            price: 30,
            src:"https://tse4.mm.bing.net/th?id=OIP.I9VsCpt9E83-xkr_U3d3mQHaHa&pid=Api&P=0&h=180"
          },
          {
            title: "House Instant Coffee ",
            desc: "House Instant Coffee .",off :"30%",
            price: 40,
            src:"https://tse4.mm.bing.net/th?id=OIP.Rkt1UyRDtf-m6ec-2wmJqQHaHa&pid=Api&P=0&h=180"
          },
          {
            title: "Nutralite Fat Spread Tub",
            desc: "Nutralite Fat Spread Tub",off :"20%",
            price: 30,
            src:"https://m.media-amazon.com/images/I/71K1mv9SigL._SL1500_.jpg"
          },

          {
            title: "Amul Butter",
            desc: "Amul Butter.",
            price: 20,off :"10%",
            src:"https://tse3.mm.bing.net/th?id=OIP.MbfOEEvusA1t7qnTRmdILQHaE_&pid=Api&P=0&h=180"
          },
  {
    title: "Nutralite Fat Spread Tub",
    desc: "Nutralite Fat Spread Tub",off :"20%",
    price: 30,
    src:"https://m.media-amazon.com/images/I/71K1mv9SigL._SL1500_.jpg"
  },
  {
    title: "Amul Butter",
    desc: "Amul Butter.",
    price: 20,off :"10%",
    src:"https://tse3.mm.bing.net/th?id=OIP.MbfOEEvusA1t7qnTRmdILQHaE_&pid=Api&P=0&h=180"
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

export default DairySection
import React from 'react'
import Cards from './Cards';
import Header from './Header';
import Footer from './Footer';

const DetergentAndFabricSection = () => {
    const backendData = [
        {
          title: "Surf Excel Matic Liquid Detergent Top Load Pouch",
          desc: "ThisSurf Excel Matic Liquid Detergen Top Load Pouchr.",
          price: 20,off :"10%",
          src:"https://medanand.com/wp-content/uploads/2022/01/surf-excel-matic-liquid-detergent-top-load-500ml-2-1635176252.jpg"
        },
        {
          title: "Ariel Matic Top Load Liquid Detergent Refill",
          desc: "ThisAriel Matic Top Load Liquid Detergent Refill.",off :"20%",
          price: 30,
          src:"https://m.media-amazon.com/images/I/71kvYW2XdML._SL1500_.jpg  "
        },
        {
          title: "Rin Ala Fabric Whitener",
          desc: "This Rin Ala Fabric Whitener.",off :"30%",
          price: 40,
          src:"https://tse3.mm.bing.net/th?id=OIP.an14gOtmecQVbmHu4sekjAHaFs&pid=Api&P=0&h=180"
        },
         {
            title: "Genteel Liquid Detergent ",
            desc: "This Genteel Liquid Detergent .",
            price: 20,off :"10%",
            src:"https://tse2.mm.bing.net/th?id=OIP.C99OGuIL-Du8HyT5QFWJ_AHaHa&pid=Api&P=0&h=180"
          },
          {
            title: "Surf Excel Matic Liquid Detergent Top Load Pouch",
            desc: "ThisSurf Excel Matic Liquid Detergen Top Load Pouchr.",
            price: 20,off :"10%",
            src:"https://medanand.com/wp-content/uploads/2022/01/surf-excel-matic-liquid-detergent-top-load-500ml-2-1635176252.jpg"
          },
          {
            title: "Ariel Matic Top Load Liquid Detergent Refill",
            desc: "ThisAriel Matic Top Load Liquid Detergent Refill.",off :"20%",
            price: 30,
            src:"https://m.media-amazon.com/images/I/71kvYW2XdML._SL1500_.jpg  "
          },
          {
            title: "Rin Ala Fabric Whitener",
            desc: "This Rin Ala Fabric Whitener.",off :"30%",
            price: 40,
            src:"https://tse3.mm.bing.net/th?id=OIP.an14gOtmecQVbmHu4sekjAHaFs&pid=Api&P=0&h=180"
          },
           {
              title: "Genteel Liquid Detergent ",
              desc: "This Genteel Liquid Detergent .",
              price: 20,off :"10%",
              src:"https://tse2.mm.bing.net/th?id=OIP.C99OGuIL-Du8HyT5QFWJ_AHaHa&pid=Api&P=0&h=180"
            },
            {
                title: "Surf Excel Matic Liquid Detergent Top Load Pouch",
                desc: "ThisSurf Excel Matic Liquid Detergen Top Load Pouchr.",
                price: 20,off :"10%",
                src:"https://medanand.com/wp-content/uploads/2022/01/surf-excel-matic-liquid-detergent-top-load-500ml-2-1635176252.jpg"
              },
              {
                title: "Ariel Matic Top Load Liquid Detergent Refill",
                desc: "ThisAriel Matic Top Load Liquid Detergent Refill.",off :"20%",
                price: 30,
                src:"https://m.media-amazon.com/images/I/71kvYW2XdML._SL1500_.jpg  "
              },
              {
                title: "Rin Ala Fabric Whitener",
                desc: "This Rin Ala Fabric Whitener.",off :"30%",
                price: 40,
                src:"https://tse3.mm.bing.net/th?id=OIP.an14gOtmecQVbmHu4sekjAHaFs&pid=Api&P=0&h=180"
              },
               {
                  title: "Genteel Liquid Detergent ",
                  desc: "This Genteel Liquid Detergent .",
                  price: 20,off :"10%",
                  src:"https://tse2.mm.bing.net/th?id=OIP.C99OGuIL-Du8HyT5QFWJ_AHaHa&pid=Api&P=0&h=180"
                },
                {
                    title: "Surf Excel Matic Liquid Detergent Top Load Pouch",
                    desc: "ThisSurf Excel Matic Liquid Detergen Top Load Pouchr.",
                    price: 20,off :"10%",
                    src:"https://medanand.com/wp-content/uploads/2022/01/surf-excel-matic-liquid-detergent-top-load-500ml-2-1635176252.jpg"
                  },
                  {
                    title: "Ariel Matic Top Load Liquid Detergent Refill",
                    desc: "ThisAriel Matic Top Load Liquid Detergent Refill.",off :"20%",
                    price: 30,
                    src:"https://m.media-amazon.com/images/I/71kvYW2XdML._SL1500_.jpg  "
                  },
                  {
                    title: "Rin Ala Fabric Whitener",
                    desc: "This Rin Ala Fabric Whitener.",off :"30%",
                    price: 40,
                    src:"https://tse3.mm.bing.net/th?id=OIP.an14gOtmecQVbmHu4sekjAHaFs&pid=Api&P=0&h=180"
                  },
                   {
                      title: "Genteel Liquid Detergent ",
                      desc: "This Genteel Liquid Detergent .",
                      price: 20,off :"10%",
                      src:"https://tse2.mm.bing.net/th?id=OIP.C99OGuIL-Du8HyT5QFWJ_AHaHa&pid=Api&P=0&h=180"
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

export default DetergentAndFabricSection
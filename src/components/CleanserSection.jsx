import React from 'react'
import Header from './Header';
import Cards from './Cards';
import Footer from './Footer';

const CleanserSection = () => {
    const backendData = [
        {
          title: "Sunny Premium Green Cleaner",
          desc: "This Sunny Premium Green Cleaner.",
          price: 20,off :"10%",
          src:"https://www.jiomart.com/images/product/600x600/490249502/sunny-premium-green-strong-concentrated-floor-cleaner-1-l-product-images-o490249502-p490249502-0-202203170248.jpg"
        },
        {
          title: "Lizol Disinfectant Surface Cleaner",
          desc: "ThisLizol Disinfectant Surface Cleaner.",off :"20%",
          price: 30,
          src:"https://tse4.mm.bing.net/th?id=OIP.P6-PboqKdL9lliLzohDEzgHaHa&pid=Api&P=0&h=180"
        },
        {
          title: "Dettol Antiseptic Liquid",
          desc: "This Dettol Antiseptic Liquid.",off :"30%",
          price: 40,
          src:"https://tse3.mm.bing.net/th?id=OIP.grDqpc_4SGzmWpdZNorOMgHaHa&pid=Api&P=0&h=180"
        },
         {
            title: "Lizol Disinfectant Surface Cleaner ",
            desc: "This Lizol Disinfectant Surface Cleaner .",
            price: 20,off :"10%",
            src:"https://m.media-amazon.com/images/I/91VqbdABCyL._SL1500_.jpg"
          },
          {
            title: "Sunny Premium Green Cleaner",
            desc: "This Sunny Premium Green Cleaner.",
            price: 20,off :"10%",
            src:"https://www.jiomart.com/images/product/600x600/490249502/sunny-premium-green-strong-concentrated-floor-cleaner-1-l-product-images-o490249502-p490249502-0-202203170248.jpg"
          },
          {
            title: "https://m.media-amazon.com/images/I/61KK8gwWL4L._SL1000_.jpg",
            desc: "This https://m.media-amazon.com/images/I/61KK8gwWL4L._SL1000_.jpg.",
            price: 20,off :"10%",
            src:"https://tse2.mm.bing.net/th?id=OIP.fXj8MM-84EAw60IIpUzbigHaGX&pid=Api&P=0&h=180"
          },
          {
            title: "Sunny Premium Green Cleaner",
            desc: "This Sunny Premium Green Cleaner.",
            price: 20,off :"10%",
            src:"https://www.jiomart.com/images/product/600x600/490249502/sunny-premium-green-strong-concentrated-floor-cleaner-1-l-product-images-o490249502-p490249502-0-202203170248.jpg"
          },
          {
            title: "Glito Lavender Perfumed Floor Cleaner",
            desc: "This Glito Lavender Perfumed Floor Cleaner.",off :"30%",
            price: 40,
            src:"https://tse3.mm.bing.net/th?id=OIP.nAdaToPpqrQMQHjyBSwVEQHaHa&pid=Api&P=0&h=180"
          },
           {
              title: "Harpic Bathroom Cleaner",
              desc: "This Harpic Bathroom Cleaner.",
              price: 20,off :"10%",
              src:"https://tse2.mm.bing.net/th?id=OIP.rTO88R3O1rpONwrkjFzx7QHaHa&pid=Api&P=0&h=180"
            },
            {
                title: "Sunny Premium Green Cleaner",
                desc: "This Sunny Premium Green Cleaner.",
                price: 20,off :"10%",
                src:"https://www.jiomart.com/images/product/600x600/490249502/sunny-premium-green-strong-concentrated-floor-cleaner-1-l-product-images-o490249502-p490249502-0-202203170248.jpg"
              },
              {
                title: "Lizol Disinfectant Surface Cleaner",
                desc: "ThisLizol Disinfectant Surface Cleaner.",off :"20%",
                price: 30,
                src:"https://tse4.mm.bing.net/th?id=OIP.P6-PboqKdL9lliLzohDEzgHaHa&pid=Api&P=0&h=180"
              },
              {
                title: "Dettol Antiseptic Liquid",
                desc: "This Dettol Antiseptic Liquid.",off :"30%",
                price: 40,
                src:"https://tse3.mm.bing.net/th?id=OIP.grDqpc_4SGzmWpdZNorOMgHaHa&pid=Api&P=0&h=180"
              },
               {
                  title: "Lizol Disinfectant Surface Cleaner ",
                  desc: "This Lizol Disinfectant Surface Cleaner .",
                  price: 20,off :"10%",
                  src:"https://m.media-amazon.com/images/I/91VqbdABCyL._SL1500_.jpg"
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

export default CleanserSection
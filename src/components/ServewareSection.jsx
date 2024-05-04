import React from 'react'
import Cards from './Cards';
import Header from './Header';
import Footer from './Footer';

const ServewareSection = () => {
    const backendData = [
        {
          title: "Steel Eco Thali Combo Set",
          desc: "Steel Eco Thali Combo Set.",
          price: 20,off :"10%",
          src:"https://www.popatstores.co.uk/pub/media/catalog/product/cache/bc06252c4d73672b82fe151e7080cdd5/s/1/s13_1.jpg"
        },
        {
          title: "Veer Steel Promo Thali ",
          desc: "This Veer Steel Promo Thali  ",off :"20%",
          price: 30,
          src:"https://www.popatstores.co.uk/pub/media/catalog/product/cache/bc06252c4d73672b82fe151e7080cdd5/s/1/s13_1.jpg"
        },
        {
          title: "Disposable Paper Glass",
          desc: "This Disposable Paper Glass.",off :"30%",
          price: 40,
          src:"https://tse2.mm.bing.net/th?id=OIP.61PBD6D_RSlgl24BJ-kRbgHaFe&pid=Api&P=0&h=180"
        },
        {
          title: "Ocean Glass Plaza",
          desc: "This Ocean Glass Plaza",off :"30%",
          price: 500,
          src:"https://wccc.com.ph/wp-content/uploads/2022/11/ginee_20221123234756522_9646148721.jpg"
        },
        {
          title: "Gokul Steel Single Wall Ice-Cream Bowl & Spoont",
          desc: "Gokul Steel Single Wall Ice-Cream Bowl & Spoon.",off :"10%",
          price: 60,
          src:"https://cdn.foodism.to/gallery/5aff1ea08e3ce.jpeg"
        },
        {
          title: "Dinewell Melamine Leaf Small",
          desc: "ThisDinewell Melamine Leaf Small.",off :"30%",
          price: 700,
          src:"https://tse1.mm.bing.net/th?id=OIP.7fd8aerb43Ud396XhcUyaAAAAA&pid=Api&P=0&h=180"
  },
  {
    title: "Steel Eco Thali Combo Set",
    desc: "Steel Eco Thali Combo Set.",
    price: 20,off :"10%",
    src:"https://www.popatstores.co.uk/pub/media/catalog/product/cache/bc06252c4d73672b82fe151e7080cdd5/s/1/s13_1.jpg"
  },
  {
    title: "Veer Steel Promo Thali ",
    desc: "This Veer Steel Promo Thali  ",off :"20%",
    price: 30,
    src:"https://www.popatstores.co.uk/pub/media/catalog/product/cache/bc06252c4d73672b82fe151e7080cdd5/s/1/s13_1.jpg"
  },
  {
    title: "Disposable Paper Glass",
    desc: "This Disposable Paper Glass.",off :"30%",
    price: 40,
    src:"https://tse2.mm.bing.net/th?id=OIP.61PBD6D_RSlgl24BJ-kRbgHaFe&pid=Api&P=0&h=180"
  },
  {
    title: "Ocean Glass Plaza",
    desc: "This Ocean Glass Plaza",off :"30%",
    price: 500,
    src:"https://wccc.com.ph/wp-content/uploads/2022/11/ginee_20221123234756522_9646148721.jpg"
  },
  {
    title: "Gokul Steel Single Wall Ice-Cream Bowl & Spoont",
    desc: "Gokul Steel Single Wall Ice-Cream Bowl & Spoon.",off :"10%",
    price: 60,
    src:"https://cdn.foodism.to/gallery/5aff1ea08e3ce.jpeg"
  },
  {
    title: "Dinewell Melamine Leaf Small",
    desc: "ThisDinewell Melamine Leaf Small.",off :"30%",
    price: 700,
    src:"https://tse1.mm.bing.net/th?id=OIP.7fd8aerb43Ud396XhcUyaAAAAA&pid=Api&P=0&h=180"
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
}

export default ServewareSection
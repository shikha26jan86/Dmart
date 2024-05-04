import React from 'react';
import Cards from './Cards';
// import img1 from '../images/clouds1.jpg'

const CardsSection = () =>{
    const backendData = [
        {
          title: "LUX",
          desc: "This a LUX.",
          price: 20,off :"10%",
          src:"https://i5.walmartimages.com/asr/3cb06afe-7465-41d4-a5b2-cec8c4ef17e8_1.8047c903c481cc299315a4306a8d9f7a.jpeg"
        },
        {
          title: "Dove",
          desc: "This a Dove.",off :"20%",
          price: 30,
          src:"https://www.peleguy.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/o/dove_original_soap_hot00004.jpg"
        },
        {
          title: "Colgate",
          desc: "This Colgate.",off :"30%",
          price: 40,
          src:"https://tse4.mm.bing.net/th?id=OIP.5AItb09pqmPmKwIZ8mCDDwHaE6&pid=Api&P=0&h=180"
        },
        {
          title: "Bournvit",
          desc: "This Bournvit.",off :"30%",
          price: 500,
          src:"https://i5.walmartimages.com/asr/2a4c8fa3-a59f-4618-b3ca-8ffe728b29cd_1.f73a019107c326c273c0fe0da4c09c5e.jpeg"
        },
        {
          title: "Coconut oil",
          desc: "This Coconut oil.",off :"10%",
          price: 60,
          src:"https://www.healthbenefitsbeverages.com/wp-content/uploads/2017/03/91giCZiGa0L._SL1500_.jpg"
        },
        {
          title: "Rice",
          desc: "This Rice.",off :"30%",
          price: 700,
          src:"https://tse4.mm.bing.net/th?id=OIP.aXmiTJHlOZJprfcHTG_JygHaHa&pid=Api&P=0&h=180"
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
    src:"https://tse3.mm.bing.net/th?id=OIP.xRg425cRF-r9B0XEk4lKCwHaE8&pid=Api&P=0&h=180"
},
{
    title: "odonil",
    desc: "This odonil",
    price: 700,off :"10%",
    src:"https://sindirasupermarket.com/wp-content/uploads/2020/09/odonil9.jpg"
},
{
    title: "Pears soap",
    desc: "Pears soap.",
    price: 70,off :"30%",
    src:"https://tse1.mm.bing.net/th?id=OIP.L3sSCPD0Yc5xlV-r87PGgQHaFK&pid=Api&P=0&h=180"
},
{
    title: "Loreal Mens",
    desc: "This Loreal Mens.",
    price: 100,off :"40%",
    src:"https://tse1.mm.bing.net/th?id=OIP.Vactd79CesgE82RJ6rwHOwHaHa&pid=Api&P=0&h=180"
},
{
    title: "Cinthol",
    desc: "This Cinthol.",
    price: 70,off :"30%",
    src:"https://images-na.ssl-images-amazon.com/images/I/81aVEokflXL._SL1500_.jpg"
},
    ];
  return (
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
  );
};
export default CardsSection;

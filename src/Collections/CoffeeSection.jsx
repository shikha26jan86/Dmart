import React from 'react'
import Cards from '../components/Cards';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CoffeeSection = () =>{
    const backendData = [
        {
          title: "Bru Instant Coffee",
          desc: "This Bru Instant Coffee.",
          price: 20,off :"10%",
          src:"https://tse3.mm.bing.net/th?id=OIP.IeTPgwG5T4rsJqKQP-0UqgHaHa&pid=Api&P=0&h=180"
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
          title: "Bru Instant Pure Coffee",
          desc: "Bru Instant Pure Coffee.",off :"30%",
          price: 500,
          src:"https://ammangmart.com/wp-content/uploads/2020/05/Bru-Pure-Instant-Coffee-50g.jpg"
        },
        {
            title: "House Instant Coffee ",
            desc: "House Instant Coffee .",off :"30%",
            price: 40,
            src:"https://tse4.mm.bing.net/th?id=OIP.Rkt1UyRDtf-m6ec-2wmJqQHaHa&pid=Api&P=0&h=180"
          },
        {
            title: "Bru Instant Coffee",
            desc: "This Bru Instant Coffee.",
            price: 20,off :"10%",
            src:"https://tse3.mm.bing.net/th?id=OIP.IeTPgwG5T4rsJqKQP-0UqgHaHa&pid=Api&P=0&h=180"
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
            title: "House Instant Coffee ",
            desc: "House Instant Coffee .",off :"30%",
            price: 40,
            src:"https://tse4.mm.bing.net/th?id=OIP.Rkt1UyRDtf-m6ec-2wmJqQHaHa&pid=Api&P=0&h=180"
          },
{
    title: "House Instant Coffee ",
    desc: "House Instant Coffee .",off :"30%",
    price: 40,
    src:"https://tse4.mm.bing.net/th?id=OIP.Rkt1UyRDtf-m6ec-2wmJqQHaHa&pid=Api&P=0&h=180"
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

export default CoffeeSection
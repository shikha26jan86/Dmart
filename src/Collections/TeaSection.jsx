import React from 'react'
import Cards from '../components/Cards';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeaSection = () => {
    const backendData = [
        {
          title: "Wagh Bakri Premium Leaf Tea",
          desc: "This Wagh Bakri Premium Leaf Tea.",
          price: 20,off :"10%",
          src:"https://i5.walmartimages.ca/images/Enlarge/401/075/999999-51179401075.jpg    "
        },
        {
          title: "Society Tea",
          desc: "This Society Tea.",off :"20%",
          price: 30,
          src:"https://www.netmeds.com/images/product-v1/600x600/911121/society_tea_1_kg_0_0.jpg"
        },
        {
          title: "Brooke Bond Red Label Natural",
          desc: "This Brooke Bond Red Label Natural.",off :"30%",
          price: 40,
          src:"https://evegro.com/wp-content/uploads/2021/09/Brooke-Bond-Red-Label-Natural-Care-Tea-1-KG.jpeg"
        },
        {
          title: "Taj Mahal Tea",
          desc: "This Taj Mahal Tea.",off :"30%",
          price: 500,
          src:"https://tse4.mm.bing.net/th?id=OIP.yGcYtrQV6MeMjnEx5QI4FgHaHa&pid=Api&P=0&h=180"
        },
        {
          title: "Society Masala Flavour Tea Pouch",
          desc: "ThisSociety Masala Flavour Tea Pouch.",off :"10%",
          price: 60,
          src:"https://tse1.mm.bing.net/th?id=OIP.4yT8xlkS0a_yoNIEPtnGGwHaHa&pid=Api&P=0&h=180"
        },
        {
            title: "Wagh Bakri Premium Leaf Tea",
            desc: "This Wagh Bakri Premium Leaf Tea.",
            price: 20,off :"10%",
            src:"https://i5.walmartimages.ca/images/Enlarge/401/075/999999-51179401075.jpg    "
          },
          {
            title: "Society Tea",
            desc: "This Society Tea.",off :"20%",
            price: 30,
            src:"https://www.netmeds.com/images/product-v1/600x600/911121/society_tea_1_kg_0_0.jpg"
          },
          {
            title: "Brooke Bond Red Label Natural",
            desc: "This Brooke Bond Red Label Natural.",off :"30%",
            price: 40,
            src:"https://evegro.com/wp-content/uploads/2021/09/Brooke-Bond-Red-Label-Natural-Care-Tea-1-KG.jpeg"
          },
          {
            title: "Taj Mahal Tea",
            desc: "This Taj Mahal Tea.",off :"30%",
            price: 500,
            src:"https://tse4.mm.bing.net/th?id=OIP.yGcYtrQV6MeMjnEx5QI4FgHaHa&pid=Api&P=0&h=180"
          },
          {
            title: "Society Masala Flavour Tea Pouch",
            desc: "ThisSociety Masala Flavour Tea Pouch.",off :"10%",
            price: 60,
            src:"https://tse1.mm.bing.net/th?id=OIP.4yT8xlkS0a_yoNIEPtnGGwHaHa&pid=Api&P=0&h=180"
          },
          {
            title: "Wagh Bakri Premium Leaf Tea",
            desc: "This Wagh Bakri Premium Leaf Tea.",
            price: 20,off :"10%",
            src:"https://i5.walmartimages.ca/images/Enlarge/401/075/999999-51179401075.jpg    "
          },
          {
            title: "Society Tea",
            desc: "This Society Tea.",off :"20%",
            price: 30,
            src:"https://www.netmeds.com/images/product-v1/600x600/911121/society_tea_1_kg_0_0.jpg"
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

export default TeaSection
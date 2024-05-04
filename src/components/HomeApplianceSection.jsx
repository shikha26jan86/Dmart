import React from 'react'
import Cards from './Cards';
import Header from './Header';
import Footer from './Footer';

const HomeApplianceSection = () => {
    const backendData = [
        {
          title: "Bajaj Dry Iron ",
          desc: "Bajaj Dry Iron .",
          price: 20,off :"10%",
          src:"https://lsmedia.linker-cdn.net/272376/2021/5275871.png?width=1200&height=1125"
        },
        {
          title: "Usha Racer Chrome Ceiling Fan 1200 mm ",
          desc: "Usha Racer Chrome Ceiling Fan 1200 mm ",off :"20%",
          price: 30,
          src:"https://5.imimg.com/data5/SELLER/Default/2022/3/GB/IZ/LZ/3910919/usha-racer-chrome-ceiling-fan-1000x1000.png"
        },
        {
          title: "Eveready 1015 R6 AA Battery",
          desc: "This Eveready 1015 R6 AA Battery",off :"30%",
          price: 40,
          src:"https://static3.webx.pk/files/4688/Images/eveready-1015-red-aa-battery-x-4-blister-pack-pencil-cell-1-4688-1751402-180423123617042.jpg"
        },
        {
          title: "Bajaj MX35N Steam Iron",
          desc: "This Bajaj MX35N Steam Iron.",off :"30%",
          price: 500,
          src:"https://media.jointlook.com/customPhotos/productImages/Bajaj%20MX35N%20Black%202000%20Watts%20Steam%20Iron%20JL-BIR-340(2).jpg"
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
    title: "Duracell AAA Batteries",
    desc: "Duracell AAA Batteries.",
    price: 100,off :"40%",
    src:"https://store.officesystemsaruba.com/wp-content/uploads/2020/06/3SIBA0007-1-1752x2048.jpg"
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
         
  );
    }

export default HomeApplianceSection
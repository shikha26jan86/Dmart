import React from "react";
import Cards from "./Cards";

const FruitsAndVegetable = () => {
  const backendData = [
      {
        title: "Mango Alphonso Ratnagiri",
        desc: "Mango Alphonso Ratnagiri",
        price: 20,off :"10%",
        src:"https://5.imimg.com/data5/SELLER/Default/2021/2/ZO/NY/XF/50823524/ratnagiri-alphonso-mangoes.jpg"
      },
      {
        title: "Watermelon ",
        desc: "Watermelon .",off :"20%",
        price: 30,
        src:"https://tse1.mm.bing.net/th?id=OIP.lkH9pwSB89Mq0OJ_v_rJAgHaFa&pid=Api&P=0&h=180"
      },
      {
        title: "Muskmelon ",
        desc: "Muskmelon .",off :"30%",
        price: 40,
        src:"https://tse4.mm.bing.net/th?id=OIP.m478NflvIWFXFTEU-wrYtAHaFj&pid=Api&P=0&h=180"
      },
      {
        title: "Sonaka Fresh Grapes ",
        desc: "Sonaka Fresh Grapes .",off :"30%",
        price: 500,
        src:"https://5.imimg.com/data5/VM/NV/MY-12391326/fresh-sonaka-grapes-1000x1000.jpg"
      }, {
        title: "Mango Alphonso Ratnagiri",
        desc: "Mango Alphonso Ratnagiri",
        price: 20,off :"10%",
        src:"https://tse4.mm.bing.net/th?id=OIP.dtbXv4sQNefPJSQDfukKGwHaIE&pid=Api&P=0&h=180"
      },
      {
        title: "Mango Alphonso Ratnagiri",
        desc: "Mango Alphonso Ratnagiri",
        price: 20,off :"10%",
        src:"https://tse2.mm.bing.net/th?id=OIP.Z95VdLc0NItbNuPI_IstsgHaEr&pid=Api&P=0&h=180"
      }, 
      {
        title: "Ghibhi Fresh  ",
        desc: "Ghibhi Fresh  .",off :"30%",
        price: 500,
        src:"https://tse1.mm.bing.net/th?id=OIP.Yq-TF5epJDharjb9mzfR-wAAAA&pid=Api&P=0&h=180"
      }, {
        title: "mint Alphonso ",
        desc: "mint Alphonso ",
        price: 20,off :"10%",
        src:"https://www.civilwarmed.org/wp-content/uploads/2021/02/peppermint-1-1536x1152.jpg"
      },
      {
        title: "corander ",
        desc: "corander  Alphonso Ratnagiri",
        price: 20,off :"10%",
        src:"https://tse2.mm.bing.net/th?id=OIP.w6AkeK4W_xJYBgVgM2q9WAHaGV&pid=Api&P=0&h=180"
      }, 
    
    ];
return (
  <>
  <div style={{border:"1px solid gray",margin:"25px",backgroundColor:"#3DED97" }}>

<div className="container">
 <div className='row mt-5'style={{gap:"150px",marginBottom:"50px"}}>
  
  {backendData.map((product, i)=>{
    return(
      <div className="col-lg-3">
        <div key={i} className ="col-lg-3">
             <Cards src={product.src} title={product.title} desc={product.desc} price={product.price} off={product.off}/>
      </div>
      </div>
      
      
              

     
   );
})}
</div>
</div>
</div>
  </>

 
  
 
);
};

  

export default FruitsAndVegetable;

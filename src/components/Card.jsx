import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Card = () => {
  const [quantity,setQuantity] =useState(0);
  const incrementHandler = ()=>{
    setQuantity ((qty)=>(qty+1));
  }
  const decrementHandler =()=>{
    setQuantity ((qty)=>(qty-1));
  }
  //  const backendData =[
  //   { 
  //     title:"Onion",
  //     desc:"My Onion",
  //     Price: 100,
  //     src : "https://tse4.mm.bing.net/th?id=OIP.HqNNeb007vdUsocitEE0jAHaE8&pid=Api&P=0&h=180",
  //    },
  //   {
  //     title:"Onion",
  //     desc:"My Onion",
  //     Price: 100,
  //     src : "https://tse4.mm.bing.net/th?id=OIP.HqNNeb007vdUsocitEE0jAHaE8&pid=Api&P=0&h=180",
  //   },{
  //     title:"Onion",
  //     desc:"My Onion",
  //     Price: 100,
  //     src : "https://tse4.mm.bing.net/th?id=OIP.HqNNeb007vdUsocitEE0jAHaE8&pid=Api&P=0&h=180",
  //   },{
  //     title:"Onion",
  //     desc:"My Onion",
  //     Price: 100,
  //     src : "https://tse4.mm.bing.net/th?id=OIP.HqNNeb007vdUsocitEE0jAHaE8&pid=Api&P=0&h=180",
  //   },{
  //     title:"Onion",
  //     desc:"My Onion",
  //     Price: 100,
  //     src : "https://tse4.mm.bing.net/th?id=OIP.HqNNeb007vdUsocitEE0jAHaE8&pid=Api&P=0&h=180",
  //   },{
  //     title:"Onion",
  //     desc:"My Onion",
  //     Price: 100,
  //     src : "https://tse4.mm.bing.net/th?id=OIP.HqNNeb007vdUsocitEE0jAHaE8&pid=Api&P=0&h=180",
  //   },{
  //     title:"Onion",
  //     desc:"My Onion",
  //     Price: 100,
  //     src : "https://tse4.mm.bing.net/th?id=OIP.HqNNeb007vdUsocitEE0jAHaE8&pid=Api&P=0&h=180",
  //   }
  //   ,{
  //     title:"Onion",
  //     desc:"My Onion",
  //     Price: 100,
  //     src :"https://tse2.mm.bing.net/th?id=OIP.9f4ip8UEcQxl2Lbizn0VMQHaGh&pid=Api&P=0&h=180",
  //   },
  //  ]
  //  return(
  //   <div className='container'>
  //         <div>
  //           {backendData.map((data,i)=>{
  //             return(
  //                 <div key={i}>{i}
  //                  <Card title={data.title}  desc={data.desc} Price={data.Price} src={data.src}  />
  //                 </div>
  //             )
  //           })}
  //         </div>
  //   </div>
  //  )
  return (
  <div style={{backgroundColor:"#98E690",margin:"20px"}}>

    <h1 >Fruits and Vegitables</h1>
    <div className='container' >
        
        <div className='row' style={{display:"flex", gap:"30px"}}>
         <div className="card" style={{width: '18rem'}}>
       <img style={{width:"200px", padding:"20px",marginLeft:"30px"}} src="https://tse4.mm.bing.net/th?id=OIP.HqNNeb007vdUsocitEE0jAHaE8&pid=Api&P=0&h=180" className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Onion</h5>
         <p className="card-text">Price : 35 /Kg<br></br>OFF</p>
     
         <div className="dropdown">
  <button style={{backgroundColor:"white",color:"black" ,width:"100%"}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  3 Kg ( Rs.60)    
  </button>
  <ul className="dropdown-menu" style={{width:"100px"}}>
    <li><a className="dropdown-item" >3 Kg ( Rs.60)</a></li>
    <li><a className="dropdown-item" >5 Kg( Rs.100)</a></li>
    <li><a className="dropdown-item" >10 Kg( Rs.150)</a></li>
  </ul>
  <div>
    <button onClick={decrementHandler} disabled={quantity<1} >-</button>
    quantity:{quantity}
    <button onClick={incrementHandler}>+</button>
  </div>
  <button  className='bg-success m-3'>Add To Cart</button>
</div>    
    </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
       <img style={{width:"200px", padding:"20px",marginLeft:"30px"}} src="https://tse2.mm.bing.net/th?id=OIP.ki2utRSQ3Oz6hkggAM3b4QHaE9&pid=Api&P=0&h=180" className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Onion</h5>
         <p className="card-text">Price : 35 /Kg<br></br>OFF</p>
       
         <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" >3 Kg ( Rs.50)</a></li>
    <li><a className="dropdown-item" >5 Kg( Rs.20)</a></li>
    <li><a className="dropdown-item" >10 Kg( Rs.140)</a></li>
  </ul>
  <div>
    <button onClick={decrementHandler} disabled={quantity<1} >-</button>
    quantity:{quantity}
    <button onClick={incrementHandler}>+</button>
  </div>
  <button className='bg-success m-3'>Add To Cart</button>
</div>    
    </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
       <img style={{width:"200px", padding:"20px",marginLeft:"30px"}} src="https://www.ingredientsnetwork.com/47/product/63/38/17/p633817img_XL.jpg" className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Onion</h5>
         <p className="card-text">Price : 35 /Kg<br></br>OFF</p>
     
         <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" >3 Kg ( Rs.20)</a></li>
    <li><a className="dropdown-item" >5 Kg( Rs.80)</a></li>
    <li><a className="dropdown-item" >10 Kg( Rs.140)</a></li>
  </ul>
  <div>
    <button onClick={decrementHandler} disabled={quantity<1} >-</button>
    quantity:{quantity}
    <button onClick={incrementHandler}>+</button>
  </div>
  <button className='bg-success m-3'>Add To Cart</button>
</div>    
    </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
       <img style={{width:"200px", padding:"20px",marginLeft:"30px"}} src="https://roshanseeds.com/wp-content/uploads/2020/12/Bringle-Long-Purple-1.jpg" className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Onion</h5>
         <p className="card-text">Price : 35 /Kg<br></br>OFF</p>
     
         <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" >3 Kg ( Rs.40)</a></li>
    <li><a className="dropdown-item" >5 Kg( Rs.140)</a></li>
    <li><a className="dropdown-item" >10 Kg( Rs.110)</a></li>
  </ul>
  <div>
    <button onClick={decrementHandler} disabled={quantity<1} >-</button>
    quantity:{quantity}
    <button onClick={incrementHandler}>+</button>
  </div>
  <button className='bg-success m-3'>Add To Cart</button>
</div>    
    </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
       <img style={{width:"200px", padding:"20px",marginLeft:"30px"}} src="https://tse2.mm.bing.net/th?id=OIP.dfM8B8N2mSp-1rV5kNnoFAHaD9&pid=Api&P=0&h=180" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Onion</h5>
         <p className="card-text">Price : 35 /Kg<br></br>OFF</p>
     
         <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" >3 Kg ( Rs.60)</a></li>
    <li><a className="dropdown-item" >5 Kg( Rs.100)</a></li>
    <li><a className="dropdown-item" >10 Kg( Rs.150)</a></li>
  </ul>
  <div>
    <button onClick={decrementHandler} disabled={quantity<1} >-</button>
    quantity:{quantity}
    <button onClick={incrementHandler}>+</button>
  </div>
  <button className='bg-success m-3'>Add To Cart</button>
</div>    
    </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
       <img style={{width:"200px", padding:"20px",marginLeft:"30px"}} src="https://tse2.mm.bing.net/th?id=OIP.F2C2nDHAVEInmB1NmbSJ3gHaFj&pid=Api&P=0&h=180" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Onion</h5>
         <p className="card-text">Price : 35 /Kg<br></br>OFF</p>
     
         <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" >3 Kg ( Rs.60)</a></li>
    <li><a className="dropdown-item" >5 Kg( Rs.100)</a></li>
    <li><a className="dropdown-item" >10 Kg( Rs.150)</a></li>
  </ul>
  <div>
    <button onClick={decrementHandler} disabled={quantity<1} >-</button>
    quantity:{quantity}
    <button onClick={incrementHandler}>+</button>
  </div>
  <button className='bg-success m-3'>Add To Cart</button>
</div>    
    </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
       <img style={{width:"200px", padding:"20px",marginLeft:"30px"}} src="https://www.aprifel.com/wp-content/uploads/2019/02/coriandre.jpg" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Onion</h5>
         <p className="card-text">Price : 35 /Kg<br></br>OFF</p>
     
         <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" >3 Kg ( Rs.60)</a></li>
    <li><a className="dropdown-item" >5 Kg( Rs.100)</a></li>
    <li><a className="dropdown-item" >10 Kg( Rs.150)</a></li>
  </ul>
  <div>
    <button onClick={decrementHandler} disabled={quantity<1} >-</button>
    quantity:{quantity}
    <button onClick={incrementHandler}>+</button>
  </div>
  <button className='bg-success m-3'>Add To Cart</button>
</div>    
    </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
       <img style={{width:"200px", padding:"20px",marginLeft:"30px"}} src="https://tse2.mm.bing.net/th?id=OIP.9f4ip8UEcQxl2Lbizn0VMQHaGh&pid=Api&P=0&h=180" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Onion</h5>
         <p className="card-text">Price : 35 /Kg<br></br>OFF</p>
     
         <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" >3 Kg ( Rs.60)</a></li>
    <li><a className="dropdown-item" >5 Kg( Rs.100)</a></li>
    <li><a className="dropdown-item" >10 Kg( Rs.150)</a></li>
  </ul>
  <div>
    <button onClick={decrementHandler} disabled={quantity<1} >-</button>
    quantity:{quantity}
    <button onClick={incrementHandler}>+</button>
  </div>
  <button className='bg-success m-3'>Add To Cart</button>
</div>    
    </div>
    </div>
    </div>
        </div>
        </div>
     )
}

export default Card
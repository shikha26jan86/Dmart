import React from 'react'
import { Link } from 'react-router-dom'

const PopularCategory = () => {
  return (
     <div style={{padding:"40px",backgroundColor:"#F0F0F0"}}>
           <h4 style={{display:"flex",justifyContent:"start"}}>Popular Categories</h4>
     <div style={{display:"flex",gap:"30px",border:"1px solid white",padding:"20px",backgroundColor:"#E8E9EB",padding:"20px"}}>
           <div className="card" style={{width: '8rem',backgroundColor:"white"}}>
              <img style={{border:"1px solid #BFBDC1" ,marginBottom:"40px"}} src="https://cdn.dmart.in/images/rwd/banners/cards/12sept23-popularcat-tea1.png" className="card-img-top" alt="..." />
                 <Link className="card-title" to="/TeaSection"><h4>Tea </h4></Link>
             </div>
    
          <div className="card" style={{width: '8rem'}}>
            <img style={{border:"1px solid #BFBDC1" ,marginBottom:"40px"}} src="https://cdn.dmart.in/images/rwd/banners/cards/12jan24-popularcat-coffee.png" className="card-img-top" alt="..." />
                 <Link className="card-title"  to="/CoffeeSection"><h4>Coffee </h4></Link>
       
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img style={{border:"1px solid #BFBDC1" ,marginBottom:"40px"}} src="https://cdn.dmart.in/images/rwd/banners/cards/12jan24-popularcat-healthdrinks.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/HealthyDrink"><h4>Drinks </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img style={{border:"1px solid #BFBDC1" }} src="https://cdn.dmart.in/images/rwd/banners/cards/1may23-popularcat-dairy.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/DairySection"><h4>Dairy </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
          <img style={{border:"1px solid #BFBDC1" }} src="https://cdn.dmart.in/images/rwd/banners/cards/12jan24-popularcat-soaps.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/BathSoaps"><h4>Soap </h4> </Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img style={{border:"1px solid #BFBDC1" }} src="https://cdn.dmart.in/images/rwd/banners/cards/16jan23-popularcat-poojaneeds.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Pooja"><h4>Pooja </h4> </Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img style={{border:"1px solid #BFBDC1" }} src="https://cdn.dmart.in/images/rwd/banners/cards/12sept23-popularcat-toothpaste.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Toothpaste"><h4>Toothpaste </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img style={{border:"1px solid #BFBDC1" }} src="https://cdn.dmart.in/images/rwd/banners/cards/12jan24-popularcat-shampoos.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Shampoo"><h4>shampoo </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img  style={{border:"1px solid #BFBDC1" }}src="https://cdn.dmart.in/images/rwd/banners/cards/12sept23-popularcat-softdrinks.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Drink"><h4>Soft Drinks </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img style={{border:"1px solid #BFBDC1" }} src="https://cdn.dmart.in/images/rwd/banners/cards/16jan23-popularcat-poojaneeds.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Pooja"><h4>Pooja </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img style={{border:"1px solid #BFBDC1" }} src="https://cdn.dmart.in/images/rwd/banners/cards/1oct23-popularcat-candles.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Candle"><h4>Candles </h4></Link>
             </div>
          </div>

    </div> 
  
    </div>
   )
}

export default PopularCategory
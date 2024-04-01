import React from 'react'
import { Link } from 'react-router-dom'

const PopularCategory = () => {
  return (
     <div style={{display:"flex",gap:"10px",border:"1px solid gray",padding:"30px",backgroundColor:"#E8E9EB"}}>
           <div className="card" style={{width: '8rem'}}>
            < img src="https://assets.iceland.co.uk/i/iceland/tetley_green_tea_pure_green_50_tea_bags_100g_83184_T1.jpg?$pdpzoom$" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title" to="/TeaCollections"><h4>Tea </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img src="https://cdn.dmart.in/images/rwd/banners/cards/16jan23-popularcat-poojaneeds.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Pooja"><h4>Pooja </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img src="https://cdn.dmart.in/images/rwd/banners/cards/1oct23-popularcat-blankets.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Towels"><h4>Towels </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img src="https://cdn.dmart.in/images/rwd/banners/cards/1oct23-popularcat-candles.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Candel"><h4>Candle </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img src="https://cdn.dmart.in/images/rwd/banners/cards/12sept23-popularcat-chocolates.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Chocolate"><h4>Chocolate </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
          <img src="https://cdn.dmart.in/images/rwd/banners/cards/1oct23-popularcat-lugguage.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Bag"><h4>Bags </h4> </Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img src="https://cdn.dmart.in/images/rwd/banners/cards/1oct23-popularcat-disposablecutlery.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Cutlet"><h4>Cutlet </h4> </Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img src="https://cdn.dmart.in/images/rwd/banners/cards/12sept23-popularcat-softdrinks.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Drink"><h4>Drink </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img src="https://cdn.dmart.in/images/rwd/banners/cards/12sept23-popularcat-toothpaste.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Toothpaste"><h4>Toothpaste </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img src="https://cdn.dmart.in/images/rwd/banners/cards/16jan23-popularcat-mopswipers.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Cleansing"><h4>Cleansing </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img src="https://cdn.dmart.in/images/rwd/banners/cards/16jan23-popularcat-poojaneeds.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Pooja"><h4>Pooja </h4></Link>
             </div>
          </div>
          <div className="card" style={{width: '8rem'}}>
            <img src="https://cdn.dmart.in/images/rwd/banners/cards/1oct23-popularcat-candles.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="card-title"  to="/Candles"><h4>Candles </h4></Link>
             </div>
          </div>

    </div> 
   )
}

export default PopularCategory
import { useState } from "react";
// import CardsSection from "./cardsSection";
// --(5 jan)--

function Cards(props) { 
  
  const [quantity, setQuantity] = useState(0);
// -----------------
  const { title, desc, price ,src,off} = props;
  const incrementHandler = () => {
    setQuantity((qty) => qty + 1);
  };
   const decrementHandler = () => {
    setQuantity((qty) => qty - 1);
  };
  // ---------------
  // const decrementHandler = () => {
  //   if(quantity>0){
  //     setQuantity((qty) => qty - 1);
  //   }
  // };
  const [cartToggle, setCartToggle] = useState(false);
  const [qtyError, setQtyError] = useState('');
  const toggleAddToCart = () => {
    if (quantity > 0) {
      setQtyError('');
      setCartToggle(!cartToggle);
    } else {
      setQtyError("plz add quantity!");
      setCartToggle(false);
    }
  };
 let cardButton = `₹ ${price}`;
  if (cartToggle) {
    cardButton = "Added";
  }
  return (
    <div className="col-lg-4" style={{backgroundColor:"gray"}}>
      <div className="card" style={{ width: "20rem",height:"430px"}}>
      <img style={{width:"200px",height:"120px",marginLeft:"70px",marginTop:"30px"}} src={src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div style={{display:"inline-block"}}>
        <p>Dmart : {off} off<br></br> Price: {price}</p> 
        </div>      
        <button onClick={toggleAddToCart} className="btn btn-primary">add me:{cardButton}</button><br></br><br></br>
        
        <button disabled={quantity<1} onClick={decrementHandler}className="btn btn-info ms-3">-</button>
        <span className="ms-3">
          <strong>Qty:{quantity}</strong></span>
        <button onClick={incrementHandler} className="btn btn-info ms-3">+</button>
      </div>
      <p style={{color:"red",textAlign:"center"}}>{qtyError}</p>
      <button style={{width:"250px",backgroundColor:"green",color:"white",margin:"10px",fontSize:"20px",marginBottom:"30px",marginLeft:"30px",borderRadius:"10px"}}>Add to Cart</button>
    </div>
    </div>
  );
}
export default Cards;

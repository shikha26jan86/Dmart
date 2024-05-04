import React from 'react'
import {  Link} from "react-router-dom";
import cart_icon from '../components/cart_icon.png'

const Header = () => {
  // const {getTotalCartItems} = useContext(ShopContext);
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary" >
    <a style={{color:"green", font:"50px",paddingLeft:"20px",paddingRight:"20px"}} className="navbar-brand" ><b>D</b>mart <br></br><span style={{color:"red"}}>Ready </span> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  <div className="container-fluid" >
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:"flex", gap:"40px"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a style={{paddingLeft:"20px", paddingRight:"50px",backgroundColor:"#E0FFFF"}} className="nav-link active" aria-current="page" >411028<br></br>Pune</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Earliest Home Delivery available<br></br> <strong> Tomorrow 07:00 AM - 10:00 AM </strong> </a>
        </li>    
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" style={{width:"500px"}} placeholder="Aap ko Kya Chahiye ?" aria-label="Search" />
        <button className="btn-success" type="submit" style={{backgroundColor:"green"}}>Search</button>
      </form>
      {/* <span className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/SignIn" >Sign-In/Register </Link>
        </span> */}
        {/* <div className="nav-login-cart">
         <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div> */}
      <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
      <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">
          {/* {getTotalCartItems()} */}0
          </div>
      </div>
    </div>
  </div>
</nav>
<div style={{display:"flex",gap:"30px",color:"green",border:"1px solid black" }}>
<ul className="nav nav-underline" style={{color:"green"}} >
<li className="nav-item" style={{marginRight:"50px"}}>
    <Link className="nav-link" to="/AllCategories"  >All Category |</Link>
  </li>
  <li className="nav-item">
    <Link to="/valuePack" className="nav-link"  >Value Pack</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/ReadyTOCookCardSection" >Ready To Cook</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/HomeApplianceSection">Home Appliance</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link"  to="/CookwareSection">Cookware</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link"  to="/ServewareSection">Serveware</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link"  to="/CleanserSection">Cleanser</Link>
  </li>
  <li className="nav-item">
    <Link  className="nav-link"  to="/DetergentAndFabricSection">Detergents</Link>
  </li>
 </ul>

</div>


    </>    
  )
}

export default Header
import React from 'react'
import {  Link} from "react-router-dom";

const Header = () => {
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
      <span className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/SignIn" >Sign-In/Register </Link>
        </span>
        <span className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Cart">Cart </Link>
        </span>
    </div>
  </div>
</nav>
<div style={{display:"flex",gap:"30px",color:"black",border:"1px solid black"}}>
<ul className="nav nav-underline">
<li className="nav-item" style={{marginRight:"50px"}}>
    <Link className="nav-link" to="/AllCategories" >All Category |</Link>
  </li>
  <li className="nav-item">
    <Link to="/valuePack" className="nav-link" >Value Pack</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/ReadyToCook" >Ready To Cook</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/HomeAppliances">Home Appliance</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link"  to="/Cookware">Cookaware</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link"  to="/Serveware">Serveware</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link"  to="/Cleaners">Cleanser</Link>
  </li>
  <li className="nav-item">
    <Link  className="nav-link"  to="/Detergents">Detergents</Link>
  </li>
  <li className="nav-item">
    <Link  className="nav-link"  to="/Detergents">bathroom cleaner</Link>
  </li>

</ul>

</div>


    </>    
  )
}

export default Header
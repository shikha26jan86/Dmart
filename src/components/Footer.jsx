import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
  <div className="col mb-3">
    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
    </a>
    <p className="text-body-secondary"></p>
    <p style={{marginLeft:"20px", color:"gray"}}>Download DMart Ready Mobile App Now!!</p>
    <div style={{display:"flex",marginLeft:"70px"}}>
    <img style={{height:"50px", padding:"5px"}} src="https://cdn.dmart.in/images/rwd/footer/google-play.svg" className="d-block w-100" alt="..." />
    <img style={{height:"50px", padding:"5px"}}src="https://cdn.dmart.in/images/rwd/footer/download-app-store.svg" className="d-block w-100" alt="..." />
    </div>
    

  </div>
  <div className="col mb-3">
  </div>
  <div>



  </div>
  <div className="col mb-3">
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">PriPricing, Delivery, Return and Refund Policycing</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">
Terms and Conditions</a></li>
      
    </ul>
  </div>
  


  <div className="col mb-3">
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Us</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pickup Points</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pickup Points</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Disclaimer</a></li>
    </ul>
  </div>
  




</footer>



    </div>
  )
}

export default Footer
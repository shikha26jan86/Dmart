import React from 'react'

const SecondHeader = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"gray"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">All category</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Dmart Grocery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Value Pack</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ready To Cook</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Home Appliances</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cookware</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Serveware</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cleaning</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Detergent</a>
        </li>
         </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default SecondHeader
import React from 'react'

const SecondCarousel = () => {
  return (
    <div style={{padding:"30px"}}>
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://cdn.dmart.in/images/rwd/banners/curated/1jan24-curated-halfprice.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://cdn.dmart.in/images/rwd/banners/curated/1jan24-curated-halfprice.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://cdn.dmart.in/images/rwd/banners/curated/1jan24-curated-bmh-pune.jpg" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

  )
}

export default SecondCarousel
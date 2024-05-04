import React from 'react'

const Carousel = () => {
  return (
    <div >
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1apr24-crsl-dg-pune.jpg&w=1920&q=75" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F15feb23-crsl-beautystore.jpg&w=1920&q=75" className="d-block w-100" alt="..." />
      </div>
      <div className="https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1jan24-crsl-serveware.jpg&w=1920&q=75">
        <img src="" className="d-block w-100" alt="..." />
      </div>
      <div className="https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1apr24-crsl-ds-pune.jpg&w=1920&q=75 ">
        <img src="" className="d-block w-100" alt="..." />
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

export default Carousel
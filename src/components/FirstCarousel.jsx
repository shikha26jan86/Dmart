import React from 'react'

const FirstCarousel = () => {
  return (
    <div>
        <div id="carouselExample" className="carousel slide" >
  <div className="carousel-inner" style={{height:"400px"}}>
    <div className="carousel-item active">
      <img src="https://www.thermos.com.sg/assets/blog/images/15.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://tse1.mm.bing.net/th?id=OIP.NB2tQB2ANoMom2D0FjfMbQHaFs&pid=Api&P=0&h=180" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="http://1.bp.blogspot.com/-cVw29UUtpg0/Ttd-ur7l9YI/AAAAAAAAABY/cGCGMfolD-I/s1600/product_list_for_website%2bcopy.jpg" className="d-block w-100" alt="..." />
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

export default FirstCarousel
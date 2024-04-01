import React from 'react'

const Carousel = () => {
  return (
    <div >
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="http://womensbeautyoffers.com/wp-content/uploads/2019/03/holi_store_banner_pc_1500x300._CB1198675309_.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://images.freekaamaal.com/holi-images/holi_banner2.png" className="d-block w-100" alt="..." />
      </div>
      <div className="https://tse4.mm.bing.net/th?id=OIP.7TkZK53DL130mK0e4piNFgHaCe&pid=Api&P=0&h=180">
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
import React from 'react'

const FruitsAndVegetable = () => {
  return (
    <div style={{backgroundColor:"green", padding:"15px",display:"flex"}} >
        <h3 style={{paddingLeft:"10px"}}>Fruits And Vegetable</h3>
         <div className="card" style={{width: '18rem'}}>
  <img style={{height:"130px",width:"170px",marginLeft:"20px"}} src="https://tse2.mm.bing.net/th?id=OIP.PBIEHhmO8R0K7SJAkpmFawHaE9&pid=Api&P=0&h=180" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text"> the card's content.</p>
    <button className='btn btn-primary'>Add to Cart</button>
  </div>
  </div>
  <div className="card" style={{width: '18rem'}}>
  <img src="https://tse2.mm.bing.net/th?id=OIP.qgp-X3UXiQbw0nQfE1Q68AHaE8&pid=Api&P=0&h=180" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">ard's content.</p>
    <button className='btn btn-primary'>Add to Cart</button>
  </div>
  </div>
  <div className="card" style={{width: '18rem'}}>
  <img src="https://tse3.explicit.bing.net/th?id=OIP.gz3twi2m86TUZ-w-YSO3HgHaE8&pid=Api&P=0&h=180" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">k of the card's content.</p>
    <button className='btn btn-primary'>Add to Cart</button>
  </div>
  </div>
  <div className="card" style={{width: '18rem'}}>
  <img src="https://tse1.mm.bing.net/th?id=OIP.LOWX6FH0nnRdvscr5YDdDwHaFL&pid=Api&P=0&h=180" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">make up the bulk of the card's content.</p>
    <button className='btn btn-primary'>Add to Cart</button>
  </div>
  </div>

</div>
  )
}

export default FruitsAndVegetable
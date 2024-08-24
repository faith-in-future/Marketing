import React from 'react'

function Carousal() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{"objectFit" : "contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{"zIndex":"10"}}>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success"  type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active h-auto" style={{}}>
      <img src="https://media.istockphoto.com/id/1695499965/vector/business-development-financial-plan-and-strategy-analysis-finance-graph-and-market-chart.jpg?s=2048x2048&w=is&k=20&c=jIzYNeRueLzqFgMnRMhpDyIxMcmQGEnt-iVMuKGrn9I=" className="d-block w-100" style={{"filter" : "brightness(40%)"}} alt="..."/>
    </div>
    <div className="carousel-item h-auto" style={{"objectFit" : "contain !important"}}>
      <img src="https://media.istockphoto.com/id/1487894858/photo/candlestick-chart-and-data-of-financial-market.jpg?s=612x612&w=0&k=20&c=wZ6vVmbm4BV2JOePSnNNz-0aFVOJZ0P9nhdeOMGUg5I=" className="d-block w-100" style={{"filter" : "brightness(40%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1407983911/photo/forex-diagrams-and-stock-market-rising-lines-with-numbers.jpg?s=612x612&w=0&k=20&c=zas1h6LR6v2iCvE7SWnVoZ_s7ZSiboN45UK0d5oMWac=" className="d-block w-100" style={{"filter" : "brightness(40%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Carousal

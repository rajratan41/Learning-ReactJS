import { useState } from "react"


function Card({details}) {

  return (
    <div className="card" style= {{width: "18rem"}}>
  <img src= {details.picture?.large} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Name - {details.name?.first}</h5>
    <p className="card-text">Mobile no. -{details.phone}</p>
    <a href= "#" className="btn btn-primary">Click Me</a>
  </div>
</div>
  )
}

export default Card
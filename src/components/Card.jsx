import { useState } from "react"


function Card({name = "Kamal", imgUrl,  text, link, btn}) {

  return (
    <div className="card" style= {{width: "18rem"}}>
  <img src={imgUrl}className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{text}</p>
    <a href= {link} className="btn btn-primary">{btn}</a>
  </div>
</div>
  )
}

export default Card
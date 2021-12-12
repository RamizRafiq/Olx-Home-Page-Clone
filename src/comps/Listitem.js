import React, { useState } from "react"
import { Link } from "react-router-dom"
import image from '../images/car.jpg'
import "./Listitem.css"

function AddItem(props) {
  const img = {
    backgroundImage: image,
    background: "cover"
    // width:'100px'
  }
  // console.log(props.id)
  if ("placeholder" in props) {

    return (
      <Link to={`/car/${props.id}`}>
        <div className="add-Item">
          <div className={`poster`} >
            <img src={image} alt="" />

          </div>
          {/* <div className="title anim placeholder"/>
            <div className="tagline anim placeholder"/>
            <div className="ftr anim flex">
            <div className="location anim placeholder"/>
            <div className="stamp anim placeholder"/> */}
          <div className="card_data">
            <h1 className="price_tag">RS: 3400</h1>
            <p className="tagline">Apple Airpods pro master</p>

            <div className="locationDate">
              <p className="location">Location</p>
              <p className="date">Date</p>
            </div>

          </div>


          {/* </div> */}
        </div>
      </Link>
    )
  }
}


export default AddItem;
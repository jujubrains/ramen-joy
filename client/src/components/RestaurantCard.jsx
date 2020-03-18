import React from 'react'
import "../style/Restaurants.css";

export const RestaurantCard = (props) => {
  const { image_url, name, rating, price, location, phone, distance, categories } = props.restaurant;
  return (
    <div className="restaurant">
        <p className="rest-name">{name}</p>
        <div>{categories.map((category, index) => {
          const { title } = category
          return (
          <span className="category">{title} </span>
          )
        })}
        </div>
        <p className="rating">rating: {rating}</p>
        <p className="rating">{price}</p>
        <p>{location.address1}, {location.city}, {location.zip_code}, {location.state}</p>
        <p>{phone}</p>
        {/* <p>{distance} mi </p> */}
        <img src={image_url} alt=""/>
      </div>
  )
}
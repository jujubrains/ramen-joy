import React, {useContext, useEffect, useState} from 'react';
import axios from "axios"; 
import { getCurrentPosition } from "../utils/helperFunction"; 
import { RestaurantCard } from '../components/RestaurantCard';
import "../style/Search.css";
import "../style/Restaurants.css";

const Search = () => {
 const [searchResults, setSearchResults] = useState(); 

  useEffect(()=>{
    const fetchCoordinates = async (e) => {
      const { coords } = await getCurrentPosition();
      const { latitude, longitude } = coords;
      handleSearch(latitude, longitude); 
    };
    fetchCoordinates();
  },[])

  async function handleSearch(latitude, longitude){
    console.log(latitude, longitude); 
    console.log("sending search to api"); 
    const response = await axios.post(`/api/restaurant/yelp`,{
      lat: latitude,
      lng: longitude
    });
    const {data} = response; 
    setSearchResults(data);
}

const chunckArray = (arr, chunkCount) => {
  let chunks = [],
    i,
    j;
  for (i = 0, j = arr.length; i < j; i += chunkCount) {
    chunks.push(arr.slice(i, i + chunkCount));
  }
  return chunks;
};

const renderRestaurants = () => {
  const { businesses } = searchResults;
  const splitArray = chunckArray(businesses, 3);
  console.log(splitArray)
  return splitArray.map((row, key) => {
    return (
      <div className="row rest-row" key={key}>
        {row.map((restaurant, i) => {
          // console.log(pet)
          return (
            <div className="col-xs-12 col-lg-3" key={i}>
              <RestaurantCard key={i} restaurant={restaurant} />
            </div>
          );
        })}
      </div>
    );
  });
};

return ( 
  <div className="container">
    <div className="display-results">
    <h3 className="heading">Ramen restaurants near you</h3>
    { searchResults ? renderRestaurants() : "Hey! We are looking for ramen restaurants in your area!" }
    </div>
  </div>
 );
}
 
export default Search;
import React, {useContext, useEffect, useState} from 'react';
import axios from "axios"; 
import MediaCard from "../components/Card";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "../style/Search.css";
import { getCurrentPosition } from "../utils/helperFunction"; 

const Search = () => {
  
  const [search, setSearch] = useState(); 
  const [searchResults, setSearchResults] = useState(); 

  function handleInput(e){
    const input = e.target.value; 
    setSearch(input); 
  }

  const fetchCoordinates = async (e) => {
    e.preventDefault();
      const { coords } = await getCurrentPosition();
      const { latitude, longitude } = coords;

  handleSearch(latitude, longitude); 
};

  async function handleSearch(latitude, longitude){
   
    //e.preventDefault();
    console.log(latitude, longitude); 
    console.log("sending search to api"); 
    // console.log(search); 
    const response = await axios.post(`/api/restaurant/yelp`,{
      lat: latitude,
      lng: longitude
    });
    const {data} = response; 
    // console.log(data); 
    setSearchResults(data);
    console.log(searchResults);  
}

function renderRestaurants(){
    {console.log(searchResults)};
    // const {businesse
    return( 
      <Grid item sm={6} xs={12} spacing={3}>
        {
        searchResults.businesses.map((restaurant) =>{
          const { image_url, name} = restaurant; 
          return <MediaCard imageUrl={image_url} name={name}/>
        })
      }
      </Grid>
    ) 
  }
  return ( 
    <div>
      <form onSubmit={fetchCoordinates}> 
        <h1>Search Restaurants</h1>
        <input 
          name="searchRestaurants"
          type="text"
          onChange={handleInput}
        />
        <button type="submit" >Search</button>
      </form> 
      <div>Display Search results
      </div>
      { searchResults ? renderRestaurants() : "no books" }
    </div>
   );
}
 
export default Search;
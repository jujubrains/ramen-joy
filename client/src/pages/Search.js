import React, {useContext, useEffect, useState} from 'react';
import axios from "axios"; 
import MediaCard from "../components/Card";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const Search = () => {
  const [search, setSearch] = useState(); 
  const [searchResults, setSearchResults] = useState([]); 

  function handleInput(e){
    const input = e.target.value; 
    setSearch(input); 
  }

  async function handleSearch(e){
    e.preventDefault();
    console.log("sending search to api"); 
    console.log(search); 
    const response = await axios("/api/restaurant/yelp")
    const {data} = response; 
    console.log(data); 
    setSearchResults(data);
    renderRestaurants(); 
}
  function renderRestaurants(){

    return(
      <Grid item sm={6} xs={12} spacing={3}>
        {
        searchResults.map((restaurant) =>{
          const { image_url, name} = restaurant; 
          return <MediaCard imageUrl={image_url} name={name}/>
        })
      }
      </Grid>
    ) 
  }

  return ( 
    <div>
      <form onSubmit={handleSearch}> 
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
    </div>
   );
}
 
export default Search;
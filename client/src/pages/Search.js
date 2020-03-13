import React, {useContext, useEffect, useState} from 'react';
import axios from "axios"; 


const Search = () => {
  const [search, setSearch] = useState(); 
  const [searchResults, setSearchResults] = useState(); 

  function handleInput(e){
    const input = e.target.value; 
    setSearch(input); 
  }

  async function handleSearch(e){
    e.preventDefault();
    console.log("sending search to api"); 
    console.log(search); 
    const response = await axios("/api/restaurant/yelp")
    console.log(response.data); 
    
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
      <div>Display Search results</div>
    </div>
   );
}
 
export default Search;
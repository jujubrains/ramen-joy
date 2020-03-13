const db = require("../models"); 
const axios = require("axios"); 
require("dotenv").config(); 



module.exports = {
  searchRestaurants: 
    function(req, res){
      // const {lat, lng} = req.body
      let lat = "40.742953799999995";
      let lng = "-73.9900555";
      let radius = "1609";        
      const searchTerm = "ramen";
      axios({
        method: 'GET',
        url:`https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=${lat}&longitude=${lng}&radius=${radius}`,
        headers: { "Authorization": `bearer ${process.env.YELP_KEY}` }
       }).then(restaurants =>{
         res.json(restaurants.data)
       })
    }
}
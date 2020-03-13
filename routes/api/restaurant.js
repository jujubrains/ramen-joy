const router = require('express').Router();
const restaurantController = require('../../controllers/restaurantController'); 

router.route("/yelp")
  .get(restaurantController.searchRestaurants)

module.exports = router; 
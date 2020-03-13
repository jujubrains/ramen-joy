import React from "react";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="heading">Ramen Joy</h1>
      <h5 className="subheading">For the Love of Ramen!</h5>
      <div className="links">
        <ul>
          <li>About</li>
          <li>Restaurants</li>
          <li>Dating</li>
          <li>Recipes</li>
          <li>Info</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
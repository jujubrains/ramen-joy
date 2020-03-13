import React from "react";
import "../style/Home.css";
import Logo from "../images/ramenbowl.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1 className="heading">Ramen Joy</h1>
      <div className="logo">
      <img src={Logo} alt='logo' width="200" height="250" />
      </div>
      <h5 className="subheading">For the Love of Ramen!</h5>
      <div className="links">
        <ul>
        </ul>
      </div>
    </div>
  );
};

export default Home;
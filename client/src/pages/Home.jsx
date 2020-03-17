import React from "react";
import "../style/Home.css";
import Logo from "../images/ramen.png";

const Home = () => {
  return (
    <div className="wrapper">
      <h1 className="name">Ramen Joy</h1>
      <div className="logo">
        <img src={Logo}/>
      </div>
      <p className="slogan">for the love of ramen !</p>
    </div>
  );
};

export default Home;
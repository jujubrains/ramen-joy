import React from 'react';
import { Link } from "react-router-dom"; 
import "../style/Nav.css";

const Nav = () => {
  return (
    <div className="navBar">
    <ul className="navList">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/search">Restaurants</Link>
      <Link to="/Friends">Friends</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/info">Info</Link>
      <Link to="/contact">Contact</Link>
      </ul>
    </div>
    );
};

export default Nav;
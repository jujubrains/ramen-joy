import React from 'react';
import { Link } from "react-router-dom"; 
import "../style/Nav.css";

const Nav = () => {
  return (
    <div className="navBar">
    <ul className="navList">
      <Link to="/home">Home</Link>
      <Link to="/search">Restaurants</Link>
      <Link to="/friends">Friends</Link>
<<<<<<< HEAD
      <Link to="/recipes">Recipes</Link>
=======
      <Link to="/vids">Videos</Link>
>>>>>>> master
      <Link to="/info">Info</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      </ul>
    </div>
    );
};

export default Nav;
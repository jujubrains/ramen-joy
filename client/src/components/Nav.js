import React from 'react';
import { Link } from "react-router-dom"; 
import "../style/Nav.css";
import {useTodoContext} from "../utils/GlobalState";


const Nav = () => {

  const [state, dispatch] = useTodoContext();
  // console.log(state); 
  return (
    <div className="navBar">
    <ul className="navList">
      <Link to="/home">Home</Link>
      <Link to="/search">Restaurants</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/vids">Videos</Link>
      <Link to="/info">Info</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/messages">Messages</Link>
      {!localStorage.getItem("id")?  <Link to="/login">Login</Link> : <Link to="/Logout">Logout</Link>
 }
      </ul>
    </div>
    );
};

export default Nav;
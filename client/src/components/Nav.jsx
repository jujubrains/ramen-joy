import React from 'react';
import { Link } from "react-router-dom"; 
import "../style/Nav.css";
import {useTodoContext} from "../utils/GlobalState";


const Nav = () => {
  const [state, dispatch] = useTodoContext();
  console.log(state); 
  return (
    <div>
      <nav>
        <Link to="/home"><span>Home</span></Link>
        <Link to="/search"> <span>Restaurants</span></Link>
        <Link to="/friends"><span>Ramenuers</span></Link>
        <Link to="/friends"><span>Friends</span></Link>
        <Link to="/vids"><span>Videos</span></Link>
        <Link to="/info"><span>Facts</span></Link>
        <Link to="/register"><span>Register</span></Link>
        {!localStorage.getItem("id")?  <Link to="/login"><span>Login</span></Link> : <Link to="/Logout"><span>Logout</span></Link>}
      </nav> 
      {/* <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <Link to="/home"><span className="menu-item">Home</span></Link>
          <Link to="/search"> <span className="menu-item">Restaurants</span></Link>
          <Link to="/friends"><span className="menu-item">Ramenuers</span></Link>
          <Link to="/friends"><span className="menu-item">Friends</span></Link>
          <Link to="/vids"><span className="menu-item">Videos</span></Link>
          <Link to="/info"><span className="menu-item">Facts</span></Link>
          <Link to="/register"><span className="menu-item">Register</span></Link>
          {!localStorage.getItem("id")?  <Link to="/login"><span className="menu-item">Login</span></Link> : <Link to="/Logout"><span className="menu-item">Logout</span></Link>}
          </ul>
        </div>
      </nav> */}
    </div>
  )
};

export default Nav;
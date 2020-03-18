import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import "../style/Nav.css";
import {useTodoContext} from "../utils/GlobalState";

const Nav = () => {
  const [state, dispatch] = useTodoContext();
  console.log(state);
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light">
        <button type="button" className="navbar-toggler" onClick={handleMenuOpen}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={menuOpen ? "navbar-collapse show" : "navbar-collapse collapse"} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to ="/home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to ="/search" className="nav-link" onClick={() => setMenuOpen(false)}>Restaurants</Link>
            </li>
            <li className="nav-item">
              <Link to ="/users" className="nav-link" onClick={() => setMenuOpen(false)}>Rameneurs</Link>
            </li>
            <li className="nav-item">
              <Link to ="/friends" className="nav-link" onClick={() => setMenuOpen(false)}>Friends</Link>
            </li>
            <li className="nav-item">
              <Link to ="/vids" className="nav-link" onClick={() => setMenuOpen(false)}>Videos</Link>
            </li>
            <li className="nav-item">
              <Link to ="/info" className="nav-link" onClick={() => setMenuOpen(false)}>Facts</Link>
            </li>
            <li className="nav-item">
              <Link to ="/register" className="nav-link" onClick={() => setMenuOpen(false)}>Register</Link>
            </li>
            {!localStorage.getItem("id")?  
           <li className="nav-item">
           <Link to ="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link></li> : 
            <li className="nav-item">
            <Link to ="/home" className="nav-link" onClick={() => setMenuOpen(false)}>Logout</Link></li>}
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Nav;
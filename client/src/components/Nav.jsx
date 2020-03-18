import React, {useState} from 'react';
import { Link } from "react-router-dom"; 
import "../style/Nav.css";
import {useTodoContext} from "../utils/GlobalState";


const Nav = () => {
  const [state, dispatch] = useTodoContext();
  console.log(state); 
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
    console.log("clicked")
  }
  return (
    <div className="nav-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class={menuOpen ? 'menu-opened' : 'menu-closed'} type="button" onClick={handleMenuOpen} >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={menuOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbarNav">
          <ul class="navbar-nav">
            <Link to ="/home">
            <li class="nav-item" onClick={() => setMenuOpen(false)}>
              <a class="nav-link">Home</a>
            </li>
            </Link>
            <Link to ="/search">
              <li class="nav-item">
                <a class="nav-link">Restaurants</a>
              </li>
            </Link>
            <Link to ="/users">
              <li class="nav-item">
                <a class="nav-link">Rameneurs</a>
              </li>
            </Link>
            <Link to ="/friends">
              <li class="nav-item">
                <a class="nav-link">Friends</a>
              </li>
            </Link>
            <Link to ="/vids">
              <li class="nav-item">
                <a class="nav-link">Videos</a>
              </li>
            </Link>
            <Link to ="/info">
              <li class="nav-item">
                <a class="nav-link">Facts</a>
              </li>
            </Link>
            <Link to ="/register">
              <li class="nav-item">
                <a class="nav-link">Register</a>
              </li>
            </Link>
            {!localStorage.getItem("id")?  
           <Link to ="/login">
           <li class="nav-item">
             <a class="nav-link">Login</a>
           </li>
            </Link> : 
            <Link to ="/logout">
              <li class="nav-item">
                <a class="nav-link">Logout</a>
              </li>
            </Link>}
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Nav;
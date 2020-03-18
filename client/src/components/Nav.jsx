import React from 'react';
import { Link } from "react-router-dom"; 
import "../style/Nav.css";
import {useTodoContext} from "../utils/GlobalState";


const Nav = () => {
  const [state, dispatch] = useTodoContext();
  console.log(state); 
  return (
    <div className="nav-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <Link to ="/home">
            <li class="nav-item">
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
                <a class="nav-link">Ramenuers</a>
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
import React from 'react';
import { Link } from "react-router-dom"; 

const Nav = () => {
  return (
    <div>
      <Link to="/search">Search </Link>
      <Link to="/friends">Friends</Link>
    </div>
    );
}
 

export default Nav;
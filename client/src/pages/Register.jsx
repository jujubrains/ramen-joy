import React from "react";
import "../style/RegLog.css";
import Logo from "../images/ramen.png";

const Contact = () => {
  return (
    <div className="container form-container">
      <div className="row form-row">
        <div className="col register-form">
        <form className="register-form">
          <input 
            name="username"
            type="text"
            placeholder="username"
            className="form-input"
            />
          <input 
            name="email"
            type="text"
            placeholder="email"
            className="form-input"
            />
          <input
            name="password"
            type="text"
            placeholder="password"
            className="form-input"
            />
          <button className="form-btn">Submit</button>
        </form>
        <div className="logo">
          <img src={Logo}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

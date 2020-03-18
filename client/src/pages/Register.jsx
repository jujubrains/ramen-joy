import React, {useState} from "react";
import "../style/RegLog.css";
import axios from "axios"; 
import Logo from "../images/ramen.png";
import Axios from "axios";

const Contact = () => {
  const [usernameInput, setUsername] = useState();
  const [emailInput, setEmail] = useState();
  const [passwordInput, setPassword] = useState();

  function handleInput(e){
    if(e.target.name === "username"){
      const usernameInput = e.target.value; 
      setUsername(usernameInput);  
    } else if (e.target.name === "email") {
      const emailInput = e.target.value; 
      setEmail(emailInput); 
    } else {
      const passwordInput = e.target.value; 
      setPassword(passwordInput); 
    }
  }

  async function handleRegister(e) {
    e.preventDefault()
    const userRegister = {
      name: usernameInput,
      email: emailInput, 
      password: passwordInput
    }
    const registerResponse = await axios.post("/api/user/register", userRegister)
    console.log(userRegister)
  }

  return (
    <div className="container form-container">
      <div className="row form-row">
        <div className="col register-form">
        <form className="register-form" onSubmit={handleRegister}>
          <input
            onChange={handleInput}
            name="username"
            type="text"
            placeholder="username"
            className="form-input"
            />
          <input 
            onChange={handleInput}
            name="email"
            type="text"
            placeholder="email"
            className="form-input"
            />
          <input
            onChange={handleInput}
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

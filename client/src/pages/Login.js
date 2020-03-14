import React, {useState} from 'react';
import axios from "axios"; 
import {Route, Redirect, PublicHomePage} from "react"; 
import Friends from "./Friends"


const Login = () => {

  const [emailInput, setEmailInput] = useState();
  const [ password, setPassword] = useState(); 
  const [loggedIn, setLoggedIn] = useState(); 
  


  function handleInput(e){
    if(e.target.name === "login"){
      const email = e.target.value; 
      setEmailInput(email);  
    }else {
      const passwordInput = e.target.value; 
      setPassword(passwordInput); 
    }
    
  }

  async function handleLogin(e){
    e.preventDefault()
    const userLogin= {
      email: emailInput, 
      password: password
    }
    // console.log(userLogin); 
    const loginResponse = await axios.put("/api/user/login", userLogin); 
    console.log(loginResponse); 
    console.log(loginResponse.data.msg)
    if(loginResponse.data.msg === "You are logged in."){
      setLoggedIn(true);  
      console.log(loggedIn); 
    }
  }

  function rederict(){
    {console.log(loggedIn)};
    return(
      <div>
        friends
    {
     <Redirect to="/Friends" />
    }
    </div>
    )
  }


  return ( 
    <div>
      <form onSubmit={handleLogin}>
        <p>Login</p>
        <input 
           name="login"
           type="text"
           onChange={handleInput}
        />
        <input
         name="password"
         type="text"
         onChange={handleInput}
        />
        <button > Submit</button>
      </form>
      {
        
        loggedIn ? rederict() : "not loggen in"
      }
    </div>
   );
}
 
export default Login;
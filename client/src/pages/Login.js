import React, {useState} from 'react';
import axios from "axios"; 
import {Route, Redirect, PublicHomePage} from "react"; 
import Friends from "./Friends"
import {useTodoContext} from "../utils/GlobalState";


const Login = () => {

  const [emailInput, setEmailInput] = useState();
  const [ password, setPassword] = useState(); 
  const [loggedIn, setLoggedIn] = useState(); 
  

  const [state, dispatch] = useTodoContext();

  
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
      setLoggedIn(true)
      localStorage.setItem("id", loginResponse.data.user._id);
      console.log('loggen')
      dispatch({
        type:"loggedIn", 
        id: loginResponse.data.user._id,
        email: loginResponse.data.user.email,
        loggedIn: true
      })
    } 
  }
  function loginForm(){
    console.log('loginform')
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
    </div>

    )
  }

  function renderLoggedIn(){
    {console.log(loggedIn)};
    return(
      <div>
        you are logged in
    
    </div>
    )
  }

  console.log(state); 
  return ( 
    <div>
      {console.log(loggedIn)}
      {   
        loggedIn ? renderLoggedIn(): loginForm()
      }
    </div>
   );
}
 
export default Login;
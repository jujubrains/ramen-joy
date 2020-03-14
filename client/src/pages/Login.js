import React, {useState} from 'react';
import axios from "axios"; 


const Friends = () => {

  const [username, setUserName] = useState();
  const [ password, setPassword] = useState(); 
  const [login, setLogin] = useState(); 

  function handleInput(e){
    if(e.target.name === "login"){
      const loginInput = e.target.value; 
      setLogin(loginInput); 
    }else {
      const passwordInput = e.target.value; 
      setPassword(passwordInput); 
    }
    
  }

  async function handleLogin(e){
    e.preventDefault()
    const userLogin= {
      email: login, 
      password: password
    }
    const loginResponse = await axios.put("api/user/login", userLogin); 
    console.log(loginResponse); 

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
    </div>
   );
}
 
export default Friends;
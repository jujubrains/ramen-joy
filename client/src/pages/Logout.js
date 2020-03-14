import React from 'react';
import {useTodoContext} from "../utils/GlobalState";



const Logout = () => {

  const [state, dispatch] = useTodoContext();

  function handleSubmit(){
    const id = localStorage.getItem("id");
    console.log(id); 
    if(id){
      console.log("id is true"); 
      localStorage.setItem("id", "");
      dispatch({
        type:"loggedOut", 
        loggedIn: false
      })
    }
    console.log(state); 
    console.log("logged out")
  }
  return (
    <div>
      <button onClick={handleSubmit}>Logout</button>
    </div>
    );
}
 
export default Logout;
import React from 'react';
import "../style/Friends.css";
import {useTodoContext} from "../utils/GlobalState";



const Friends = () => {
  const [state, dispatch] = useTodoContext();
  console.log(state); 

  function renderFriends(){
    return (
      <div>friends list</div>
    )
  }



  return ( 
     <div className="friends">
      <div className="left">
        <h1>Ramen Friends</h1>
      </div>
      <div className="right">
        <p>
         Ramen Joy is an app for lovers of ramen. The app provides information on ramen, how to make ramen, where to find the best ramen in your area and who to eat it with.
        </p>
      </div>

      {state.loggedIn === true? "Log in to make Friends!": renderFriends()}
    </div>
  );
};
 
export default Friends;
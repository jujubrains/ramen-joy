import React, { useEffect, useState } from 'react';
import "../style/Friends.css";
import {useTodoContext} from "../utils/GlobalState";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import FriendCard from "../components/FriendCard";



const Friends = () => {

  const [state, dispatch] = useTodoContext();
  const [currentFriends, setCurrentFriends] = useState(
    {
      clicked: "notClicked"
  }); 


  useEffect(()=>{
    const id = localStorage.getItem("id")
    axios(`/api/user/findFriends/${id}`)
    .then(res =>{
      console.log(res);
      dispatch({
        type:"FRIENDS", 
        payload: res.data
      })
    })
  },[])

  useEffect(()=>{
    if(localStorage.getItem("id")){
      console.log('local storage heres')
      dispatch({
        type:"loggedIn"
      })
    }
  },[])


  function askToLogin(){
    return (
      <div>
        Log in 
      </div>
    )
  }



  function renderFriends(){
    console.log('renderfriends')
    return (state.friends.map((friend) =>{
      console.log(friend);
      const [_id] = friend.friends
      // console.log(_id)

      return <FriendCard id={ _id }/>
    })
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
      <div>
        {state.user.loggedIn ? renderFriends(): askToLogin()}
      </div>
    </div>
  );
};
 
export default Friends;


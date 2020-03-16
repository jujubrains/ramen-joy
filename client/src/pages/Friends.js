import React, { useEffect } from 'react';
import "../style/Friends.css";
import {useTodoContext, useState} from "../utils/GlobalState";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import FriendCard from "../components/FriendCard";



const Friends = () => {

  const [state, dispatch] = useTodoContext();
  
  // function renderUserFriends(){
  //   axios.get('api/user/')
  // }

  useEffect(()=>{
    axios.get("api/user/users")
    .then(res =>{
      console.log(res);
      dispatch({
        type:"FRIENDS", 
        payload: res.data
      })
    })
  },[])

  const addFriend = friendId => e => {
    console.log("adding the friend with id", friendId);
    const friends = axios.post('/api/user/addriend', friendId);
    console.log("adding friend")
    // console.log(state.friends)
    dispatch({
      type: "RENDERFRIENDS", 
      payload: friends
    })
    console.log(state); 
    // renderUserFriends()
  }


  // console.log(state); 


  function renderFriends(){
    console.log(state.friends); 
    return(
      <div>
        <Grid item sm={6} xs={12} spacing={3}>
          {
            state.friends.map((friends) =>{
              const {name, _id} = friends; 
              return <FriendCard addFriend={ addFriend(_id) } name={ name } id={ _id }/>
            })
          }
        </Grid>
      </div>
    )
  }

  function askToLogin(){
    return (
      <div>
        Log in 
      </div>
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
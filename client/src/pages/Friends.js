import React, { useEffect } from 'react';
import "../style/Friends.css";
import {useTodoContext, useState} from "../utils/GlobalState";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import MediaCard from "../components/Card";



const Friends = () => {

  const [state, dispatch] = useTodoContext();
  
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
  console.log(state); 


  function renderFriends(){
    console.log(state.friends); 
    return(
      <div>
        <Grid item sm={6} xs={12} spacing={3}>
          {
            state.friends.map((friends) =>{
              const {name} = friends; 
              return <MediaCard name={name}/>
            })
          }
        </Grid>
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
        {state.friends.length ? renderFriends(): "YOU HAVE NO FRIENDS LOSER"}
      </div>
    </div>
  );
};
 
export default Friends;
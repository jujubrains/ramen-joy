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
  const [users, setUsers] = useState(false);
  useEffect(()=>{
    const id = localStorage.getItem("id")
    // console.log(id)
    axios.get(`api/user/friends/${id}`)
    .then(res =>{
      console.log(res.data);
      dispatch({
        type:"RENDERFRIENDS", 
        payload: res.data[0].friends
      })
    })
  },[])
  useEffect(()=>{
    if(localStorage.getItem("id")){
      // console.log('local storage heres')
      dispatch({
        type:"loggedIn"
      })
    }
    console.log(state); 
  },[])
  async function addFriend(friendId, name){
    const _id = localStorage.getItem('id')
    const friend = {
      _id, 
      friendId,
    }
    const friends = await axios.post('/api/user/addFriend', friend);
    dispatch({
      type: "RENDERFRIENDS", 
      payload: friends
    })
    console.log(state); 
  }
  function renderFriends(){ 
    console.log(state)
    return state.friends.map(person=>{
      const {name} = person
      return <FriendCard name={name} addFriend={addFriend}/>
    })
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
        {state.user.loggedIn? renderFriends(): askToLogin()}
      </div>
    </div>
  );
};
export default Friends;
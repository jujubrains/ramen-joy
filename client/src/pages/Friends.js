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
    axios("/api/user/users")
    .then(res=>{
      dispatch({
        type:"RENDERALLUSERS", 
        payload: res.data
      })
    })
  },[])


  useEffect(()=>{
    // console.log('fid friend')
    const id = localStorage.getItem("id")
    axios.get(`api/user/users`)
    .then(res =>{
      // console.log(res);
      dispatch({
        type:"FRIENDS", 
        payload: res.data
      })
    })
  },[])

  useEffect(()=>{
    const id = localStorage.getItem("id")
    axios.get(`api/user/friends/${id}`)
    .then(res =>{
      // console.log(res);
      dispatch({
        type:"RENDERFRIENDS", 
        payload: res.data
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
  },[])

  async function addFriend(friendId, name){
    console.log("adding the friend with id", friendId, name);
    const _id = localStorage.getItem('id')
    console.log(friendId);
    const friend = {
      _id, 
      friendId,
      name
    }
    console.log(friend)
    const friends = await axios.post('/api/user/addFriend', friend);
    dispatch({
      type: "RENDERFRIENDS", 
      payload: friends
    })
    // console.log(state); 
    // renderUserFriends()
  }


  function findAllUsers(){
    console.log('hit user true')
    setUsers(true); 
  }

  function findFriends(){
    setCurrentFriends({clicked: "clicked"})
  }


  function renderFriends(){
    console.log('renderfriends')
    return (state.friends.map((friend) =>{
      //console.log(friend);
      const [_id] = friend.friends
      // console.log(friend.friends);
      // console.log(_id)

      return <FriendCard id={_id} addFriend={addFriend}/>
    })
    )
  }

  function renderFriendsButtons(){
    return(
      <div>  
          <button onClick={findAllUsers}>Find Friends</button>
          <button onClick={findFriends}>Current Friends</button>
      </div>
    )
  }

  function renderUsers(){
    console.log('render users hit')
    return (
    state.users.map((user) =>{
      const {name, email, _id} = user; 
      return <FriendCard addFriend={addFriend} email={email} name={ name } id={ _id }/>
     })
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
        {state.user.loggedIn ? renderFriendsButtons(): askToLogin()}
        {currentFriends.clicked==="clicked" ? renderFriends(): "no friends to be found" }
        {users ? renderUsers(): "no users to find"}
      </div>
    </div>
  );
};
 
export default Friends;

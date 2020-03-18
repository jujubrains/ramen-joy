import React, { useEffect, useState } from 'react';
import "../style/Friends.css";
import {useTodoContext} from "../utils/GlobalState";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Message from "../components/messageCard";



const Messages = () => {

  const [state, dispatch] = useTodoContext();
  const [ message, setMessage] = useState(false); 


  let userId
  if(localStorage.getItem('id')){
    userId = localStorage.getItem('id'); 
  }

  useEffect(()=>{
    axios("api/user/addFriend",message)
    .then(res =>{
      console.log(res)
    })

    dispatch({
      type: "MESSAGE",
      payload: message
    })
  },[])


  function addMessage(id, name, messageInput){
    setMessage( {
      idSender: userId, 
      idReciever: id, 
      receiverName: name, 
      messageInput
    }); 
  }

  function sendMessage(){
    console.log("sendform")
  }

  function addMessageForm(){
    return (
      <form onSubmit={sendMessage}>
        <input type="text" /> 
        <button>Submit</button> 
      </form>
    )
  }

  useEffect(()=>{
    const id = localStorage.getItem("id")
    axios.get(`api/user/friends/${id}`)
    .then(res =>{
      console.log(res);
      dispatch({
        type:"FRIENDS", 
        payload: res.data
      })
    })
    console.log(state)
    console.log(state.friends)
  },[])

  function renderMessagesCard(){
    console.log('renderfriends')
    return (state.friends.map((friend) =>{
      // console.log(friend);
      const [_id] = friend.friends
      // console.log(friend.friends);
      // console.log(_id)

      return <Message id={ _id } addMessage={addMessage}/>
    })
    )
  }

  return ( 
    <div>
       { state.friends ? renderMessagesCard(): ""}
        {message ? sendMessage() : ""}
    </div>
   );
}
 
export default Messages;
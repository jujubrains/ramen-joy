import React, { createContext, useReducer, useContext } from "react";

const TodoContext = createContext();

const { Provider } = TodoContext;

function reducer(state, action) {
  switch (action.type) {
  case "loggedIn":
    // console.log(action)
    return  {
      ...state, 
      user: {
        id: action.id,
        email: action.email,
        loggedIn: true
      }
    }
  case "loggedOut":
    return {
      ...state, 
      user:{
        id: action.id,
        email: action.email,
        loggedIn: false
      }
    }
  case "FRIENDS": 
    return {
      ...state, 
      friends: action.payload
    }
  case "RENDERFRIENDS":
    return {
      ...state, 
      friends: [...state.friends, action.payload]
    }
    case "RENDERALLUSERS":
      return {
        ...state,
        users: action.payload
      }
    case "MESSAGE": 
      return {
        ...state, 
        use: action.payload
      }
  default:
    return state;
  }
}

function TodoProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, {
    user: {
      id: "",
      email: "",
      loggedIn: false,
      messages: [{
        recieverId:"",
        sendingId: "", 
        messages: ""
      }]
    },
    friends: [],
    users: [
      {
        name:"",
        email:"",
        id:""
      }
    ]
  }
);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useTodoContext() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodoContext };
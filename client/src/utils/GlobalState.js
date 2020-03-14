import React, { createContext, useReducer, useContext } from "react";

const TodoContext = createContext();

const { Provider } = TodoContext;

function reducer(state, action) {
  switch (action.type) {
  case "loggedIn":
    console.log(action)
    return  {
      id: action.id,
      email: action.email,
      loggedIn: true
     }
  case "loggedOut":
    return [{
      id: action.id,
      email: action.email,
      loggedIn: false
    }];
  default:
    return state;
  }
}

function TodoProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer,{
    id: "",
    email: "",
    loggedIn: false
  } );

  return <Provider value={[state, dispatch]} {...props} />;
}

function useTodoContext() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodoContext };
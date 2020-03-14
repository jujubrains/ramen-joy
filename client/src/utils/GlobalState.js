import React, { createContext, useReducer, useContext } from "react";

const TodoContext = createContext({
  id: "",
  email: "",
  loggedIn: false
});
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
  const [state, dispatch] = useReducer(reducer, []);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useTodoContext() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodoContext };
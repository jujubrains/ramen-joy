import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
import Login from "./pages/Login"
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Friends from "./pages/Friends"; 

function App() {
  return (
    <Router> 
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/","/login"]}>
            <Login/>
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/friends">
            <Friends />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

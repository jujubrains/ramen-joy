import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import About from "./pages/About"
import Search from "./pages/Search";
import Friends from "./pages/Friends"; 
import Recipes from "./pages/Recipes";
import Info from "./pages/Info"; 
import Contact from "./pages/Contact"; 
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router> 
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/","/home"]}>
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path = "/friends">
            <Friends />
          </Route>
          <Route exact path="/recipes">
            <Recipes />
           </Route>
           <Route exact path="/info">
            <Info />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/home"
import Navbar from "./componets/Navbar"
import Navbar2 from "./componets/Navbar2"

class App extends Component {
  render(){
    return (
      <Router>
        <Navbar>
          <Switch>
            <Route exact path={["/","/home"]}>
              <Home/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path={["/prayer"]}>
              {/* <Home/> */}
            </Route>
          </Switch>
          <Switch>
            <Route exact path={["/live"]}>
              {/* <Home/> */}
            </Route>
          </Switch>
        </Navbar>
        <Navbar2/>
      </Router>
  
      
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import Live from './pages/Live'
import Navbar from './componets/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/live"]}>
            <Live />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

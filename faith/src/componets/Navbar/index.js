import React from "react";
import "./style.css"
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <NavLink to="/home"
      style={{ 
        cursor: "pointer", 
        fontSize: "20px",
        color: "white",
        paddingRight: "8px"
      }}
      activeStyle={{
        fontWeight: "bold",
        color: "black"
      }}> Home
      </NavLink>

      <NavLink to="/live"
      style={{ 
        cursor: "pointer", 
        fontSize: "20px",
        color: "white",
        paddingRight: "8px"
      }}
      activeStyle={{
        fontWeight: "bold",
        color: "black"
      }}> Video
      </NavLink>
    </nav>
  );
}

export default NavBar;


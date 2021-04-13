import React from "react";
import "./style.css"
import { NavLink } from "react-router-dom";
import { Container, Item, Item2, Space } from "./container"




function NavBar() {
  return (
    <nav style={{ backgroundColor: "purple"}}
    className="navbar navbar-expand-lg navbar-dark">
      <Container>
        <Space></Space>
        <Item>
          <NavLink to="/home"
          style={{ cursor: "pointer", fontSize: "20px",color: "white", paddingRight: "8px" }}
          activeStyle={{ fontWeight: "bold", color: "black"}}> 
          Home
          </NavLink>
        </Item>
        
        <Item2>
          <NavLink to="/live"
          style={{ cursor: "pointer", fontSize: "20px",color: "white", paddingRight: "8px" }}
          activeStyle={{ fontWeight: "bold",color: "black"}}> 
          Video
          </NavLink>
        </Item2>
      </Container>
    </nav>
  );
}

export default NavBar;


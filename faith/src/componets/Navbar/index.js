import React from "react"
import "./style.css"
import { NavLink } from "react-router-dom";


function Navbar() {
    return(
      // making a nave bar that link home, prayer, live page
        <nav className="navbar">
          {/* facebook link */}
          <div className="fblink">
            <a href="https://www.facebook.com/groups/2046088029012282/" 
            target="_blank"
            style={{
              textDecoration: "none",
              color: "whitesmoke",
              fontSize: "small",
              marginTop: 0
            }}> 
              @Faith Tabernacle Family Life Center
            </a>
          </div>

          {/* home page link */}
          <div className="link1">
            <NavLink to="/home" 
              className="navlink"
              style={{
                color: "white",
                fontSize: "20px",
                textDecoration: "none"
              }}
                activeStyle={{
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "gold"
                }}> Home
            </NavLink>
          </div>
          {/* prayer page link */}
          <div className="link2">
            <NavLink to="/prayer" 
              className="navlink"
              style={{
                color: "white",
                fontSize: "20px",
                textDecoration: "none"
              }}
                activeStyle={{
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "gold"
                }}> Prayer
            </NavLink></div>
          {/* live page link */}
          <div className="link3">
            <NavLink to="/live" 
              className="navlink"
              style={{
                color: "white",
                fontSize: "20px",
                textDecoration: "none"
              }}
                activeStyle={{
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "gold"
                }}> Live
            </NavLink></div>
      </nav>
    )
};

export default Navbar;
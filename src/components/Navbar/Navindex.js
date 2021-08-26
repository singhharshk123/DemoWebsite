import React from "react";
// import {  Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from "../../Home";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
// import LogoDesign from "./LogoDesign";

const Navbar = () => {
  return (
    <>
         <Nav>
          <NavMenu className="textChar">
            <span to="logo" style={{ marginLeft: "1pc" }}>
                <img
                  src="logo.webp"
                  alt=""
                  style={{ width: 200, marginTop: -5, textAlign: "centre" }}
                />
            </span>
            <NavLink to="">
              <h5 style={{ marginLeft: "8pc" }}>HOME</h5>
            </NavLink>
            <span to="/aboutus">
              <h5 style={{ marginLeft: "2pc" , marginTop:"2pc" }}>ABOUT US</h5>
            </span>
            {/* <NavLink to="/.Services.js"> */}
            <NavLink to="/LogoDesign">
              {/* <a href="./Services.js\ "><h5 style={{marginLeft:'2pc'}}>SERVICES</h5></a> */}
              <h5 style={{ marginLeft: "2pc" }}>SERVICES</h5>
            </NavLink>
            <span to="/freelancers">
              <h5 style={{ marginLeft: "2pc", marginTop:"2pc" }}>FREELANCERS</h5>
            </span>
            <span to="/blog">
              <h5 style={{ marginLeft: "2pc", marginTop:"2pc" }}>BLOG</h5>
            </span>
            <span to="/tutorials">
              <h5 style={{ marginLeft: "2pc", marginTop:"2pc" }}>TUTORIAL</h5>
            </span>
            <span to="/contactus">
              <h5 style={{ marginLeft: "2pc", marginTop:"2pc" }}>CONTACT US</h5>
            </span>
            <span to="/login">
              <button
                style={{
                  position: "absolute",
                  height: "40px",
                  fontFamily: "Poppins",
                  color: "white",
                  textAlign: "center",
                   marginTop:"1pc",
                  background: "#828282",
                  borderRadius: "20px",
                  marginLeft: "4pc",
                }}
              >
                Log in/Sign up
              </button>
            </span>
          </NavMenu>
        </Nav>
      
    </>
  );
};

export default Navbar;

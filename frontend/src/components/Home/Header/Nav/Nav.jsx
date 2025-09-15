import { Link, NavLink } from "react-router-dom";
import NavContainer from "./Nav.module.css";
import React from "react";
const Nav = () => {
  return (
    <>
      <nav className={NavContainer.ContainerNav}>
        
        <ul>
        <Link to="/">  <li>Home</li></Link>
          <li>About Us </li>
         <Link to="/ourpacakge"> <li>Our Packages </li></Link>
          <li>Dashbord </li>
          <Link to="/booking"> <button>Booking</button></Link>
          {/* <NavLink to="cartPage" >    <i className="fa-solid fa-home"></i></NavLink> */}
        </ul>
      </nav>
    </>
  );
};

export default Nav;

import React, { useContext } from "react";
import "./Dashbord.css";
import { Link, NavLink } from "react-router-dom";
import Auth from "../../../store/ContextAuth/Auth";
import Login from "../../Login/Login";

const Dashbord = () => {


  const ctx = useContext(Auth)

  
  
  return (
    <>
    { ctx.login ?
      <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>TourAdmin</h2>
        <ul>
      <NavLink to="/" >    <li>
            <i className="fa-solid fa-home"></i> Home
          </li>
          </NavLink> 
          <NavLink to="/TotalBooking">
          <li>
            <i className="fa-solid fa-plane"></i> Bookings
          </li></NavLink>
          <Link to="/AddBooking">
            <li>
              <i className="fa-solid fa-add"></i> Add Booking
            </li>
          </Link>
        <NavLink to="/userBooking" > <li>
            <i className="fa-solid fa-user"></i> user
          </li>
          </NavLink> 
          <li>
            <i className="fa-solid fa-dollar-sign"></i> Revenue
          </li>
          <li>
            <i className="fa-solid fa-chart-line"></i> Analytics
          </li>
          <li>
            <button onClick={() => ctx.setLogin(false)}>Logout</button>
          </li>
        </ul>
      </div>

      <div className="cards"></div>
    </div> : <Login/>}
    </>
  );
};

export default Dashbord;

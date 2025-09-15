import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom';
// import Dashbord from "./components/Home/Dashbord/Dashbord";
// import Booking from "./components/Booking/Booking";
import Home from "./components/Home/Home";
import TableBooking from "./components/Home/TableBooking/TableBooking";
import AddBooking from "./components/Home/AddBooking/AddBooking";

import UpdateBooking from "./components/Home/Update/update";
import Booking from "./components/Booking/Booking";
import Dashbord from "./components/Home/Dashbord/Dashbord";
import UserBooking from "./components/UserBooking/UserBooking";
import Package from "./components/Ourpackge/Package";
import CartPage from "./components/CartPage/CartPage";
import { useState } from "react";
// import TotalDashbord from "./components/Home/Dashbord/TotalDashbord/TotalDashbord";

const App = () => {

  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/TotalBooking" element={<TableBooking />} />
          <Route path="/AddBooking" element={<AddBooking />} />
          <Route path="/updateBookings/:id" element={<UpdateBooking />} />
          <Route path="/userBooking" element={<UserBooking />} />
          <Route path="/ourpacakge" element={<Package />} />
          <Route path="/cartPage" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

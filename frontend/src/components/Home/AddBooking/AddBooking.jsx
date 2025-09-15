import React, { useState } from "react";
import Dashbord from "../Dashbord/Dashbord";
import "./AddBooking.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBooking = () => {
  const [time, settime] = useState("");
  const [people, setPeople] = useState("");
  const [location, setLocaltion] = useState("");
  const [qaarada, setQaarada] = useState("");
  const [price, setPrice] = useState("");
  const [qiimadhimis, setQiimadhimis] = useState("");
  const [image, setImage] = useState(null);

  const Navigate = useNavigate();

  const HandalData = async (e) => {
    e.preventDefault(); // prevent form reload

    const formData = new FormData();
    formData.append("time", time);
    formData.append("people", people);
    formData.append("location", location);
    formData.append("qaarada", qaarada);
    formData.append("price", price);
    formData.append("qiimadhimis", qiimadhimis);
    formData.append("img", image);

    try {
      await axios.post("http://localhost:9007/createBooking", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Success Register Booking");
      Navigate("/TotalBooking");
    } catch (err) {
      console.error(err);
      alert("Error while registering booking");
    }
  };

  return (
    <div className="add-booking-page">
      <Dashbord />
      <div className="form-container">
        <form className="booking-form" onSubmit={HandalData}>
          <input
            value={time}
            onChange={(e) => settime(e.target.value)}
            type="number"
            placeholder="Days of Journey"
          />
          <input
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            type="number"
            placeholder="Number of People"
          />
          <input
            value={location}
            onChange={(e) => setLocaltion(e.target.value)}
            type="text"
            placeholder="Country"
          />
          <input
            value={qaarada}
            onChange={(e) => setQaarada(e.target.value)}
            type="text"
            placeholder="Contact"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Price"
          />
          <input
            value={qiimadhimis}
            onChange={(e) => setQiimadhimis(e.target.value)}
            type="number"
            placeholder="Discount"
          />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" />
          <button type="submit" className="submit-btn">
            Add Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooking;

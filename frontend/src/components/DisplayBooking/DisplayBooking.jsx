import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../DisplayBooking/DisplayBooking.css";

const DisplayBooking = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:9007/readBooking");
      const bookings = await res.json();
      setData(bookings);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    cart.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    alert(`${item.location} added to cart!`);
  };

  return (
    <div className="display-container">
      {data.map((item, index) => (
        <div className="display" key={index}>
          <img src={`http://localhost:9007/iamges/${item.Bimage}`} alt={item.location} />
          <div className="content">
            <h3>{item.location}</h3>
            <p>📅 {item.time} days | 👥 {item.people} People</p>
            <p>Price: ${item.price} <span className="old-price">{item.qiimadhimis}</span></p>
            <button onClick={() => addToCart(item)}>Book now</button>
          </div>
        </div>
      ))}
      {/* <button onClick={() => navigate("/cart")} style={{ marginTop: "20px" }}>Go to Cart</button> */}
    </div>
  );
};

export default DisplayBooking;

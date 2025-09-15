import { useEffect, useState } from "react";
import Dashbord from "../Dashbord/Dashbord";
import "../TableBooking/TableBooking.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const TableBooking = () => {
  const [data, setData] = useState([]);
  const HandalData = () => {
    axios.get("http://localhost:9007/readBooking").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    HandalData();
  }, []);

  const HandalDelete = (id) => {
    axios.delete(`http://localhost:9007/deleteBooking/${id}`);
    alert("Sucess Delete");
    HandalData();
  };

  return (
    <div className="table-page">
      <Dashbord />
      <div className="table-wrapper">
        <h2 className="table-title">Booking List</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Days</th>
              <th>People</th>
              <th>Country</th>
              <th>Contact</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Action</th>
            </tr>
          </thead>
          {data.map((item, index) => {
            return (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`http://localhost:9007/iamges/${item.Bimage}`}
                      alt="Tour"
                      className="table-img"
                    />
                  </td>
                  <td>{item.time} days</td>
                  <td>{item.people} People</td>
                  <td>{item.location}</td>
                  <td>{item.qaarada}</td>
                  <td>${item.price}</td>
                  <td>${item.qiimadhimis}</td>
                  <td className="actions">
                    <NavLink to={`/updateBookings/${item._id}`}>
                      {" "}
                      <i className="fa-solid fa-pen-to-square edit-icon"></i>{" "}
                    </NavLink>
                    <i
                      onClick={() => HandalDelete(item._id)}
                      className="fa-solid fa-trash delete-icon"
                    ></i>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default TableBooking;

import React, { useEffect, useState } from 'react'
import "../UserBooking/UserBooking.css"
import Dashbord from '../Home/Dashbord/Dashbord'
import axios from 'axios'

const UserBooking = () => {
    const [data,setData]=useState([])

    const HandalReadDataUser=()=>{
        axios.get("http://localhost:9007/readUser").then((res)=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
        HandalReadDataUser()
    },[])

    const HandalDelete=(id)=>{
      axios.delete(`http://localhost:9007/deleteuser/${id}`)
      alert("Sucess Delete")
      HandalReadDataUser()

    }
  return (
    <div className="table-page">
      <Dashbord />
      <div className="table-wrapper">
        <h2 className="table-title">User List</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>#</th>
             
           
              <th>Name</th>
              <th>Phone</th>
              <th>Emal</th>
              <th>Country</th>
              {/* <th>price</th> */}
              <th>Number_Of_ticket</th>
             
              <th>Action</th>
            </tr>
          </thead>
          
          {
            data.map((item,index)=>{
                return(
                      <tbody>
                <tr>
                  <td>{index +1}</td>
                
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.location}</td>
                  {/* <td>200</td> */}
                  <td>{item.ticket}</td>
                  
                 
                  <td className="actions">
                    
                  
                     
                  
                    <i onClick={()=> HandalDelete(item._id)}
                    
                      className="fa-solid fa-trash delete-icon"
                    ></i>
                  </td>
                </tr>
              </tbody>
 
                )

            })
          } 
                       
        </table>
      </div>
    </div>
  )
}

export default UserBooking
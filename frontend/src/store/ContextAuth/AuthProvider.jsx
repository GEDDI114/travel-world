// import Auth
import { useState } from "react";
import React from "react";
import Auth from "./Auth";

const AuthProvider = (props) => {
  const [login, setLogin] = useState(false);

  const [ CurrentBooking, setCurrentBooking] = useState({Country:'Australia',Price :1000})

  const Countries = [
    {
      countries: 'Australia',
      OldPrice: 1000,
      Discount :  800,
      Content : 'Australia'
    },
    {
      countries: 'Egypt',
      OldPrice: 500,
      Discount :  300,
      Content : 'Africa'
    },
    {
      countries: 'Brazil',
      OldPrice: 1200,
      Discount : 1000,
      Content : 'North America'
    }
  ];

  const Admins = [
    {
      id: 1,
      name: "Maxamed jiwrow",
      email: "maxamedjiwrow@gmail.com",
      password: "jiirow12345",
    },
    {
      id: 2,
      name: "Maxamed Nuur",
      email: "maxamednuur@gmail.com",
      password: "cagey12345",
    },
    {
      id: 1,
      name: "Maxamed Muudey",
      email: "maxamed088@gmail.com",
      password: "12345678",
    },
    {
      id: 1,
      name: "Cabdiqani yacquub",
      email: "cabdiqaniyacquub@gmail.com",
      password: "cabdiqani12345",
    },
  ];

  const valueProvider = {
    login,
    setLogin,
    Admins,
    Countries,
    CurrentBooking,
    setCurrentBooking
  };

  return (
    <>
      <Auth.Provider value={valueProvider}>
        {props.children}
      </Auth.Provider>
    </>
  );
};

export default AuthProvider;

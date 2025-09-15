
// import Auth
import { useState } from 'react'
import React from 'react'
import Auth from './Auth'

const AuthProvider = (props) => {


    const [login, setLogin] = useState(false)

    const Admins = [
        {
            id : 1,
            name : 'Maxamed jiwrow',
            email : 'maxamedjiwrow@gmail.com',
            password : 'jiirow12345'
        },
        {
            id : 2,
            name : 'Maxamed Nuur',
            email : 'maxamednuur@gmail.com',
            password : 'cagey12345'
        },
        {
            id : 1,
            name : 'Maxamed Muudey',
            email : 'maxamedmuudey@gmail.com',
            password : 'muudey12345'
        },
        {
            id : 1,
            name : 'Cabdiqani yacquub',
            email : 'cabdiqaniyacquub@gmail.com',
            password : 'cabdiqani12345'
        } 
    ]

    const valueProvider = {
        login,
        setLogin,
        Admins
    }

  return (
    <>
        <Auth.Provider value={valueProvider}>
            {props.children}
        </Auth.Provider>
    </>
  )
}

export default AuthProvider
import React from "react";
import { Routes , Route , Navigate } from 'react-router-dom'


import Login from "../Screens/Login";
import Register from "../Screens/Register";



const Routing  =  () =>{


    return (

        <Routes>

            <Route path="/"  element={<Login/>} />
            <Route path="/login"  element={<Login/>} />
            <Route path="/register"  element={<Register/>} />
            <Route path="*"  element={ <Navigate to="/" replace={true} />
} />

        </Routes>

    )

}

export default Routing
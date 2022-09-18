import React from "react";
import { Routes , Route , Navigate } from 'react-router-dom'

import Home from "../Screens/Home";
import About from "../Screens/About";
import MyCart from '../Screens/MyCart'




const Routing  =  () =>{


    return (

        <Routes>

            <Route path="/"  element={<Home/>} />
            <Route path="/home"  element={<Home/>} />
            <Route path="/about"  element={<About/>} />
            <Route path="/mycart"  element={<MyCart/>} />
            <Route path="*"  element={ <Navigate to="/home" replace={true} />
} />

        </Routes>

    )

}

export default Routing
import React , {useState} from "react";


import Routing from "./Routing";
import AuthRoute from './AuthRoutes'
import Navbar from "../Navbar.js/Navbar";
import {useSelector} from 'react-redux'



function App() {


 


//  const [auth  , setAuth] =  useState(false)

const auth  =  useSelector((state) =>  state.Login.data &&
state.Login.data && typeof(state.Login.data.id) === 'string' &&
state.Login.data.id !== "" && 
state.Login.data.id !== "undefined" && 
state.Login.data.id !== null? 

true : false )
  return (
<>
{auth    ? 
<>
    <Navbar/>
<Routing/>
</>
 : 
<AuthRoute/>
}
</>


  );
}

export default App;

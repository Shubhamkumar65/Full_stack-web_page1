import React , {useState} from "react";

import { Provider } from "react-redux";
import store from "./Store/Store";

import FinalRouting from './Routing/FinalRouting'
import Navbar from "./Navbar.js/Navbar";
import { useSearchParams } from "react-router-dom";
import {useSelector} from 'react-redux'



function App() {


  store.subscribe(()=>{
    localStorage.setItem('reduxStore' , JSON.stringify(store.getState()));
  })
  console.log(store.getState())

//  const [auth  , setAuth] =  useState(false)

const auth  =  store.getState().Login.data &&
store.getState().Login.data && 
store.getState().Login.data.mobile !== "" && 
store.getState().Login.data.mobile !== "undefined" && 
store.getState().Login.data.mobile !== null? 
store.getState().Login.data.mobile : null
  return (
    
   <Provider store={store}>
    <FinalRouting/>

   </Provider>

  );
}

export default App;

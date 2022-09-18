import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

import {loginFunction} from  '../Actions/Actions'
import {cleanAuth} from '../Actions/ActionCreators'
import {useDispatch, useSelector} from 'react-redux'




const Login  =  () =>{
   const navigate =  useNavigate()
   const dispatch = useDispatch()


   const [inputs ,  setInputs] =  useState({
      email : "",
      password : ""
   })

   const e_msg =  useSelector((state)=> 
   state.Login.error && state.Login.error.msg && typeof(state.Login.error.msg) === 'string' ? state.Login.error.msg : null
   )

   useEffect(()=>{
      if(e_msg !== null)
      {
         alert(e_msg)
         dispatch(cleanAuth())
      }

   },[e_msg])

   const handleInputs  = (e) =>{
      setInputs({...inputs ,[e.target.name] : e.target.value})
   
   }




   const handleLogin  = () =>{
      console.log(inputs)
   //   var data  =  {mobile  : "9024112678"}
      dispatch(loginFunction(inputs))
   }



   return(
    <>

<div style={{display:"flex"  ,  justifyContent : "center" }}>
   <div style={{alignSelf:"center" , border:"1px solid gray" ,padding :2  ,marginTop:100 }}>
   <div style={{alignSelf:"center" , border:"1px solid gray" ,padding :30  , backgroundColor:"white" }}>
      <h5 style={{textAlign : "center"}}><i>Login Here</i></h5>
      <hr></hr>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={handleInputs}  value={inputs.email} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={handleInputs} value={inputs.password} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
  <button onClick={handleLogin} style={{width:"100%" , marginBottom:10}} class="btn btn-primary">Submit</button>
  <h6 style={{textAlign : "center"}}><i>Don't Have an Account <span onClick={()=>navigate('/register')} style={{color:"blue" , cursor:"pointer"}}>&nbsp;&nbsp;Register Here</span></i></h6>

  
   </div>
   </div>
</div>

    </>
   ) 

}

export default Login;
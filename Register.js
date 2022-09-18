import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { regFunction } from '../Actions/Actions'
import { useDispatch } from 'react-redux'




const Register  =  () =>{

   const navigate =  useNavigate()
   const dispatch =  useDispatch()


   const [values ,setValues] =  useState({
    name : "",
    email : "",
    password : "",
    mobile : "",
    address  :"",
    pincode : ""
   })

   const handleInputs  = (e) =>{

    setValues({...values , [e.target.name] : e.target.value})

   }

   const handleButton = () =>{
    dispatch(regFunction(values))
   }



   return(
      <div style={{display:"flex"  ,  justifyContent : "center" }}>
      <div style={{alignSelf:"center" , border:"1px solid gray" ,padding :2  ,marginTop:20 }}>
      <div style={{alignSelf:"center" , border:"1px solid gray" ,padding :30  , backgroundColor:"white" }}>
         <h5 style={{textAlign : "center"}}><i>Register Here</i></h5>
         <hr></hr>
     <div class="form-group">
       <label for="exampleInputEmail1">Full Name</label>
       <input type="text" name="name" value={values.name} onChange={handleInputs}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name" />
     </div>
     <div class="form-group">
       <label for="exampleInputEmail1">Email address</label>
       <input type="email" name="email" value={values.email} onChange={handleInputs} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
     </div>
     <div class="form-group">
       <label for="exampleInputEmail1">Mobile Number</label>
       <input type="text" name = "mobile" value={values.mobile} onChange={handleInputs}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile" />
     </div>
     <div class="form-group">
       <label for="exampleInputPassword1">Password</label>
       <input type="text" name="password" value={values.password} onChange={handleInputs} class="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
     </div>
     <div class="form-group">
       <label for="exampleInputPassword1">Address</label>
       <input type="text" name="address" value={values.address} onChange={handleInputs} class="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
     </div>
     <div class="form-group">
       <label for="exampleInputPassword1">Pincode</label>
       <input type="text" name="pincode" value={values.pincode} onChange={handleInputs} class="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
     </div>
     
     <button onClick={handleButton } style={{width:"100%" , marginBottom:10}} class="btn btn-primary">Submit</button>
     <h6 style={{textAlign : "center"}}><i>Already Have an Account <span onClick={()=>navigate('/login')} style={{color:"blue" , cursor:"pointer"}}>&nbsp;&nbsp;Login Here</span></i></h6>
   
     
      </div>
      </div>
      </div>
   ) 

}

export default Register;
import React from "react";

import {useDispatch , useSelector} from 'react-redux'

import {SetCountValue} from '../Actions/Actions'




const About  =  () =>{
    
    const dispatch =  useDispatch()

    const count  =  useSelector((state) => state.MyCount.count)

    const handleCount  = () =>{

dispatch(SetCountValue(count +1))
        
    }


return(
    <>
    <h1>This is About Comp.</h1>
    <button  onClick={handleCount} >Change Count </button>
    <h1>Value of count is : {count}</h1>
    </>
    
)


}

export default About
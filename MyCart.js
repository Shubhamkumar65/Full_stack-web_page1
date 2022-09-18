import React  from "react";
import {fetchCart} from '../Actions/Actions'
import {clearA2CMsg} from '../Actions/ActionCreators'
import {useDispatch , useSelector} from 'react-redux'
import { useEffect } from 'react';
import axios from "axios";
import { base_url } from "../Actions/Config";




const Home  = () =>{

    const dispatch = useDispatch()

    const pro_data  = useSelector((state)=> state.GetCart.data && Array.isArray(state.GetCart.data.data) && state.GetCart.data.data.length > 0 ? state.GetCart.data.data : [] )
    const uid = useSelector((state) => state.Login.data && state.Login.data.id ? state.Login.data.id : null)
    const msg = useSelector((state) => state.Cart.data && state.Login.data.msg && typeof(state.Cart.data.msg) === 'string'  ? state.Cart.data.msg : null)



useEffect(()=>{
        dispatch(fetchCart(uid))

        // if(msg !== null)
        // {
        //     alert(msg)
        //     dispatch(clearA2CMsg())
        // }
    },[msg])


    const handleRemove = (x) =>{

        axios.get(base_url + '/del-cart' , {params : {id : x}}).then((result)=>{
            
             alert(result.data.msg)
             console.log(result)
             dispatch(fetchCart(uid))
        }).catch((err)=>{
            alert(err.response.data.msg)
        })
    }

return(
    <>

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">Pro. Name</th>
      <th scope="col">Image</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {pro_data.map((row   , i)=>(
        <tr>
        <th scope="row">{i+1}</th>
        <th scope="row">{row.name}</th>
        <td><img src={row.image} style={{width:130 , height:100}} /></td>
        <td>{row.description}</td>
        <td>{row.price}</td>
        <td><button  onClick={()=>{handleRemove(row._id)}}>Remove</button></td>
      </tr> 
    ))}
   
    
  </tbody>
</table>
    
    
    </>
)

}


export default Home
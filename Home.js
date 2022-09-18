import React  from "react";
import {fetchProducts , addToCartFunction , fetchCart} from '../Actions/Actions'
import {clearA2CMsg} from '../Actions/ActionCreators'
import {useDispatch , useSelector} from 'react-redux'
import { useEffect } from 'react';




const Home  = () =>{

    const dispatch = useDispatch()

    const pro_data  = useSelector((state)=> state.Products.data && Array.isArray(state.Products.data) && state.Products.data.length > 0 ? state.Products.data : [] )
    const uid = useSelector((state) => state.Login.data && state.Login.data.id ? state.Login.data.id : null)
    const msg = useSelector((state) => state.Cart.data && state.Login.data.msg && typeof(state.Cart.data.msg) === 'string'  ? state.Cart.data.msg : null)

const handleAddToCart = (rd) =>{

    const p_data =  {
        name : rd.name,
        price : rd.price,
        description : rd.description,
        image : rd.image,
        user_id :  uid

    }

    dispatch(addToCartFunction(p_data))


}

useEffect(()=>{
        dispatch(fetchProducts())

        if(msg !== null)
        {
            alert(msg)
            dispatch(clearA2CMsg())
            dispatch(fetchCart(uid))
        }
    },[msg])

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
      <th scope="col">Add To Cart</th>
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
        <td><button onClick={()=>{handleAddToCart(row)}} class="btn btn-primary">Add to Cart</button>
</td>
      </tr> 
    ))}
   
    
  </tbody>
</table>
    
    
    </>
)

}


export default Home
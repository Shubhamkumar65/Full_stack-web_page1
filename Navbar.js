import React  , {useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import {logout} from '../Actions/ActionCreators'
import {useDispatch , useSelector} from 'react-redux'
import {fetchCart} from '../Actions/Actions'

import './Navbar.css'

const Navbar  =  () =>{

    const navigate  =  useNavigate()
    const dispatch  = useDispatch()

    const handleLogout  = () =>{
      dispatch(logout())
    }

    const uid = useSelector((state) => state.Login.data && state.Login.data.id ? state.Login.data.id : null)

    const c_count  =  useSelector((state) => state.GetCart.data.count !== 'undefined' ? state.GetCart.data.count   : 0 )

    useEffect(()=>{
      dispatch(fetchCart(uid))

    
  },[])

return(

    <>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class={`nav-item ${window.location.href.includes('home') ? 'active' : null}`}>
        <a class="nav-link" style={{cursor  : "pointer"}}  onClick={()=>{navigate('/home')}} >Home</a>
      </li>
      <li class={`nav-item ${window.location.href.includes('mycart') ? 'active' : null}`}>
        <a class="nav-link"  style={{cursor  : "pointer"}} onClick={()=>{navigate('/mycart')}}  >My Cart</a>
      </li>
      <li class={`nav-item ${window.location.href.includes('about') ? 'active' : null}`}>
        <a class="nav-link"  style={{cursor  : "pointer"}} onClick={()=>{navigate('/about')}}  >About</a>
      </li>
      {/* <li class={`nav-item ${window.location.href.includes('login') ? 'active' : null}`}>
        <a class="nav-link"  style={{cursor  : "pointer"}} onClick={()=>{navigate('/login')}}  >Login</a>
      </li>
      <li class={`nav-item ${window.location.href.includes('register') ? 'active' : null}`}>
        <a class="nav-link"  style={{cursor  : "pointer"}} onClick={()=>{navigate('/register')}}  >Register</a>
      </li>
     */}
    
    
    </ul>
    <div class="form-inline my-2 my-lg-0"  style={{marginRight:10}}>
    <i  onClick={()=>{navigate('/mycart')}} class="fa" style={{fontSize:'40px' ,cursor  : "pointer"}}>&#xf07a;</i>
<span class='badge badge-warning' id='lblCartCount'> {c_count} </span>
    </div>
    <div class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button onClick={handleLogout} class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
    </div>
  </div>
</nav>
    
    </>
)

}

export default Navbar
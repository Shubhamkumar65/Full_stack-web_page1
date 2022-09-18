import {combineReducers} from 'redux'
import MyCount from './Count'
import Login from './AuthReducer'
import Register from './Register'
import Products  from './Products'
import Cart from './Cart'
import GetCart from './CartData'



export default   combineReducers({
MyCount,Login , Register , Products , Cart , GetCart

})
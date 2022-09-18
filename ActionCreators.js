import { SET_COUNT } from './Types'
import { SET_LOGIN_LOADING , SET_LOGIN_SUCCESS , SET_LOGIN_FAILURE } from './Types'
import { SET_REG_LOADING , SET_REG_SUCCESS , SET_REG_FAILURE } from './Types'
import { LOGOUT , CLEAN_AUTH } from './Types'
import  {GET_ALL_PRODUCTS_LOADING , GET_ALL_PRODUCTS_SUCCESS ,GET_ALL_PRODUCTS_FAILURE} from './Types'
import  {ADD_TO_CART_LOADING , ADD_TO_CART_SUCCESS  ,ADD_TO_CART_FAILURE , CLEAR_A2C_MSG} from './Types'
import  {GET_CART_LOADING  ,GET_CART_SUCCESS  , GET_CART_FAILURE} from './Types'



export const setCount = (data) =>({
    type   : SET_COUNT,
    data
})

export const setLoginLoading  = () =>({
    type : SET_LOGIN_LOADING, 
 
})
export const setLoginSucess  = (data) =>({
    type : SET_LOGIN_SUCCESS , 
    data
})
export const setLoginFailure  = (error) =>({
    type : SET_LOGIN_FAILURE , 
    error
})


export const setRegLoading  = () =>({
    type : SET_REG_LOADING, 
 
})
export const setRegSucess  = (data) =>({
    type : SET_REG_SUCCESS , 
    data
})
export const setRegFailure  = (error) =>({
    type : SET_REG_FAILURE , 
    error
})


export const getProductsLoading  = () =>({
    type : GET_ALL_PRODUCTS_LOADING, 
 
})
export const getProductsSucess  = (data) =>({
    type : GET_ALL_PRODUCTS_SUCCESS , 
    data
})
export const getProductsFailure  = (error) =>({
    type : GET_ALL_PRODUCTS_FAILURE , 
    error
})


export const getCartLoading  = () =>({
    type : GET_CART_LOADING, 
 
})
export const getCartSucess  = (data) =>({
    type : GET_CART_SUCCESS , 
    data
})
export const getCartFailure  = (error) =>({
    type : GET_CART_FAILURE , 
    error
})



export const addToCartLoading  = () =>({
    type : ADD_TO_CART_LOADING, 
 
})
export const addToCartSucess  = (data) =>({
    type : ADD_TO_CART_SUCCESS , 
    data
})
export const addToCartFailure  = (error) =>({
    type : ADD_TO_CART_FAILURE , 
    error
})

export const logout  =  () =>({
    type : LOGOUT

})

export const clearA2CMsg  =  () =>({
    type : CLEAR_A2C_MSG

})


export const cleanAuth  =  () =>({
    type : CLEAN_AUTH

})


import {setCount  ,   logout} from './ActionCreators'
import {setLoginLoading , setLoginSucess , setLoginFailure} from './ActionCreators'
import {setRegLoading , setRegSucess ,setRegFailure} from './ActionCreators'
import {getProductsLoading  ,getProductsSucess , getProductsFailure} from './ActionCreators'
import {addToCartLoading  ,addToCartSucess  ,addToCartFailure} from './ActionCreators'
import {getCartLoading ,getCartSucess ,getCartFailure} from './ActionCreators'
import axios from 'axios'
import { base_url } from './Config'





export const SetCountValue =  (data) =>{

    return  (dispatch) =>{
        dispatch(setCount(data))
    }
}

export const loginFunction  =  (data) =>{
    return (dispatch) =>{
        dispatch(setLoginLoading())
        axios.post(base_url + '/login-user' , data).then((res)=>{
         dispatch(setLoginSucess(res.data))
        }).catch((err)=>{
            console.log(err)
            dispatch(setLoginFailure(err.response.data))
        })

    }
}

export const addToCartFunction  =  (data) =>{
    return (dispatch) =>{
        dispatch(addToCartLoading())
        axios.post(base_url + '/add-to-cart' , data).then((res)=>{
         dispatch(addToCartSucess(res.data))
        }).catch((err)=>{
            console.log(err)
            dispatch(addToCartFailure(err.response.data))
        })

    }
}


export const regFunction  =  (data) =>{
    return (dispatch) =>{
        dispatch(setRegLoading())
        axios.post(base_url + '/add-user' , data).then((res)=>{
         dispatch(setRegSucess(res.data))
        }).catch((err)=>{
            dispatch(setRegFailure(err.response.data))
        })

    }
}

export const fetchProducts  =  (data) =>{
    return (dispatch) =>{
        dispatch(getProductsLoading())
        axios.get(base_url + '/get-products' , data).then((res)=>{
         dispatch(getProductsSucess(res.data))
        }).catch((err)=>{
            dispatch(getProductsFailure(err.response.data))
        })

    }
}


export const fetchCart  =  (data) =>{
    return (dispatch) =>{
        dispatch(getCartLoading())
        axios.get(base_url + '/get-cart' , {params : {id : data}} ).then((res)=>{
         dispatch(getCartSucess(res.data))
        }).catch((err)=>{
            dispatch(getCartFailure(err.response.data))
        })

    }
}
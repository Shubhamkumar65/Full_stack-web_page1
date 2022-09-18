import {ADD_TO_CART_LOADING ,ADD_TO_CART_SUCCESS ,ADD_TO_CART_FAILURE , LOGOUT, CLEAR_A2C_MSG} from '../Actions/Types'

const Cart  =  (state , action) =>{

    if( typeof state ===  'undefined')
    {
        return {
            loading: false,
            data  : {},
            error : {}
        }
    }

    switch(action.type){
        case LOGOUT : 
        return {
            data : {},
            error : {},
            loading : false
        }
        case CLEAR_A2C_MSG : 
        return {
            data : {},
            error : {},
            loading : false
        }
       
        case ADD_TO_CART_LOADING : 
        return {
            loading : true,
            data :  {},
            error  :{}
        }
        case ADD_TO_CART_SUCCESS : 
        return {
            loading : false,
            data : action.data,
            error  : {}
        }
        case ADD_TO_CART_FAILURE : 
        return {
            loading : false,
            data : {},
            error  : action.error
        }
        default :
        return state


    }

}

export default Cart;
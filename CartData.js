import {GET_CART_LOADING ,GET_CART_SUCCESS ,GET_CART_FAILURE , LOGOUT} from '../Actions/Types'

const GetCart  =  (state , action) =>{

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
       
        case GET_CART_LOADING : 
        return {
            loading : true,
            data :  {},
            error  :{}
        }
        case GET_CART_SUCCESS : 
        return {
            loading : false,
            data : action.data,
            error  : {}
        }
        case GET_CART_FAILURE : 
        return {
            loading : false,
            data : {},
            error  : action.error
        }
        default :
        return state


    }

}

export default GetCart ;
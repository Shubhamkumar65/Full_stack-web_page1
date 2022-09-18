import {GET_ALL_PRODUCTS_LOADING ,GET_ALL_PRODUCTS_SUCCESS ,GET_ALL_PRODUCTS_FAILURE , LOGOUT} from '../Actions/Types'

const Products  =  (state , action) =>{

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
       
        case GET_ALL_PRODUCTS_LOADING : 
        return {
            loading : true,
            data :  {},
            error  :{}
        }
        case GET_ALL_PRODUCTS_SUCCESS : 
        return {
            loading : false,
            data : action.data,
            error  : {}
        }
        case GET_ALL_PRODUCTS_FAILURE : 
        return {
            loading : false,
            data : {},
            error  : action.error
        }
        default :
        return state


    }

}

export default Products;
import {SET_REG_LOADING , SET_REG_SUCCESS , SET_REG_FAILURE , LOGOUT } from '../Actions/Types'

const Register  =  (state , action) =>{

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
        case SET_REG_LOADING : 
        return {
            loading : true,
            data :  {},
            error  :{}
        }
        case SET_REG_SUCCESS : 
        return {
            loading : false,
            data : action.data,
            error  : {}
        }
        case SET_REG_FAILURE : 
        return {
            loading : false,
            data : {},
            error  : action.error
        }
        default :
        return state


    }

}

export default Register;
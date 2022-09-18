import {SET_LOGIN_LOADING , SET_LOGIN_SUCCESS , SET_LOGIN_FAILURE , LOGOUT, CLEAN_AUTH } from '../Actions/Types'

const Login  =  (state , action) =>{

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
        case CLEAN_AUTH : 
        return {
            data : {},
            error : {},
            loading : false
        }
        case SET_LOGIN_LOADING : 
        return {
            loading : true,
            data :  {},
            error  :{}
        }
        case SET_LOGIN_SUCCESS : 
        return {
            loading : false,
            data : action.data,
            error  : {}
        }
        case SET_LOGIN_FAILURE : 
        return {
            loading : false,
            data : {},
            error  : action.error
        }
        default :
        return state


    }

}

export default Login;
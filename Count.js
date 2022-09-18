import {SET_COUNT} from '../Actions/Types'

const MyCount  =  (state , action) =>{

    if( typeof state ===  'undefined')
    {
        return {
            count  : 0
        }
    }

    switch(action.type){
        case SET_COUNT : 
        return {
            count : action.data
        }
        default :
        return state


    }

}

export default MyCount;
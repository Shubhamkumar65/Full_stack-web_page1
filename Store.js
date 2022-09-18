import {  createStore ,  applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../Reducers/CombineReducer'
const enhancer  =  applyMiddleware(thunk)

const persistState =  localStorage.getItem('reduxStore') ? JSON.parse(localStorage.getItem('reduxStore')) : {};



const store  =  createStore(  rootReducer , persistState ,  enhancer )




export default store










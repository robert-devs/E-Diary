import * as api from '../api';
import {
  AUTH
} from '../constants/actionsTypes';

export const signin = (formData,navigate)=>async(dispatch) =>{
    try {
        navigate.push('/')
    } catch (error) {
        console.log(error)

    }
}
export const signup = (formData,navigate)=>async(dispatch) =>{
    try {
        

        navigate.push('/')
    } catch (error) {
        console.log(error)
    }
}
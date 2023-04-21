import * as api from '../api';
import {
  AUTH
} from '../constants/actionsTypes';

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        navigate('/');
    } catch (error) {
        // Handle the error appropriately, e.g. dispatch an error action or show an error message
        console.log(error);
    }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    console.log(error); // Added error handling for potential errors during sign-up
  }
};
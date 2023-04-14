import * as api from '../ap1';

//actions creator

export const getsPosts = () => async dispatch => {
  try {
    const {data} = await api.fetchPosts ();
    dispatch ({type: 'FETCH_ALL', payload: data});
  } catch (error) {
    console.log (error.message);
  }
};

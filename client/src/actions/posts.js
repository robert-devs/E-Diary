import * as api from '../api';
import {
  DELETE,
  UPDATE,
  CREATE,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  LIKE,
} from '../constants/actionsTypes';
//actions creator

export const getsPosts = (page) => async dispatch => {
  try {
    const { data } = await api.fetchPosts(page);
    console.log(data)
     dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
    console.log (error.message);
  }
};

export const getPostBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {data:{data}} = await api.fetchPostsBySearch(searchQuery);
    dispatch ({type: FETCH_BY_SEARCH, payload: data});
    
  } catch (error) {
    console.log (error.message);
  }
};

export const createPost = post => async dispatch => {
  try {
    const {data} = await api.createPost (post);
    dispatch ({type: CREATE, payload: data});
  } catch (error) {
    console.log (error);
  }
};

export const updatedPost = (id, post) => async dispatch => {
  try {
    const {data} = await api.updatePost (id, post);
    dispatch ({type: UPDATE, payload: data});
  } catch (error) {
    console.log (error);
  }
};

export const likePost = id => async dispatch => {
  try {
    const {data} = await api.likePost (id);
    dispatch ({type: LIKE, payload: data});
  } catch (error) {
    console.log (error);
  }
};

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost (id);
    dispatch ({type: DELETE, payload: id});
  } catch (error) {
    console.log (error);
  }
};
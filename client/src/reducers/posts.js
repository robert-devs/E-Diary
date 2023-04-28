import {
  CREATE,
  LIKE,
  FETCH_ALL,
  DELETE,
  UPDATE,
  FETCH_BY_SEARCH,
} from '../constants/actionsTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BY_SEARCH:
      return {...state,posts:action.payload}
    case DELETE:
      return state.filter (post => post._id !== action.payload);

    case UPDATE:
      return state.map (
        post => (post._id === action.payload._id ? action.payload : post)
      );
    case LIKE:
      return state.map (
        post => (post._id === action.payload._id ? action.payload : post)
      );

    case FETCH_ALL:
      return {...state,
        state:action.payload.data,
        currentPage:action.payload.currentPage,
        numberOfPages:action.payload.numberOfPages
      }

    case CREATE:
      return [...state, action.payload];

    default:
      return state;
  }
};

import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get (url);
export const createPost = nwePost => axios.post (url, nwePost);
export const updatePost = (id, updatedPost) =>
  axios.patch (`${url}/${id}`, updatedPost);

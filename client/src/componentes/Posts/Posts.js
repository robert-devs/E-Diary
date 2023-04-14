import React from 'react';
import Post from './post/Post';
import useStyles from './style';
import {useSelector} from 'react-redux';

const Posts = () => {
  const classes = useStyles ();
  const posts = useSelector (state => state.posts);

  console.log (posts);

  return (
    <div>
      <h1 className={classes}>Post</h1>
      <Post />
      <Post />

    </div>
  );
};

export default Posts;

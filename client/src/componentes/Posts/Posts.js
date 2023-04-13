import React from 'react'
import Post from './post/Post'
import useStyles from './style'


const Posts = () => {
  const classes  = useStyles()
  return (
    <>
        <h1>Post</h1>
        <Post/>
        <Post/>

    </>
  )
}

export default Posts
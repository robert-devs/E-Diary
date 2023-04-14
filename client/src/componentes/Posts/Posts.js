import React from 'react'
import Post from './post/Post'
import useStyles from './style'
import { useSelector } from 'react-redux'


const Posts = () => {
  const classes  = useStyles()
   const posts =  useSelector(()=>state.posts)
   
   console.log(posts);

  return (
    <>
        <h1>Post</h1>
        <Post/>
        <Post/>

    </>
  )
}

export default Posts
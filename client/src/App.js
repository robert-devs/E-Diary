import React, { useEffect, useState } from 'react'
import {Container,AppBar,Typography,Grow,Grid, GridListTile} from "@material-ui/core"
import memories from "./assets/memories.png"
import {useDispatch} from "react-redux"

import {getsPosts} from "./actions/posts"
import Posts from './componentes/Posts/Posts'
import Form from './componentes/Forms/Form'
import useStyles from './style'


const App = () => {
   const classes  = useStyles()
    const dispatch =  useDispatch()
    const [currentId ,setCurrentId ]= useState(null)

     useEffect(()=>{
      dispatch(getsPosts())

     },[dispatch])

  return (
      <>
    <Container maxwidth='lg'>
      <AppBar position ="static" color="inherit" className={classes.appBar}>
        <Typography className={classes.heading} variant="h2" align="center">
            Memories
        </Typography>
        <img src={memories} alt='memories' height="60px"  className={classes.image}/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid  container justifyContent='space-between' alignItems='stretch' spacing={4}>
            <Grid item xs={12} sm ={7}>
              <Posts setCurrentId = {setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm ={4}>
              <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
      </>
  );
}

export default App
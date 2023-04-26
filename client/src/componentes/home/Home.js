import {Container, Grid, Grow, Paper,TextField,Button} from '@material-ui/core';
import ChipInput from  "material-ui-chip-input"
import {useHistory,useLocation} from "react-router-dom"
import Posts from '../Posts/Posts';

import Form from '../Forms/Form';
import {useDispatch} from 'react-redux';

import React, {useEffect, useState} from 'react';
import {getsPosts} from '../../actions/posts';
import Paginate from '../pagination/Pagination';
 
function useQuery (){
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const [currentId, setCurrentId] = useState (null);
    // const classes = useStyles ();
  const dispatch = useDispatch ();
  const query = useQuery()
  const history = useHistory()

  useEffect (
    () => {
      dispatch (getsPosts ());
    },
    [currentId, dispatch]
  );
  return (
    <Grow in>
      <Container>
        <Grid
          //   className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper className="" elevation={6}>
              <Paginate/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;

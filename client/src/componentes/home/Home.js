import { Container, Grid, Grow, Paper, TextField, Button, AppBar } from '@material-ui/core';
import ChipInput from "material-ui-chip-input"
import { useNavigate, useLocation } from "react-router-dom";
import Posts from '../Posts/Posts';

import Form from '../Forms/Form';
import { useDispatch } from 'react-redux';

import React, {  useState } from 'react';
import {  getPostsBySearch } from '../../actions/posts';
import Paginate from '../pagination/Pagination';
import useStyles from "./styles"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");

  const [tags, setTags] = useState([]);
  const classes = useStyles();

  const dispatch = useDispatch();
  const query = useQuery()
  const navigate = useNavigate()

  const page = query.get("page") || 1
  const searchQuery = query.get("searchQuery")



   const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };
  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl" >
        <Grid
          className={classes.gridContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBarSearch} position='static' color='inherit'>
              <TextField
                name='search'
                variant='outlined'
                label="Search memories"
                fullWidth
                value={search}
                onKeyPress={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)} />
              <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
              <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>

            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            
               {(!searchQuery && !tags.length) && (
                <Paper className={classes.pagination} elevation={6}>
                  <Paginate page={page} />
                </Paper>
            )}
            
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
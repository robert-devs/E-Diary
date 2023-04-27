import React,{useEffect} from 'react'
import {Pagination,PaginationItem} from "@material-ui/lab"
import {useDispatch,useSelector} from "react-redux"

import { getsPosts } from '../../actions/posts';

import useStyles from './style';
import { Link } from 'react-router-dom';

const Paginate = ({page}) => {
   const classes = useStyles()
   const dispatch = useDispatch()
  const { numberOfPages } = useSelector((state) => state.posts);

   
  useEffect(() => {
    if (page) {
      dispatch(getsPosts(page));
    }
  }, [dispatch, page]);

   return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={ 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
      )}
    />
  );
};


export default Paginate
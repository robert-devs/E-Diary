import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { useParams,  Link } from 'react-router-dom';
import useStyles from './styles.js';
import { getPost} from '../../actions/posts.js';

const PostDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { post,  isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);


 

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="5em" />
      </Paper>
    );
  }


  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card} >
        <div className={classes.section} >
          <Typography variant="h3" component="h2"  >
            {post.title}
          </Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">
            {post.tags && post.tags.map((tag) => (
              <Link key={tag} to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                {` #${tag} `}
              </Link>
            ))}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={post.selectedFile }
            alt={post.title}
          />
        </div>
     
      </div>
    </Paper>
  );
};

export default PostDetail;

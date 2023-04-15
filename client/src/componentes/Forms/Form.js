import React, {useState, useEffect} from 'react';
import useStyles from './style';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createPost, updatedPost} from '../../actions/posts';
import {useSelector} from 'react-redux';

const Form = ({currentId, setCurrentId}) => {
  const post = useSelector (
    state =>
      currentId ? state.posts.find (message => message._id === currentId) : null
  );
  const dispatch = useDispatch ();
  const [postData, setPostData] = useState ({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  useEffect (
    () => {
      if (post) setPostData (post);
    },
    [post]
  );

  const classes = useStyles ();
  const handleSubmit = e => {
    e.preventDefault ();
    if (currentId) {
      dispatch (updatedPost (currentId, postData));
    } else {
      dispatch (createPost (postData));
    }
    clear ();
  };
  const clear = () => {
    setCurrentId (null);
    setPostData ({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >

        <Typography variant="h6">
          {currentId ? 'updating' : 'creating'} a Memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={e => setPostData ({...postData, creator: e.target.value})}
        />
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={e => setPostData ({...postData, title: e.target.value})}
        />
        ;
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={postData.message}
          onChange={e => setPostData ({...postData, message: e.target.value})}
        />
        ;
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={e =>
            setPostData ({...postData, tags: e.target.value.split (',')})}
        />
        ;
        <div className={`${classes.fileInput} `}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) =>
              setPostData ({...postData, selectedFile: base64})}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          clear{' '}
        </Button>

      </form>

    </Paper>
  );
};

export default Form;

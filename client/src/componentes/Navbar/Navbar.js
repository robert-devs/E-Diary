import React, {useState} from 'react';
import {AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';

import useStyles from './styles';
import {Link, } from 'react-router-dom';
import memories from '../../assets/memories.png';
import {useDispatch} from 'react-redux';

const Navbar = () => {
  const classes = useStyles ();
  const dispatch = useDispatch ();
  
  const [user, setUser] = useState (
    JSON.parse (localStorage.getItem ('profile'))
  );
  const logout = () => {
    dispatch ({action: 'LOGOUT'});
    // navigate ('/auth');
  };

  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <div className={classes.brandContainer}>

        <Typography
          element={Link}
          href="/home"
          className={classes.heading}
          variant="h2"
           cursor='pointer'
          align="center"
        >
          Memories
        </Typography>
        <img
          src={memories}
          alt="memories"
          height="60px"
          className={classes.image}
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user
          ? <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
              <Typography classes={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
              <Button
                className={classes.logout}
                color="secondary"
                variant="contained"
                onClick={logout}
              >
                logout
              </Button>
            </div>
          : <Button
              element={Link}
              href="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

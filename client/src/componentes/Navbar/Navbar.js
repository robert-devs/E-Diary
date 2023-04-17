import React from 'react';
import {AppBar, Avatar, Toolbar, Typography} from '@material-ui/core';

import useStyles from './styles';
import {Link} from 'react-router-dom';
import {Button} from 'bootstrap';
import memories from '../../assets/memories.png';

const Navbar = () => {
  const classes = useStyles ();
  const user = null;
  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <div className={classes.brandContainer}>

        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
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
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageU}
              >
                {user.result.name.charAt (0)}
              </Avatar>
              <Typography classes={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
              <Button
                className={classes.logout}
                color="secondary"
                variant="contained"
              >
                logout
              </Button>
            </div>
          : <>
              <Button
                  component={Link}
                  to="/auth"
                  variant="contained"
                  color="primary"
                >
                  Sign In
                </Button>
          </>}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

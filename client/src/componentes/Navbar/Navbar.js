import React, { useEffect, useState, useCallback } from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import memories from '../../assets/memories.png';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
  const logout = useCallback(() => {
    dispatch({ type: 'LOGOUT' });
    navigate ('/auth');
    setUser(null)
  }, [dispatch, navigate]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [navigate, logout]);

  console.log(user?.user);

  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <div className={classes.brandContainer}>
        <Typography
          element={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          cursor="pointer"
          align="center"
        >
          Memories
        </Typography>
        <img src={memories} alt="memories" height="60px" className={classes.image} />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.user?._id ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.user?.name} src={user?.user?.imageUrl}>
              {user?.user?.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.user?.name}
            </Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <Button element={Link} to="/auth" variant="contained" color="primary">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

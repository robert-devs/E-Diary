import React, { useEffect, useState, useCallback } from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import memoriesText from '../../assets/memories-Text.png';
import memoriesLogo from "../../assets/memories-Logo.png"
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
  }, [navigate,user, logout]);

  // console.log(user?.user);

  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <Link to ="/" className={classes.brandContainer}>
       
        <img src ={memoriesText} alt="icon" height="45px" />
        <img src={memoriesLogo} alt="memories" height="40px" className={classes.image} />
      </Link>
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
          <Button element={Link} href="/auth" variant="contained" color="primary">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
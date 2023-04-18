import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Input from './Input';
import useStyle from './styles';

const Auth = () => {
  const classes = useStyle ();
  const isSignUp = true;
   const handleSubmit =()=>{}
   const handleChange = ()=>{}
    const [showPassword,setShowPassword] = useState(false)

    const handleShowPassword = ()=>{
      setShowPassword((prevShowPassword)=>!prevShowPassword)
    }

  return (
    <Container component="main" maxwidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          {isSignUp ? 'sign Up' : 'sign In'}
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {
                isSignUp && (
                  <>
                    

                        <Input name='firstName' label="firstName" handleChange={handleChange}  half/>
                        <Input name='firstName' label="firstName" handleChange={handleChange}  half/>
                    
                  </>
                )
              }
              <Input name="email" label="email Address" handleChange={handleChange} type="email"/>
              <Input name="password" label="password" handleChange={handleChange} type={showPassword ?"text":"password"} handleShowPassword={handleShowPassword}/>
              {
                isSignUp && <Input name="confirmPassword" label="Repeat Passord" handleChange={handleChange} type="password"/>
              }
            </Grid>
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
              {
                isSignUp ?"Sign Up":"Sign In"
              }
            </Button>
          </form> 
        </Typography>
      </Paper>
    </Container>
  );
};

export default Auth;

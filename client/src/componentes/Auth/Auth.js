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
import {GoogleLogin} from "react-google-login"
import Input from './Input';
 import Icon from "./icon"
import useStyle from './styles';

const Auth = () => {
  const classes = useStyle ();
 
  const [showPassword,setShowPassword] = useState(false)
  const[isSignUp,setIsSignUp ]=useState(false)
  const handleChange = ()=>{}
  const handleSubmit =()=>{}
   const googleSuccess = async (res)=>{
   console.log(res)
   
   }
   const googleFailure =(error)=>{
    console.log(error)
    
    console.log("google sign in failed")
    
   }
     
     const switchMode =()=>{
      setIsSignUp((prevIsSignUp)=>!prevIsSignUp)
     }
    const handleShowPassword = ()=>{
      setShowPassword((prevShowPassword)=>!prevShowPassword)
      handleShowPassword(false)
    }

  return (
    <Container component="main" maxwidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" align='center'>
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

            <GoogleLogin clientId='579933376445-bar6rlabp4sma6hteder5dcg305tk8eq.apps.googleusercontent.com' render={(renderProps)=>(
              <Button 
              className={classes.googleButton}
               color="primary"
                fullWidth 
                onClick={renderProps.onClick} 
                disabled ={renderProps.disabled}  
                variant='contained' 
                startIcon={<Icon/>}>Google Sign In</Button>
              )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                 cookiePolicy='single_host_origin'
              />
            <Grid container justifyContent='flex-end' >
              <Grid item >
                <Button onClick={switchMode}>
                  {
                    isSignUp? "Aready have an account? sign in":"Dont have an account? Sign up"
                  }
                </Button>
              </Grid>

              
            </Grid>
          </form> 
        </Typography>
      </Paper>
    </Container>
  );
};

export default Auth;

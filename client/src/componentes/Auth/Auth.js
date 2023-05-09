import Input from "./Input";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import React, { useState } from "react";
import useStyle from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  
} from '@material-ui/core';
 import {signIn,signUp} from "../../actions/auth"


 const initialState  ={
   firstName:"",
   lastName:"",
   password:"",
   confirmPassword:""
 }

const Auth = () => {
  const navigate = useNavigate()
  const dispatch =  useDispatch()
  const classes = useStyle ();

  
 
  const [showPassword,setShowPassword] = useState(false)
  const[isSignUp,setIsSignUp ]=useState(false)
  const [formData,setFormData] =useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signUp(formData, navigate));
    } else {
      dispatch(signIn(formData, navigate));
    }
  };
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }


     
  const switchMode =()=>{
      setIsSignUp((prevIsSignUp)=>!prevIsSignUp)
      setShowPassword(false)
     }
  const handleShowPassword = ()=>{
      setShowPassword((prevShowPassword)=>!prevShowPassword)
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
                    

                        <Input name='firstName' label="First Name" handleChange={handleChange}  half/>
                        <Input name='lastName' label="Last Name" handleChange={handleChange}  half/>
                    
                  </>
                )
              }
              <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
              <Input name="password" label="password" handleChange={handleChange} type={showPassword ?"text":"password"} handleShowPassword={handleShowPassword}/>
              {
                isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>
              }
            </Grid>
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
              {
                isSignUp ?"Sign Up":"Sign In"
              }
            </Button>

            <Grid container justifyContent='flex-end' >
              <Grid item >
                <Button onClick={switchMode}>
                  {
                    isSignUp? "Already have an account? sign in":"Don't have an account? Sign up"
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

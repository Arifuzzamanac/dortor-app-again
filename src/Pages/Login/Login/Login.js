import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, authError, isLoading } = useAuth();

  const handleonBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData }
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  }

  const handleLogin = e => {
    loginUser(loginData.email, loginData.password)
    e.preventDefault();
  }
  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 8 }} item xs={8}>
            <Typography variant="h3" gutterBottom component="div">
              Login
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Email"
                type="email"
                name="email"
                onBlur={handleonBlur}
                variant="standard" />
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleonBlur}
                variant="standard" />
              <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">
                Login
              </Button>
              <NavLink style={{ textDecoration: 'none' }} to="/register">
                <Button sx={{ width: '75%', m: 1 }} variant="text" type="submit">
                  New In Here! Please Register
                </Button>
              </NavLink>
              {isLoading && <CircularProgress />}
              {user?.email && <Alert severity="success">User Created Successfully !</Alert>
              }
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
          </Grid>
          <Grid item xs={4}>
            <img style={{ width: '100%', marginTop: 10 }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
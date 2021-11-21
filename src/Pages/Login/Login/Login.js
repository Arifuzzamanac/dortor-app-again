import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation'


const Login = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnchange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newloginData = { ...loginData };
    newloginData[field] = value;
    setLoginData(newloginData);
  };

  const handleLoginSubmit = e => {
    alert('loged in')
    e.preventDefault();
  }

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ marginTop: 10, textAlign: 'center' }} item xs={12} md={6}>
            <Typography variant="h6">Login</Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Email"
                type="email"
                name="email"
                onBlur={handleOnchange}
                variant="standard" />
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnchange}
                variant="standard" />
              <Button sx={{ width: '75%', m: 1, textTransform: 'capitalize' }} variant="contained" type="submit">Login</Button>
              <NavLink style={{ textDecoration: 'none' }} to="/register">
                <Button sx={{ width: '75%', m: 1, textTransform: 'capitalize' }} variant="text" type="submit">New In Here! Please Create Your Account</Button>
              </NavLink>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: '90%', height: '550px', marginTop: 5 }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
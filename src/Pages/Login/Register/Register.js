import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import register from '../../../images/login.png';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';


const Register = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnchange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newloginData = { ...loginData };
    newloginData[field] = value;
    setLoginData(newloginData);
  };

  const handleLoginSubmit = e => {
    if (loginData.password1 !== loginData.password2) {
      alert('your password did not mathch')
      return
    }
    e.preventDefault();
  }

  return (
    <>
    <Navigation></Navigation>
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ marginTop: 10, textAlign: 'center' }} item xs={12} md={6}>
          <Typography variant="h6">Create Your Account</Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Name"
              type="text"
              name="name"
              onBlur={handleOnchange}
              variant="standard" />
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
              name="passwrd1"
              label="Password"
              type="password"
              onBlur={handleOnchange}
              variant="standard" />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Retype Your Password"
              type="password"
              name="password2"
              onBlur={handleOnchange}
              variant="standard" />
            <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Login</Button>
            <NavLink style={{ textDecoration: 'none', textTransform: 'capitalize' }} to="/login">
              <Button sx={{ width: '75%', m: 1, textTransform: 'capitalize' }} variant="text" type="submit">Already Have An Account ! Log in</Button>
            </NavLink>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '90%', height: '550px', marginTop: 5 }} src={register} alt="" />
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default Register;
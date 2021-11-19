import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';

const bannerBg = {
  background: `url(${bg})`
};

const varticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 450
}

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item xs={12} md={6} style={varticalCenter}>
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography variant="body1" sx={{ my: 4, marginRight: 20 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laborum at, doloremque aut officia possimus recusandae eligendi ipsum quaerat iste?
            </Typography>
            <Button sx={{ textTransform: 'capitalize' }} variant="contained">Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={varticalCenter}>
          <img style={{ width: 400 }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
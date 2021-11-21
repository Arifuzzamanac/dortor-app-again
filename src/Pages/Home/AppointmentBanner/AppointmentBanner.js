import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Box } from '@mui/system';

const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: 'rgba(61, 69, 88, 1)',
  backgroundBlendMode: 'darken, luminosity',
  marginTop: 150
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: '-110px' }}
            src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography sx={{ color: 'blue', my: 3 }} variant="h6">Appointment</Typography>
            <Typography sx={{ color: 'white' }} variant="h4">Make an appointment today</Typography>
            <Typography sx={{ color: 'white', my: 3 }} variant="body1">Make your desired service appointment on your favoirte doctor easyly.Make your desired service appointment on your favoirte doctor easyly.</Typography>
            <Button variant="contained" sx={{ textTransform: 'capitalize' }}>Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
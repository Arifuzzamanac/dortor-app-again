import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import Calendar from '../../Shared/Calendar/Calendar';


const AppointmentHeader = ({ date, setDate }) => {

  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={2}>
        <Grid Item xs={12} md={6}>
          <Calendar date={date} setDate={setDate}></Calendar>
        </Grid>
        <Grid Item xs={12} md={6}>
          <img style={{ width: '90%', marginTop: 20 }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentHeader;
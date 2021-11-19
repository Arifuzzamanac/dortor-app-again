import { Grid, Typography, Button, Paper } from '@mui/material';
import React from 'react';

const Bookings = ({ book }) => {
  const { title, time, space } = book;
  return (
    <Grid item xs={12} md={4}>

      <Paper elevation={3} sx={{ textAlign: 'center', py: 5 }}>

        <Typography sx={{ color: 'info.main' }} variant="h5">{title}</Typography>
        <Typography variant="h6">{time}</Typography>
        <Typography variant="caption" display="block" gutterBottom>{space} Available Now</Typography>
        <Button variant="contained">Book {title}</Button>
      </Paper>
    </Grid>
  );
};

export default Bookings;
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Bookings from '../Bookings/Bookings';

const bookings = [
  { id: 1, title: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', space: '10 Space Availbale' },
  { id: 2, title: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', space: '8 Space Availbale' },
  { id: 3, title: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', space: '5 Space Availbale' },
  { id: 4, title: 'Cavity Protection', time: '8:00 AM - 9:00 AM', space: '11 Space Availbale' },
  { id: 5, title: 'Teeth Cleaning', time: '8:00 AM - 9:00 AM', space: '12 Space Availbale' },
  { id: 6, title: 'Cosmetic Dentistry', time: '8:00 AM - 9:00 AM', space: '50 Space Availbale' }
]

const Availappointment = ({ date }) => {
  return (
    <Container>
      <Typography sx={{ textAlign: 'center', color: 'info.main', my: 5 }} variant="h3">Available appointment on {date.toDateString()}</Typography>
      <Grid container spacing={2}>
        {
          bookings.map(book => <Bookings
            key={book.id}
            book={book}
          ></Bookings>)
        }
      </Grid>
    </Container>
  );
};

export default Availappointment;
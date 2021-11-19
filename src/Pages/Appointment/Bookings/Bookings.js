import { Grid, Typography, Button, Paper } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({ book, date }) => {
  const { title, time, space } = book;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ textAlign: 'center', py: 5 }}>
          <Typography sx={{ color: 'info.main' }} variant="h5">{title}</Typography>
          <Typography variant="h6">{time}</Typography>
          <Typography variant="caption" display="block" gutterBottom>{space} Available Now</Typography>
          <Button onClick={handleBookingOpen} variant="contained">Book {title}</Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        book={book}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
      ></BookingModal>
    </>
  );
};

export default Bookings;
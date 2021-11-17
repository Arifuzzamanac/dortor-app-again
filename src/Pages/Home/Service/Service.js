import { CardMedia, Grid, Typography, Card, CardContent } from '@mui/material';
import React from 'react';

const Service = ({ service }) => {
  const { img, title, desciption } = service;

  return (
    <Grid item xs={4} sm={4} md={4} sx={{ textAlign: 'center' }}>
      <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{ width: 'auto', height: '80px', margin: '0 auto' }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography>{title}</Typography>
          <Typography>{desciption}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
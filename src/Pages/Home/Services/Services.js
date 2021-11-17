import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import { Container } from '@mui/material';
import floride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
  { img: floride, title: 'Floride Treatment', desciption: 'Floride treatment is the best way remove unwanted thing from your teeth and meke healthy and clean teeth ' },
  { img: cavity, title: 'Cavity Filling', desciption: 'Cavity filling treatment is the best way remove unwanted thing from your teeth and meke healthy and clean teeth ' },
  { img: whitening, title: 'Teath Whitening', desciption: 'Teath whitening treatment is the best way remove unwanted thing from your teeth and meke healthy and clean teeth ' }
]

const Services = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            services.map(service => <Service
              key={service.title}
              service={service}
            ></Service>)
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
import React from 'react';

import { Grid } from '@material-ui/core';
import Movies from './movies/MovieList';
import './pages.css';

const FirstPage = () => (
  <Grid container className="container">
    <Grid className="title">Children&apos;s cartoons</Grid>
    <Movies />
  </Grid>
);

export default FirstPage;

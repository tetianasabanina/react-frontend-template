import React from 'react';
import {
	Card,
	CardActions,
	CardMedia,
	CardContent,
	Typography,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import movies from './movies';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		padding: '20px 0 20px 0',
		height: '70%',
		color: '#305792',
		margin: '0 20px 20px',
	},
	link: {
		textDecoration: 'none',
	},
  truncate: {
    // maxWidth: '80%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
});

const Movies = () => {
	// console.log(match);
	const classes = useStyles();
	return (
  <div className={classes.root}>
    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={4} key={movie.id}>
          <Card>
            <CardMedia
              component="img"
              title={movie.title}
              height="250"
              image={movie.image}
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="h5">{movie.title}</Typography>
              <Typography variant="subtitle1">{movie.subtitle}</Typography>
              <Typography variant="body2" className={classes.truncate}>{movie.description}</Typography>
              <Typography variant="h6">
                Rating: 
                {movie.rating}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined">
                <Link to={`${movie.id}`} className={classes.link}>
                  Read more
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
	);
};
export default Movies;

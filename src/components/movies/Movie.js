import React from 'react';
import {
	Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HomeButton from '../HomeButton';
import MovieList from './MovieList';

const useStyles = makeStyles({
	root: {
		// flexGrow: 1,
		width: '80%',
    height: '80%',
		margin: 'auto',
	},
	link: {
		textDecoration: 'none',
	},
  postImg: {
    flexFlow: 'left',
    maxWidth: '100%',
    maxHeight: '300px',
    margin: '20px 0',
    borderRadius: '8px'
  },
  paragraph: {
    padding: '30px'
  }
});

const MovieCard = ({ match, data }) => {
	const classes = useStyles();
  const post = data.find((p) => p.id.toString() === match.params.postId);
  if (!post) {
    alert('The Movie not found)');
    return <div><MovieList /></div>;
  }
	return (
  <div className={classes.root}>
    <img src={post.image} alt={post.title} className={classes.postImg} />
    <Typography variant="h3">{post.title}</Typography>
    <Typography className={classes.paragraph}>{post.description}</Typography>
    <HomeButton />
  </div>
	);
};
export default MovieCard;

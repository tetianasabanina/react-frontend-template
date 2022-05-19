import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const HomeButton = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <Button variant="outlined" onClick={handleClick}>
      Home
    </Button>
  );
};
export default HomeButton;

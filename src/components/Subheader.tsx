import { Typography } from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router-dom'

function Subheader() {
  const location = useLocation();

  let title: string = "Sorry, this page doesn't exist!";

  switch (location.pathname) {
    case "/":
      title = "Home";
      break;
    case "/gallery":
      title = "Gallery";
      break;
    case "/about":
      title = "About Me";
      break;
    case "/contact":
      title = "Contact";
      break;
    case "/blog":
      title = "Blog";
      break;
    default:
      title = "";
      break;
  }

  return (
    <Typography variant="h3">
      { title }
    </Typography>
  )
}

export default Subheader;
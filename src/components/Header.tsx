import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      //flexGrow: 1,
    },
    appBar: {
      display: 'flex',
      alignItems: 'center',
    },
    toolbar: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
    },
    container: {
      width: '65%',
    }
  }),
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <div className={classes.container} >
          <ToolBar className={classes.toolbar}>
            <Button color="inherit" component={RouterLink} to="/">Home</Button>
            <Button color="inherit" component={RouterLink} to="/gallery">Gallery</Button>
            <Button color="inherit" component={RouterLink} to="/blog">Blog</Button>
            <Button color="inherit" component={RouterLink} to="/about">About</Button>
            <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
          </ToolBar>
        </div>
      </AppBar>
    </div>
  );
}


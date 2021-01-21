import * as React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import ItemList from "../components/ItemList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: '90vh',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      //width: '80%',
    },
  }),
);

export default function Gallery() {
  const classes = useStyles();
/*
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <ItemList />
      </div>
    </div>
  )*/

  return (
    <ItemList />
  )
}
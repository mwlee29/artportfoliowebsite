import * as React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import ItemContainer from "../components/ItemContainer";
import SideNav from "../components/SideNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '90vh',
    },
    sideNav: {
      display: 'flex',
      width: '200px',
      height: '20%',
      padding: '20px',
    },
    content: {
      display: 'flex',
      width: '80%',
    },
  }),
);

export default function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sideNav}>
        <SideNav />
      </div>     
      <div className={classes.content}>
        <ItemContainer />
      </div>
    </div>
  )
}
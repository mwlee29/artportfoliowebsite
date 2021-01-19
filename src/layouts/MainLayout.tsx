import * as React from 'react';

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Header from "../components/Header";
import SideNav from "../components/SideNav";

type MainLayoutProps = {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

function MainLayout({ children }: MainLayoutProps ) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.contentContainer}>
        { children }
      </div>
    </div>
  )
}

export default MainLayout;
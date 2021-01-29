import * as React from 'react';

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Header from "../components/Header";
import Subheader from "../components/Subheader"
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';

type MainLayoutProps = {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      alignItems: 'center',
    },
    contentContainer: {
      width: '65%',
      flexGrow: 1,
      backgroundColor: theme.palette.primary.main,
    },
    subheader: {
      display: 'flex',
      height: theme.spacing(8),
      justifyContent: 'center',
    },
    headerText: {
      display: 'flex',
      justifyContent: 'center',
    }
  })
);

function MainLayout({ children }: MainLayoutProps ) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h1' className={classes.headerText}>JD Makes Stuff</Typography>
      <Header />
      <div className={classes.mainContainer}>
        <Paper elevation={4} className={classes.contentContainer}>
          <div className={classes.subheader}>
            <Subheader />
          </div>
          { children }
        </Paper>
      </div>
    </div>
  )
}

export default MainLayout;
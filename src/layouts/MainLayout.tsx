import * as React from 'react';

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Header from "../components/Header";

type MainLayoutProps = {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
    },
    mainContainer: {
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
    },
    contentContainer: {
      width: '65%',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
    },
    subheader: {
      height: theme.spacing(8),
    }
  })
);

function MainLayout({ children }: MainLayoutProps ) {
  const classes = useStyles();

  return (
    <body className={classes.root}>
      <Header />
      <div className={classes.mainContainer}>
        <div className={classes.contentContainer}>
          <div className={classes.subheader} />
          { children }
        </div>
      </div>
    </body>
  )
}

export default MainLayout;
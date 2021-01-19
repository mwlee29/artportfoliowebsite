import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      paddingLeft: '12px',
    },
    menuItems: {
      fontSize: '36px'
    }
  }),
);

export default function SideNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>Stencils</Button>
      <Button>From the shop</Button>
    </div>
  )
}
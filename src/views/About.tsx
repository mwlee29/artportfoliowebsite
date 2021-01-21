import * as React from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import artistPhoto from "../assets/ArtistPhoto.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    image: {
      height: '600px',
      width: '600px',
    },
    testOne: {
      width: '50%',
    }
  })
)

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
        <Grid item xs className={classes.testOne}>
          <img src={artistPhoto} alt="artist" className={classes.image} />
        </Grid>
        <Grid item xs>
          <div>Hi my name is JD</div>
        </Grid>
      </Grid>
    </div>
  )
}

export default About;
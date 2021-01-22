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
  })
)

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs>
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
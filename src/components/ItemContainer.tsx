import * as React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import { GridListTileBar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

/*
  Was having some problems with decoupling the GridListTile from ItemList,
  I couldn't figure out how to fit the content to the container. Will need
  more testing to see if I can figure it out later.
*/


import { ItemModel } from "../model/ItemModel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: '100%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    image: {
      display: 'flex',
      height: '100%',
    }
  }),
);

function ItemContainer({ item }: { item: ItemModel }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={item.url} alt={item.title} className={classes.image} />
      <GridListTileBar
        title={item.title}
        subtitle={<span>Description: {item.description}</span>}
        actionIcon={
          <IconButton aria-label={`info about ${item.title}`}>
            <InfoIcon />
          </IconButton>
        }
      />
    </div>
  )
}

export default ItemContainer;
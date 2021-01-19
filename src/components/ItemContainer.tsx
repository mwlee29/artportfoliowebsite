import * as React from "react";
import { useState, useEffect } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { GridListTileBar } from "@material-ui/core";
import { ListSubheader } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

import { ItemModel } from "../model/ItemModel";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      overflow: 'hidden',
    },
    gridList: {
      width: '100%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

const ItemContainer = ({ item }: { item: ItemModel }) => (

    <GridListTile key={item.url}>
      <img src={item.url} alt={item.title} />
      <GridListTileBar
        title={item.title}
        subtitle={<span>Description: {item.description}</span>}
        actionIcon={
          <IconButton aria-label={`info about ${item.title}`}>
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
)

export default ItemContainer;
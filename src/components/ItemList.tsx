import * as React from "react";
import { useState, useEffect } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { ListSubheader } from "@material-ui/core";
import { GridListTileBar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { ItemModel } from "../model/ItemModel";
import { Typography } from "@material-ui/core";

//import ItemContainer from "./ItemContainer";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: '100%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    tile: {
      height: '100px',
    }
  }),
);

export default function ItemList() {
  const classes = useStyles();
  const [tileData, setTileData] = useState<ItemModel[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getData("https://fakerapi.it/api/v1/images?_quantity=100&_type=kittens");
      setTileData(res.data);
    }
    fetchData();
  }, [])

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} spacing={2}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">
            <Typography variant="h2">
              Showcase
            </Typography>
          </ListSubheader>
        </GridListTile>
        {tileData.map((tileData) => (
          <GridListTile>
            <img src={tileData.url} alt={tileData.title} />
            <GridListTileBar
              title={tileData.title}
              subtitle={<span>Description: {tileData.description}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tileData.title}`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

async function getData(url = "") {
  const response = await fetch(url, {
    method: "GET"
  })
  return response.json()
}

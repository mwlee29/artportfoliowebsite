import * as React from "react";
import { useState, useEffect } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { GridListTileBar } from "@material-ui/core";
import { ListSubheader } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

import ItemContainer from "./ItemContainer";
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
      <GridList cellHeight={400}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">
            <Typography variant="h2">
              Showcase
            </Typography>
          </ListSubheader>
        </GridListTile>
        {tileData.map((tileData) => (
          <ItemContainer key={tileData.url} item={tileData} />
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

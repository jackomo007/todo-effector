import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import {getTodos} from "../store"

function TopBar() {
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={() => getTodos('https://raw.githubusercontent.com/jackomo007/todo-effector/master/src/mock.json')}>Load</Button>
    </Grid>
  );
}

export default TopBar;

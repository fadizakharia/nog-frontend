import {
  AppBar,
  BottomNavigation,
  Button,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useState } from "react";

const PollControls = () => {
  const [open, setOpen] = useState(false);
  return (
    <BottomNavigation color="secondary">
      <IconButton>
        <Add />
      </IconButton>
    </BottomNavigation>
  );
};

export default PollControls;

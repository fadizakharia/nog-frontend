import {
  AppBar,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import DrawerHolder from "./DrawerHolder";
import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { NavTab } from "./NavTab";
import { NavTabs } from "./NavTabs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flex: { flex: 1 },
    mobile: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    desktop: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  })
);

const Navbar = () => {
  const history = useHistory();
  const classes = useStyles();
  const [navigationItem, setnavigationItem] = useState(0);

  const setNavigation = (event: ChangeEvent<{}>, value: number) => {
    setnavigationItem(value);
    switch (value) {
      case 0:
        history.push("/");

        break;
      case 1:
        history.push("/members");

        break;
      case 2:
        history.push("/alliance");
    }
  };
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <div className={classes.mobile}>
            <DrawerHolder />
          </div>
          <Typography variant="h4" color="secondary">
            NOG
          </Typography>
          <div className={classes.flex} />
          <NavTabs
            value={navigationItem}
            indicatorColor="primary"
            textColor="primary"
            onChange={(e, value: number) => setNavigation(e, value)}
            aria-label="disabled tabs example"
            className={classes.desktop}
          >
            <NavTab label="Home" />
            <NavTab label="Members" />
            <NavTab label="Request Alliance" />
          </NavTabs>
          <Button variant="outlined" color="secondary">
            join us!
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

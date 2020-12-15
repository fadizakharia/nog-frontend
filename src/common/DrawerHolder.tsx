import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  SwipeableDrawer,
  // withStyles,
} from "@material-ui/core";
import {
  Menu,
  Group,
  Home,
  DeviceHub,
  // ArrowForwardIos,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hamburger: {
      width: "30px",
      height: "30px",
      color: "white",
      marginRight: "10px",
    },
    flex: { flex: 1 },
    list: {
      width: "250px",
    },
  })
);
// const CustomArrow = withStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       color: theme.palette.secondary.main,
//       marginRight: 0,
//       marginLeft: "auto",
//       width: "25px",
//       height: "25px",
//     },
//   })
// )(ArrowForwardIos);

const DrawerHolder = () => {
  const classes = useStyles();
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const handleMenuClick = () => {
    menuClicked ? setMenuClicked(false) : setMenuClicked(true);
  };
  return (
    <React.Fragment>
      <IconButton onClick={handleMenuClick}>
        <Menu className={classes.hamburger} color="primary" />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={menuClicked}
        onClose={handleMenuClick}
        onOpen={() => {}}
      >
        <Divider style={{ marginTop: "65px" }} />
        <List className={classes.list}>
          <ListItem button onClick={() => setMenuClicked(!menuClicked)}>
            <ListItemIcon>
              <Home color="secondary" />
            </ListItemIcon>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              Home
            </Link>
            {/* <CustomArrow /> */}
          </ListItem>
          <ListItem button onClick={() => setMenuClicked(!menuClicked)}>
            <ListItemIcon>
              <Group color="secondary" />
            </ListItemIcon>
            <Link
              to="/members"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Members
            </Link>
            {/* <CustomArrow /> */}
          </ListItem>
          <ListItem button onClick={() => setMenuClicked(!menuClicked)}>
            <ListItemIcon>
              <DeviceHub color="secondary" />
            </ListItemIcon>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/alliance"
            >
              Request Alliance
            </Link>
            {/* <CustomArrow /> */}
          </ListItem>
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
};
export default DrawerHolder;

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
  Avatar,
  ListItemAvatar,
  ListItemText,
  // withStyles,
} from "@material-ui/core";
import {
  Menu,
  Group,
  Home,
  DeviceHub,
  ExitToApp,
  Poll,
  Event,
  AccountCircle,
  // ArrowForwardIos,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Logout } from "../store/auth/actions/auth/auth";
import { authReducerState } from "../store/auth/reducers/authReducer/authReducerType";
import { applicationState } from "../store/store";

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
    profileOptions: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    profileAvatar: {
      width: "100px",
      height: "100px",
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
  const isLoggedIn = useSelector<applicationState>(
    ({ auth }) => auth.isLoggedIn
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const characterImage = useSelector((auth: authReducerState) => {
    return auth.characterImage;
  });
  const handleLogout = (event: React.MouseEvent) => {
    dispatch(Logout());
    history.push("/");
  };
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
        {isLoggedIn && (
          <List>
            <Divider />
            <ListItem button>
              <ListItemAvatar>
                <AccountCircle color="secondary" />
              </ListItemAvatar>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Event color="secondary" />
              </ListItemAvatar>
              <ListItemText primary="Events" />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Poll color="secondary" />
              </ListItemAvatar>
              <ListItemText primary="Polls" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemAvatar>
                <ExitToApp color="error" />
              </ListItemAvatar>

              <ListItemText
                primaryTypographyProps={{ color: "error" }}
                primary="logout"
              />
            </ListItem>
          </List>
        )}
      </SwipeableDrawer>
    </React.Fragment>
  );
};
export default DrawerHolder;

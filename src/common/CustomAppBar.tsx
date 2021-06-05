import {
  Toolbar,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Hidden,
} from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import DrawerHolder from "./DrawerHolder";
import { NavTab } from "./NavTab";
import { NavTabs } from "./NavTabs";
import NogLogo from "../assets/images/NogLogo.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authReducerState } from "../store/auth/reducers/authReducer/authReducerType";
import { Logout } from "../store/auth/actions/auth/auth";
import PersonalSettings from "./PersonalSettings";
import { applicationState } from "../store/store";
interface Props {
  navigationItem: number | boolean;
  setNavigationItem: (index: number) => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flex: { flex: 1 },
    AppBar: {},
    NavLogo: {
      maxHeight: "150px",
      maxWidth: "150px",
      position: "absolute",
      top: "0px",
      padding: "10px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
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
const CustomAppBar = (props: Props) => {
  const isLoggedIn = useSelector<applicationState>(
    ({ auth }) => auth.isLoggedIn
  );
  const history = useHistory();

  const dispatch = useDispatch();
  const [navigationItem, setnavigationItem] = useState<number | boolean>(0);

  useEffect(() => {
    setnavigationItem(props.navigationItem);
    return () => {};
  }, [props.navigationItem]);
  const classes = useStyles();
  return (
    <Toolbar>
      <div className={classes.mobile}>
        <DrawerHolder />
      </div>

      <img
        style={{
          position: "relative",
          height: "50px",
          width: "100px",
          padding: "0",
        }}
        className={classes.NavLogo}
        src={NogLogo}
      />

      <div className={classes.flex} />
      <NavTabs
        value={navigationItem}
        indicatorColor="primary"
        textColor="primary"
        onChange={(e, value: number) => props.setNavigationItem(value)}
        aria-label="disabled tabs example"
        className={classes.desktop}
      >
        <NavTab label={isLoggedIn ? "Dashboard" : "Home"} />
        <NavTab label="Members" />
        {!isLoggedIn && <NavTab label="Request Alliance" />}
      </NavTabs>
      {isLoggedIn ? (
        <Hidden smDown>
          <PersonalSettings />
        </Hidden>
      ) : (
        <Button
          onClick={() => {
            history.push("/auth");
          }}
          variant="outlined"
          color="secondary"
        >
          join us!
        </Button>
      )}
    </Toolbar>
  );
};

export default CustomAppBar;

import {
  AppBar,
  createStyles,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Toolbar,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {},
    wrapper: {
      justifyContent: "center",
    },
    tabHolder: {
      justifyItems: "space-between",
    },
    tab: {
      margin: "0px 20px",
      textAlign: "center",
    },
    tabIndicator: {},
  })
);
const DashboardAppbar = () => {
  const [TabIndex, setTabIndex] = useState<boolean | number>(0);
  const classes = useStyles();
  const history = useHistory();
  const handleChange = (event: ChangeEvent<{}>, value: number | boolean) => {
    console.log(value);
    setTabIndex(value);
    switch (value) {
      case 0:
        history.push("/dashboard/");
        break;
      case 1:
        history.push("/dashboard/events");
        break;
      case 2:
        history.push("/dashboard/calendar");
        break;
      default:
        break;
    }
  };
  return (
    <AppBar
      variant="outlined"
      position="static"
      color="transparent"
      className={classes.appBar}
    >
      <Toolbar className={classes.wrapper}>
        <Tabs
          className={classes.tabHolder}
          onChange={(event, value: number) => handleChange(event, value)}
          value={TabIndex}
          TabIndicatorProps={{ className: classes.tabIndicator }}
        >
          <Tab className={classes.tab} label="Poll" />
          <Tab className={classes.tab} label="Events" />
          <Tab className={classes.tab} label="Calendar" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardAppbar;

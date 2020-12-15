import { Tabs, withStyles } from "@material-ui/core";
export const NavTabs = withStyles({
  root: {
    marginRight: "50px",
  },
  indicator: {
    display: "none",
  },
})(Tabs);

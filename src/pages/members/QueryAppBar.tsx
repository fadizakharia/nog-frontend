import {
  AppBar,
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  Theme,
  Toolbar,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    FormControl: {
      minWidth: 50,
    },
    flex: {
      flex: 1,
    },
  })
);
const QueryAppBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative" color="transparent" variant="outlined">
      <Toolbar>
        <div className={classes.flex} />
        <FormControl className={classes.FormControl}>
          <InputLabel htmlFor="sort-select">sort</InputLabel>
          <Select
            native
            color="primary"
            inputProps={{ id: "sort-select", name: "sort" }}
          >
            <option aria-label="None" value="" />
            <option value={0}>joined at</option>
            <option value={1}>alphabetical</option>
          </Select>
        </FormControl>
        <div className={classes.flex} />
      </Toolbar>
    </AppBar>
  );
};

export default QueryAppBar;
// sort
// search

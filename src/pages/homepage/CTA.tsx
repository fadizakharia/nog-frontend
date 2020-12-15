import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import Shalltear from "../../assets/images/shalltear.png";
import React from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    FlagFooterHolder: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 0",
      backgroundColor: theme.palette.primary.main,
      height: "400px",
      width: "100%",
      textAlign: "center",
    },
  })
);
const CTA = () => {
  const classes = useStyles();
  return (
    <div className={classes.FlagFooterHolder}>
      <img width="200px" height="200px" src={Shalltear} />

      <Typography
        style={{ marginBottom: "40px", marginTop: "60px" }}
        align="center"
        variant="h4"
        color="secondary"
      >
        So what are you waiting for?
      </Typography>
      <Button
        style={{ height: "40px", width: "200px" }}
        variant="outlined"
        color="secondary"
      >
        join us!
      </Button>
    </div>
  );
};

export default CTA;

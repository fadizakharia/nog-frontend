import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import Albedo from "../assets/images/albedospinner.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loadingContainer: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "RGBA(0,0,0,1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      animation: `$pulse 1s infinite ${theme.transitions.easing.easeInOut}`,
    },
    spinningLogo: {
      display: "block",
      width: "130px",
      height: "130px",
      top: "calc(50vh - 100px)",
      position: "absolute",
    },
    loading: {
      display: "inline",
    },
    dotOne: {
      display: "inline",
      animation: `$show 3s 1s infinite linear`,
      opacity: "0",
    },
    dotTwo: {
      display: "inline",
      animation: `$show 3s 2s infinite linear`,
      opacity: "0",
    },
    dotThree: {
      display: "inline",
      animation: `$show 3s 3s infinite linear`,
      opacity: "0",
    },
    "@keyframes spin": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(359deg)",
      },
    },
    "@keyframes show": {
      "0%": {
        opacity: "0",
      },
      "90%": {
        opacity: "1",
      },
      "100%": {
        opacity: "0",
      },
    },
    "@keyframes pulse": {
      "0%": {
        backgroundColor: "RGBA(0,0,0,0.9)",
      },
      "100%": {
        backgroundColor: "RGBA(0,0,0,1)",
      },
    },
  })
);
const PageLoading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loadingContainer}>
      {/* <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      > */}
      <img
        className={classes.spinningLogo}
        src={Albedo}
        alt="spinning albedo"
      />
      <div>
        <Typography className={classes.loading} color="secondary" variant="h3">
          LOADING
        </Typography>
        <Typography className={classes.dotOne} color="secondary" variant="h3">
          .
        </Typography>
        <Typography className={classes.dotTwo} color="secondary" variant="h3">
          .
        </Typography>
        <Typography className={classes.dotThree} color="secondary" variant="h3">
          .
        </Typography>
      </div>
      {/* </div> */}
    </div>
  );
};

export default PageLoading;

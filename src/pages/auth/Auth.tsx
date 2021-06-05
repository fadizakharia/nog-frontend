import {
  Button,
  CircularProgress,
  createStyles,
  Divider,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import React, { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import PageLoading from "../../common/PageLoading";
import { authReducerState } from "../../store/auth/reducers/authReducer/authReducerType";
import { applicationState } from "../../store/store";

import Signin from "./Signin";
import Signup from "./Signup";
// import { Formik, Field, Form } from "formik";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootContainer: {
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      height: `calc(100vh - 89px)`,
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down("xs")]: {
        height: `calc(100vh - 81px)`,
      },
    },
    subContainer: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",

      alignItems: "center",
      minWidth: "300px",
      backgroundColor: "white",
      borderRadius: "4%",
    },
    headText: {
      padding: "20px 0 0 0",
      fontFamily: "Playfair Display",
      fontStyle: "Black",
      fontWeight: 900,
      fontSize: theme.typography.h5.fontSize,
      minWidth: "200px",
      textAlign: "start",
    },
    ToggleContainer: {
      display: "block",
    },
    Divider: {
      padding: "20px 0",
    },
    ToggleDescription: {
      color: theme.palette.primary.dark,
      opacity: 0.5,
    },
    ToggleText: {
      textDecoration: "underline",
      color: theme.palette.primary.main,
      cursor: "pointer",
      margin: "0 0 20px 0",
    },
  })
);
const Auth = () => {
  const classes = useStyles();
  const [authMethod, setAuthMethod] = useState<"signin" | "signup">("signup");

  const error = useSelector<applicationState>(
    ({ auth }) => auth.errors
  ) as string[];
  let errorAlert: null | ReactElement = null;
  if (error) {
    errorAlert = (
      <React.Fragment>
        {error.map((s) => (
          <Alert variant="filled" severity="error">
            {s}
          </Alert>
        ))}
      </React.Fragment>
    );
  }

  return authMethod === "signup" ? (
    <React.Fragment>
      <div className={classes.rootContainer}>
        <div className={classes.subContainer}>
          <Typography className={classes.headText} color="primary">
            Sign Up
          </Typography>
          <Signup />

          <Divider className={classes.Divider} />

          <Typography classes={{ root: classes.ToggleDescription }}>
            Already have an account?{" "}
          </Typography>
          <Typography
            variant="h6"
            className={classes.ToggleText}
            onClick={() => setAuthMethod("signin")}
          >
            Signin
          </Typography>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div className={classes.rootContainer}>
        <div className={classes.subContainer}>
          <Typography className={classes.headText} color="primary">
            Sign In
          </Typography>
          {errorAlert}
          <Signin />
          <Divider className={classes.Divider} />
          <Typography className={classes.ToggleDescription}>
            Don't have an account?{" "}
          </Typography>
          <Typography
            variant="h6"
            className={classes.ToggleText}
            onClick={() => setAuthMethod("signup")}
          >
            Signup
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;

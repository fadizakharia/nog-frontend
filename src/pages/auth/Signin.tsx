import React from "react";
import { signInSchema } from "./authSchemas";
import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../store/auth/actions/auth/auth";
import { Redirect } from "react-router";
import { authReducerState } from "../../store/auth/reducers/authReducer/authReducerType";
import { applicationState } from "../../store/store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    TextField: {
      color: theme.palette.primary.main,
      maxWidth: "200px",
      display: "block",
    },
    TextFieldLabel: {
      color: theme.palette.primary.main,
      opacity: 0.5,
    },
    buttonAction: {
      marginTop: "20px",
    },
  })
);
const Signin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector<applicationState>(
    ({ auth }) => auth.isLoggedIn
  );
  console.log("signin rendered");
  const loginHandler = (values: {
    characterName: string;
    password: string;
  }) => {
    dispatch(auth(values.characterName, values.password));
  };
  return (
    <React.Fragment>
      {isLoggedIn && <Redirect to="/" />}
      <Formik
        initialValues={{ characterName: "", password: "" }}
        onSubmit={(values) => loginHandler(values)}
        validationSchema={signInSchema}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                return handleSubmit(event);
              }}
            >
              <TextField
                label="character name"
                name="characterName"
                variant="outlined"
                value={values.characterName}
                InputLabelProps={{ className: classes.TextFieldLabel }}
                onChange={handleChange}
                onBlur={handleBlur}
                className={classes.TextField}
                helperText={
                  errors.characterName &&
                  touched.characterName &&
                  errors.characterName
                }
                FormHelperTextProps={{
                  style: { color: "red", opacity: 0.5 },
                }}
                error={errors.characterName ? true : false}
                margin="normal"
              />
              <TextField
                label="password"
                name="password"
                value={values.password}
                variant="outlined"
                InputLabelProps={{ className: classes.TextFieldLabel }}
                className={classes.TextField}
                FormHelperTextProps={{ style: { color: "red", opacity: 0.5 } }}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.password && touched.password && errors.password
                }
                error={errors.password && touched.password ? true : false}
                margin="normal"
              />

              <Button
                className={classes.buttonAction}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={
                  !!errors.characterName ||
                  !!errors.password ||
                  !touched.characterName ||
                  !touched.password
                }
              >
                Login
              </Button>
            </form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};

export default Signin;

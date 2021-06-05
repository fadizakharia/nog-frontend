import React from "react";
import { signUpSchema } from "./authSchemas";
import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { authSignup } from "../../store/auth/actions/auth/auth";
import { Redirect, useHistory } from "react-router";
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
const Signup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector<applicationState>(
    ({ auth }) => auth.isLoggedIn
  );
  const signupHandler = (values: {
    characterName: string;
    password: string;
    confirm: string;
  }) => {
    dispatch(authSignup(values.characterName, values.password, values.confirm));

    history.push("/");
  };
  return (
    <Formik
      initialValues={{ characterName: "", password: "", confirm: "" }}
      onSubmit={(values) => signupHandler(values)}
      validationSchema={signUpSchema}
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
        console.log("signup rendered");

        return (
          <form onSubmit={handleSubmit}>
            {isLoggedIn && <Redirect to="/" />}
            <TextField
              label="character name"
              name="characterName"
              value={values.characterName}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              error={
                errors.characterName && touched.characterName ? true : false
              }
              FormHelperTextProps={{ style: { color: "red" } }}
              InputLabelProps={{ className: classes.TextFieldLabel }}
              className={classes.TextField}
              helperText={
                errors.characterName &&
                touched.characterName &&
                errors.characterName
              }
              margin="normal"
            />
            <TextField
              label="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              FormHelperTextProps={{ style: { color: "red" } }}
              onBlur={handleBlur}
              type="password"
              variant="outlined"
              error={errors.password && touched.password ? true : false}
              InputLabelProps={{ className: classes.TextFieldLabel }}
              className={classes.TextField}
              helperText={
                errors.password && touched.password && errors.password
              }
              margin="normal"
            />
            <TextField
              label="confirm password"
              name="confirm"
              value={values.confirm}
              FormHelperTextProps={{ style: { color: "red" } }}
              onChange={handleChange}
              onBlur={handleBlur}
              InputLabelProps={{ className: classes.TextFieldLabel }}
              variant="outlined"
              type="password"
              error={errors.confirm && touched.confirm ? true : false}
              className={classes.TextField}
              helperText={errors.confirm && touched.confirm && errors.confirm}
              margin="normal"
            />
            <Button
              className={classes.buttonAction}
              color="primary"
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              fullWidth
            >
              Signup
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default Signup;

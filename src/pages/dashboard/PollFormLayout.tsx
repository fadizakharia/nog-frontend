import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import { Formik } from "formik";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { applicationState } from "../../store/store";
import { editProfileSchema } from "../profile/EditProfileSchema";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      width: "100%",
    },
    TextField: { margin: "20px 0" },
    TextFieldLabel: {
      color: theme.palette.primary.main,
      opacity: 0.5,
    },
    TextArea: {
      width: "80%",
    },
    buttonAction: {
      width: "300px",
    },
  })
);
const PollFormLayout = () => {
  const classes = useStyles();
  const loading = useSelector(({ poll }: applicationState) => poll.loading);
  const createHandler = (values: {
    title: string;
    description: string;
    type: number;
    expirationTime: number;
  }) => {};
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        type: 0,
        expirationTime: moment.now(),
      }}
      onSubmit={(values) => createHandler(values)}
      validationSchema={editProfileSchema}
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
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
              label="Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              error={errors.title && touched.title ? true : false}
              FormHelperTextProps={{ style: { color: "red" } }}
              InputLabelProps={{ className: classes.TextFieldLabel }}
              className={classes.TextField}
              helperText={errors.title && touched.title && errors.title}
              margin="normal"
            />
            <TextField
              multiline
              label="description"
              rows={4}
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              error={errors.description && touched.description ? true : false}
              FormHelperTextProps={{ style: { color: "red" } }}
              InputLabelProps={{ className: classes.TextFieldLabel }}
              className={classes.TextArea}
              helperText={
                errors.description && touched.description && errors.description
              }
              margin="normal"
            />

            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              className={classes.TextField}
              FormHelperTextProps={{ style: { color: "red" } }}
              error={
                errors.expirationTime && touched.expirationTime ? true : false
              }
              onChange={handleChange}
              helperText={
                errors.expirationTime &&
                touched.expirationTime &&
                errors.expirationTime
              }
              InputLabelProps={{
                shrink: true,
                className: classes.TextFieldLabel,
              }}
            />
            <Button
              className={classes.buttonAction}
              color="primary"
              variant="contained"
              type="submit"
              disabled={loading}
              fullWidth
            >
              submit
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default PollFormLayout;

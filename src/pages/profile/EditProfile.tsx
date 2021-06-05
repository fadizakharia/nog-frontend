import {
  TextField,
  Button,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import { Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { updateUser } from "../../store/auth/actions/auth/auth";
import { authReducerState } from "../../store/auth/reducers/authReducer/authReducerType";
import { applicationState } from "../../store/store";

import { editProfileSchema } from "./EditProfileSchema";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      maxWidth: "100vw",
      height: "calc(100vh - 105px)",
    },

    TextField: {
      color: theme.palette.primary.main,
      maxWidth: "200px",
      display: "block",
    },
    TextArea: {
      minWidth: "400px",
    },
    TextFieldLabel: {
      color: theme.palette.primary.main,
      opacity: 0.5,
    },
    buttonAction: {
      marginTop: "20px",
      width: "200px",
    },
  })
);
const EditProfile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [profilePicture, setprofilePicture] = useState<undefined | File>(
    undefined
  );
  const [profilePicturePreviewUrl, setProfilePicturePreviewUrl] = useState<
    string | undefined
  >(undefined);

  const characterName = useSelector(
    ({ auth }: applicationState) => auth.characterName
  );
  const bio = useSelector(({ auth }: applicationState) => auth.bio);
  const characterImage = useSelector(
    ({ auth }: applicationState) => auth.characterImage
  );
  const loading = useSelector(({ auth }: applicationState) => auth.loading);
  let redirect;
  const updateHandler = (values: {
    characterName: string | null | undefined;
    bio: string | null | undefined;
  }) => {
    dispatch(updateUser(values.characterName, values.bio, profilePicture));
    history.push("/user/current");
  };

  const handleImageUploadChange = (Files: FileList) => {
    if (Files[0]) {
      setprofilePicture(Files[0]);

      setProfilePicturePreviewUrl(URL.createObjectURL(Files[0]));
    }
  };
  return (
    <Formik
      initialValues={{ characterName: characterName, bio: bio }}
      onSubmit={(values) => updateHandler(values)}
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
            <input
              type="file"
              id="Button-For-File"
              accept={"image/jpg,image/jpeg,image/png"}
              onChange={(e) => handleImageUploadChange(e.target.files!)}
              style={{ display: "none" }}
            />
            <Avatar
              style={{ width: "200px", height: "200px", margin: "20px 0" }}
              src={
                profilePicturePreviewUrl
                  ? profilePicturePreviewUrl
                  : "http://localhost:4000/" + characterImage
              }
            />
            <label htmlFor="Button-For-File">
              <Button variant="outlined" color="primary" component="span">
                upload
              </Button>
            </label>
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
              label="bio"
              name="bio"
              multiline
              value={values.bio}
              onChange={handleChange}
              FormHelperTextProps={{ style: { color: "red" } }}
              onBlur={handleBlur}
              variant="outlined"
              placeholder="write something about yourself (please dont write the exact phrase)"
              rows={5}
              error={errors.bio && touched.bio ? true : false}
              InputLabelProps={{ className: classes.TextFieldLabel }}
              className={classes.TextArea}
              helperText={errors.bio && touched.bio && errors.bio}
              margin="normal"
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
            <Button
              className={classes.buttonAction}
              color="default"
              variant="contained"
              onClick={(ev) => history.push("/user/current")}
              disabled={loading}
              fullWidth
            >
              Cancel
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default EditProfile;

import {
  Grid,
  Avatar,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  Button,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import React from "react";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      alignItems: "center",
      alignContent: "center",
      justifyItems: "center",
      justifyContent: "center",
      width: "100vw",
      marginTop: "75px",
    },
    avatarHolder: {
      display: "flex",
      justifyContent: "center",
      minWidth: "100vw",
    },
    avatar: {
      width: "200px",
      height: "200px",
      justifySelf: "center",
    },
  })
);
interface userProps {
  characterName?: string;
  bio?: string;
  characterImage?: string;
}
const ProfileStructure = (props: userProps) => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid item xs={12}>
        <div className={classes.avatarHolder}>
          <Avatar
            className={classes.avatar}
            src={"http://localhost:4000/" + props.characterImage}
            alt={props.characterName + "'s picture"}
          />
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="h5">
          {props.characterName}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="body1">
          {props.bio}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileStructure;

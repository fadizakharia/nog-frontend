import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import React from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    purpleBackground: {
      backgroundSize: "100% 100%",
      height: "380px",
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      borderTop: `40px solid ${theme.palette.secondary.main}`,
    },
    section: {
      margin: "'80px 0'",
    },
    subText: {
      marginTop: "20px",
      color: "white",
    },
  })
);
const Requirements = () => {
  const classes = useStyles();
  return (
    <div className={classes.purpleBackground + " " + classes.section}>
      <Grid
        style={{ height: "100%", textAlign: "center" }}
        alignItems="center"
        justify="center"
        container
      >
        <Grid item xs={12}>
          <Typography align="center" style={{ color: "white" }} variant="h4">
            What are the requirements to join?
          </Typography>
          <Typography align="center" className={classes.subText}>
            We seek people who are friendly and chill in order to minimize drama
            and maximize friendships.
          </Typography>
        </Grid>
        <Grid style={{ padding: "0 10px" }} item xs={12} md={6}>
          <Paper style={{ backgroundColor: "white" }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Check style={{ color: "green" }} />
                </ListItemIcon>
                <Typography variant="body1" color="primary">
                  Non-Toxic: You need to be respectful and friendly towards
                  other members of the guild
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check style={{ color: "green" }} />
                </ListItemIcon>
                <Typography variant="body1" color="primary">
                  Active: Non-active players are automatically removed after a
                  period of time.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check style={{ color: "green" }} />
                </ListItemIcon>
                <Typography variant="body1" color="primary">
                  Thick-Skinned: You need to be able to accept jokes and not
                  make a big deal out of them if they do not directly affect
                  you.
                </Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Requirements;

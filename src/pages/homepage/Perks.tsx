import {
  Typography,
  Grid,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { MenuBook, SportsKabaddi, Gavel } from "@material-ui/icons";
import React from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      textAlign: "center",
      width: "100px",
    },
    perkIcon: {
      height: "80px",
      width: "80px",
    },
  })
);
const Perks = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        style={{ marginBottom: "40px", marginTop: "80px" }}
        variant="h5"
        color="primary"
        align="center"
      >
        What we offer:
      </Typography>
      <Grid
        container
        spacing={5}
        justify="center"
        style={{
          padding: "10px",
          flexGrow: 1,
          width: "100vw",
          marginBottom: "80px",
        }}
      >
        <Grid className={classes.paper} item xs={12} md={4}>
          <div>
            <MenuBook color="primary" className={classes.perkIcon} />
            <Typography variant="h5">Game Guides</Typography>
            <Typography>
              That includes leveling, equipment and bossing guides. The guides
              are updated regularly as the game evolves.
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.paper} item xs={12} md={4}>
          <div>
            <SportsKabaddi color="primary" className={classes.perkIcon} />
            <Typography variant="h5">Backup</Typography>
            <Typography>
              When one of us is unable to defeat a monster alone we present a
              united front and assist them in their battles.
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.paper} item xs={12} md={4}>
          <div>
            <Gavel color="primary" className={classes.perkIcon} />
            <Typography variant="h5">Voting System</Typography>
            <Typography>
              Everyone is important and so we vote as equals. We threw the
              hierarchy out and replaced it with a voting system.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Perks;

import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import Flag from "../../assets/images/flagdown2.png";
import Figurine from "../../assets/images/ainzFigurine.png";
import React from "react";
import { Spring } from "react-spring/renderprops";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    FlagHolder: {
      backgroundImage: `url(${Flag})`,
      backgroundSize: "100% 100%",
      height: "500px",
      width: "100%",
    },
    figurineHolder: {
      textAlign: "center",
    },
    subText: {
      marginTop: "20px",
      color: "white",
    },
    highlighted: {
      fontWeight: "bolder",
      paddingTop: "5px",
    },
  })
);
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.FlagHolder}>
      <div className={classes.figurineHolder}>
        <img width="150px" height="150px" src={Figurine} />
      </div>
      <Spring
        from={{ opacity: 0, marginLeft: "-500px" }}
        to={{ opacity: 1, marginLeft: "0" }}
      >
        {(props) => (
          <Typography
            align="center"
            variant="h5"
            color="secondary"
            style={props}
          >
            Welcome to Nine's Own Goal!
          </Typography>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, marginLeft: "-500px" }}
        to={{ opacity: 1, marginLeft: "0" }}
        delay={1000}
      >
        {(props) => (
          <Typography
            className={classes.subText}
            color="textSecondary"
            variant="body1"
            style={props}
            align="center"
          >
            We are a non-hierarchical AQ3d guild with a single common goal{" "}
          </Typography>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, marginTop: "-500px" }}
        to={{ opacity: 1, marginTop: "0" }}
        delay={2000}
      >
        {(props) => (
          <Typography
            className={classes.highlighted}
            color="secondary"
            variant="body2"
            style={props}
            align="center"
          >
            FRIENDSHIP
          </Typography>
        )}
      </Spring>
    </div>
  );
};

export default Header;

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
      height: "550px",
      width: "100%",
      padding: "70px 0 70px 0",
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
            variant="h4"
            color="secondary"
            style={props}
          >
            Welcome to Nine's Own Goal!
          </Typography>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, marginRight: "-500px" }}
        to={{ opacity: 1, marginRight: "0" }}
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
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={2000}>
        {(props) => (
          <Typography
            color="textSecondary"
            variant="h6"
            style={{
              ...props,
              textShadow: "0px 3px rgba(241,191,45,0.3)",
            }}
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

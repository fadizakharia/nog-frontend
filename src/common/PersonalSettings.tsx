import {
  Avatar,
  Button,
  createStyles,
  Divider,
  IconButton,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  MenuProps,
  SvgIcon,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import {
  ArrowDropDown,
  AccountCircle,
  Event,
  Poll,
  ExitToApp,
} from "@material-ui/icons";
import DiscordIcon from "../assets/images/Discord-Logo+Wordmark-Black.png";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authReducerState } from "../store/auth/reducers/authReducer/authReducerType";
import { useHistory } from "react-router";
import { Logout } from "../store/auth/actions/auth/auth";
import { applicationState } from "../store/store";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:active": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      justifyContent: "center",
    },
    personalInfo: {
      textAlign: "center",
      minWidth: "60px",
      maxWidth: "60px",
    },
    avatar: {},
    discordButton: {},
    dropDownIconButton: {
      maxWidth: "40px",
      maxHeight: "40px",
    },
  })
);
const PersonalSettings = () => {
  const history = useHistory();
  const characterName = useSelector<applicationState>(({ auth }) => {
    return auth.characterName;
  });
  const characterImage = useSelector<applicationState>(({ auth }) => {
    return auth.characterImage;
  });
  const verified = useSelector<applicationState>(({ auth }) => {
    return auth.verified;
  });
  const handleReroute = (event: React.MouseEvent, path: string) => {
    history.push(path);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();

  const handleDiscord = () => {};
  const handleDropDown = (event: React.MouseEvent<HTMLElement>) => {
    if (!anchorEl) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };
  const classes = useStyles();
  console.log(characterImage);
  const handleLogout = (event: React.MouseEvent) => {
    dispatch(Logout());
  };
  return (
    <div className={classes.wrapper}>
      <Avatar
        className={classes.avatar}
        src={`http://localhost:4000/${characterImage}`}
        alt="profile picture"
      />
      <div>
        {/* <Typography
          className={classes.personalInfo}
          color="secondary"
          variant="subtitle1"
        >
          {characterName}
        </Typography> */}
        {/* {!verified && (
          // <Button color="secondary" variant="text" onClick={handleDiscord}>
          //   <Typography
          //     className={classes.personalInfo}
          //     color="secondary"
          //     variant="subtitle2"
          //     style={{ display: "block" }}
          //   >
          //     Join Discord
          //   </Typography>
          // </Button>
        )} */}
      </div>
      <IconButton
        className={classes.dropDownIconButton}
        onClick={handleDropDown}
      >
        <ArrowDropDown color="secondary" fontSize="large" />
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleDropDown}
        >
          <StyledMenuItem
            onClick={(event) => {
              handleReroute(event, "/user/current");
            }}
          >
            <ListItemAvatar>
              <AccountCircle color="secondary" />
            </ListItemAvatar>
            <ListItemText primary="Profile" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemAvatar>
              <Event color="secondary" />
            </ListItemAvatar>
            <ListItemText primary="Events" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemAvatar>
              <Poll color="secondary" />
            </ListItemAvatar>
            <ListItemText primary="Polls" />
          </StyledMenuItem>
          <Divider />
          <StyledMenuItem onClick={handleLogout}>
            <ListItemAvatar>
              <ExitToApp color="error" />
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{ color: "error" }}
              primary="logout"
            />
          </StyledMenuItem>
          {/* {!verified && [
            <Divider key="divider_1" />,
            <StyledMenuItem key="joinDiscord">
              <img
                style={{ maxWidth: "110px", maxHeight: "110px" }}
                src={DiscordIcon}
              />
            </StyledMenuItem>,
            <Divider key="divider_2" />,
          ]} */}
        </StyledMenu>
      </IconButton>
    </div>
  );
};

export default PersonalSettings;

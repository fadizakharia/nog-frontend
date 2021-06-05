import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RouteComponentProps, useHistory, useParams } from "react-router";
import PageLoading from "../../common/PageLoading";

import { authReducerState } from "../../store/auth/reducers/authReducer/authReducerType";
import { applicationState } from "../../store/store";

import ProfileStructure from "./ProfileStructure";
interface props {
  characterName?: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageWrapper: {
      height: "calc(100vh - 164px)",
    },
    edit: {
      paddingTop: "50px",
      paddingBottom: "32px",
      textAlign: "center",
    },
  })
);
const CurrentProfile = (props: props & RouteComponentProps) => {
  const history = useHistory();
  const classes = useStyles();
  const characterName = useSelector<applicationState>(
    ({ auth }) => auth.characterName!
  );
  const bio = useSelector<applicationState>(({ auth }) => auth.bio!);
  const characterImage = useSelector<applicationState>(
    ({ auth }) => auth.characterImage!
  );
  const loading = useSelector<applicationState>(({ auth }) => auth.loading);
  const param = useParams<{ characterName: string }>();
  const [user, setUser] = useState<{
    characterName: string;
    bio: string;
    characterImage: string;
  } | null>(null);

  async function getProfile() {
    setUser({
      characterName: characterName as string,
      bio: bio as string,
      characterImage: characterImage as string,
    });
  }
  const handleRedirect = (event: React.MouseEvent) => {
    history.push("/user/current/edit");
  };
  useEffect(() => {
    getProfile();

    return () => {
      setUser(null);
    };
  }, []);
  return (
    <div className={classes.pageWrapper}>
      <ProfileStructure
        bio={bio as string | undefined}
        characterName={characterName as string | undefined}
        characterImage={characterImage as string | undefined}
      />
      <div className={classes.edit}>
        <Button
          onClick={(event) => handleRedirect(event)}
          variant="outlined"
          color="primary"
        >
          <Edit /> Edit Profile
        </Button>
      </div>
    </div>
  );
};
export default CurrentProfile;

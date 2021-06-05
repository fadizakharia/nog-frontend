import React, { useEffect, useState } from "react";

import { RouteComponentProps, useParams } from "react-router";
import { getUser } from "../../api/users";

import ProfileStructure from "./ProfileStructure";
interface props {
  characterName?: string;
}
const Profile = (props: props & RouteComponentProps) => {
  const param = useParams<{ characterName: string }>();
  const [user, setUser] = useState<{
    characterName: string;
    bio: string;
    characterImage: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState();
  async function getProfile() {
    const profileInfo = await getUser(param.characterName);
    if (profileInfo.data) {
      setUser({
        characterName: profileInfo.data.characterName,
        bio: profileInfo.data.bio,
        characterImage: profileInfo.data.profilePictureURI,
      });
    } else {
      setErrorMessage(profileInfo.response.error.message);
    }
  }
  useEffect(() => {
    getProfile();

    return () => {
      setUser(null);
    };
  }, []);
  console.log("i am rendering");

  return user?.characterName ? (
    <ProfileStructure
      bio={user && user!.bio ? user?.bio! : "User has no biography set!"}
      characterName={user!.characterName}
      characterImage={user!.characterImage}
    />
  ) : (
    <div>loading</div>
  );
};
export default Profile;

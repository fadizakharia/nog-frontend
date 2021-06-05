import React from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
interface props {
  characterName: string;
  imageUrl?: string;
  bio?: string;
  joined: Date;
  verified: boolean;
}
const Member = (props: props) => {
  return (
    <Grid item xs={6} sm={6} md={3}>
      <Card>
        <CardContent style={{ justifyContent: "center", display: "flex" }}>
          <Avatar
            alt={props.characterName + "'s profile picture"}
            src={props.imageUrl}
            style={{ width: "200px", height: "200px" }}
          />
        </CardContent>
        <CardContent>
          <Typography color="primary" align="center" variant="h5">
            {props.characterName}
          </Typography>
          <Typography color="primary" variant="h6">
            {!props.bio ? "User does not have a biography set!" : props.bio}
          </Typography>
          <Typography
            style={{ marginTop: "30px" }}
            color="textPrimary"
            align="right"
            variant="subtitle2"
          >
            joined at:{" " + props.joined.toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Member;

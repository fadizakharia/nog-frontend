import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { pollReducerType } from "../../store/auth/reducers/pollReducer/pollReducerType";
import moment from "moment";
interface pollItemProps {
  polls: pollReducerType["poll"];
}
const PollItem = (props: pollItemProps) => {
  const [expirationDate, setExpirationDate] = useState<string>("expired");
  const receivedExpirationMoment = moment(
    new Date(props.polls!.expirationTime)
  );
  useEffect(() => {
    if (receivedExpirationMoment.isAfter(moment().valueOf(), "milliseconds")) {
      setExpirationDate(
        `${receivedExpirationMoment
          .subtract(moment().valueOf(), "hours")
          .hours()} hours`
      );
    } else {
      setExpirationDate("expired");
    }

    return () => {};
  }, []);

  return props.polls ? (
    <Grid item container direction="column" xs={12} alignItems="center">
      <Card variant="outlined" style={{ minWidth: "60%" }}>
        <CardHeader
          avatar={<Avatar src={props.polls.creatorId.profilePictureURI} />}
          title={
            <Typography variant="h5" color="primary">
              {props.polls.creatorId.characterName}
            </Typography>
          }
          subheader={
            <Typography
              color={expirationDate === "expired" ? "error" : "primary"}
            >
              <Typography variant="caption" color="textPrimary">
                expires in:
              </Typography>{" "}
              {expirationDate === "expired" ? "expired" : `${expirationDate} h`}
            </Typography>
          }
        ></CardHeader>
        <CardContent>
          <Typography align="center" variant="h5">
            {props.polls.title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography align="center" variant="h6">
            {props.polls.description
              ? props.polls.description
              : "this poll has no description"}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button color="primary" variant="outlined">
            View Poll
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ) : null;
};

export default PollItem;

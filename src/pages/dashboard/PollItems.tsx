import { Grid } from "@material-ui/core";
import React from "react";
import { pollReducerType } from "../../store/auth/reducers/pollReducer/pollReducerType";
import PollItem from "./PollItem";
interface pollItemsProps {
  polls: pollReducerType["poll"][];
}

const PollItems = (props: pollItemsProps) => {
  return (
    <Grid container style={{ margin: "30px 0", maxWidth: "100%" }} spacing={2}>
      {props.polls!.map((em) => (
        <PollItem key={em!.id} polls={em} />
      ))}
    </Grid>
  );
};

export default PollItems;

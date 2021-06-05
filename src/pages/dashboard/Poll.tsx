import React, { useEffect, useState } from "react";

import moment from "moment";

import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

import PollItems from "./PollItems";
import { getPolls } from "../../api/poll";
import { pollReducerType } from "../../store/auth/reducers/pollReducer/pollReducerType";

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import PollFormLayout from "./PollFormLayout";

const Poll = () => {
  const [polls, setPolls] = useState<pollReducerType["poll"][] | undefined>();
  const [lastDate, setLastDate] = useState<moment.Moment | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean | undefined>();
  useEffect(() => {
    getPollByDate();
    return () => {};
  }, []);

  const getPollByDate = async (date: moment.Moment = moment()) => {
    setLoading(true);
    const result = await getPolls(date);
    console.log(result.data);

    if (!result.data) {
      setError(result.response.error.message);
    } else {
      setPolls(result.data as pollReducerType["poll"][]);
      const dateIndex = result.data.length;
      const date = moment(result.data[dateIndex - 1].expirationTime);
      console.log(date);

      setLastDate(date);
    }
    setLoading(false);
  };

  return loading === false ? (
    <div className={"page"}>
      <Accordion
        color="primary"
        variant="outlined"
        style={{
          maxWidth: "60%",
          margin: "20px auto 0 auto",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography align="center" style={{ width: "100%" }}>
            Create Poll
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PollFormLayout />
        </AccordionDetails>
      </Accordion>
      <PollItems polls={polls!} />
    </div>
  ) : (
    <h1>{error}</h1>
  );
};

export default Poll;

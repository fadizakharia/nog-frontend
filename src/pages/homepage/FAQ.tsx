import { Typography } from "@material-ui/core";
import React from "react";
import FaqAccordion from "../../common/FaqAccordion";

const FAQ = () => {
  return (
    <div>
      <Typography
        style={{ marginTop: "80px", marginBottom: "40px" }}
        align="center"
        variant="h5"
        color="primary"
      >
        Frequently Asked Questions(FAQ):
      </Typography>
      <div style={{ marginBottom: "80px" }}>
        <FaqAccordion
          Title="Does Nine’s Own Goal relate to Ainz Ooal Gown from overlord ?"
          Information="Nine's Own Goal (ナインズ・オウン・ゴール) was a clan of heteromorphics that existed in YGGDRASIL. It served as the spiritual precursor to the guild that would later become Ainz Ooal Gown."
          AccordianSummaryTypographyProps={{ color: "primary" }}
          DetailsTypographyProps={{
            variant: "subtitle1",
            style: { color: "white" },
          }}
          AccordionDetailsProps={{ style: { backgroundColor: "#29335C" } }}
        />
        <FaqAccordion
          Title="Do you guys do PVP ?"
          Information="We do have an entire pvp channel along with ranks prepared but the current roaster is not interested. Think you can change that?"
          AccordianSummaryTypographyProps={{ color: "primary" }}
          DetailsTypographyProps={{
            variant: "subtitle1",
            style: { color: "white" },
          }}
          AccordionDetailsProps={{ style: { backgroundColor: "#29335C" } }}
        />
        <FaqAccordion
          Title="Do you do guild raids ?"
          Information="Yes we do go on guild raids as frequently as we can!"
          AccordianSummaryTypographyProps={{ color: "primary" }}
          DetailsTypographyProps={{
            variant: "subtitle1",
            style: { color: "white" },
          }}
          AccordionDetailsProps={{ style: { backgroundColor: "#29335C" } }}
        />
        <FaqAccordion
          Title="How do I know the time of events with respect to my time ?"
          Information="All events are timed in UTC based on votes. Inside the discord there is a channel title that updates regularly showing the current time in UTC and another channel called event-polls where you can vote for events at your convenient time."
          AccordianSummaryTypographyProps={{ color: "primary" }}
          DetailsTypographyProps={{
            variant: "subtitle1",
            style: { color: "white" },
          }}
          AccordionDetailsProps={{ style: { backgroundColor: "#29335C" } }}
        />
        <FaqAccordion
          Title="Why is Hajime so cool? "
          Information="Because i just am... deal with it ;)"
          AccordianSummaryTypographyProps={{ color: "primary" }}
          DetailsTypographyProps={{
            variant: "subtitle1",
            style: { color: "white" },
          }}
          AccordionDetailsProps={{ style: { backgroundColor: "#29335C" } }}
        />
      </div>
    </div>
  );
};

export default FAQ;

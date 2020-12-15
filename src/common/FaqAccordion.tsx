import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  AccordionSummaryProps,
  AccordionDetailsProps,
  TypographyProps,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
interface Accordion {
  Title: string;
  Information: string;
  AccordianSummaryProps?: AccordionSummaryProps;
  AccordionDetailsProps?: AccordionDetailsProps;
  DetailsTypographyProps?: TypographyProps;
  AccordianSummaryTypographyProps?: TypographyProps;
}
const FaqAccordion = (props: Accordion) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          {...props.AccordianSummaryProps}
        >
          <Typography
            {...props.AccordianSummaryTypographyProps}
            variant="subtitle2"
          >
            {props.Title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails {...props.AccordionDetailsProps}>
          <Typography {...props.DetailsTypographyProps}>
            {props.Information}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;

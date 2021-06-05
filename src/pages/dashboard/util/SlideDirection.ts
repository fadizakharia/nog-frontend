import { RouteComponentProps } from "react-router";

export const getDirection = (
  location: RouteComponentProps["location"],
  referer: Document["referrer"]
) => {
  let prevIndex: number;
  let nextIndex: number;

  const previousLink = referer.split("dashboard/")[1];
  switch (location.pathname) {
    case "dashboard/":
      nextIndex = 1;
      break;
    case "dashboard/events":
      nextIndex = 2;
      break;
    case "dashboard/calendar":
      nextIndex = 3;
      break;
    default:
      nextIndex = 1;
      break;
  }
  switch (previousLink) {
    case "events":
      prevIndex = 2;
      break;
    case "calendar":
      prevIndex = 3;
      break;
    default:
      prevIndex = 1;
      break;
  }
  const totalIndex = nextIndex - prevIndex;
  if (totalIndex < 0) {
    return true;
  } else {
    return false;
  }
};

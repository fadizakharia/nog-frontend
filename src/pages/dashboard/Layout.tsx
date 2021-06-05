import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  useRouteMatch,
  withRouter,
} from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import DashboardAppbar from "../../common/DashboardAppbar";
import Events from "./Events";
import EventsCalendar from "./EventsCalendar";
import Poll from "./Poll";
import { getDirection } from "./util/SlideDirection";
import "./Layout.css";

interface layoutProps extends RouteComponentProps {}

const Layout = (props: layoutProps) => {
  const [direction, setDirection] = useState<boolean>(false);
  useEffect(() => {
    setDirection(getDirection(props.location, document.referrer));
    return () => {};
  }, [props.location]);
  const { url, path } = useRouteMatch();
  const timeOut = { enter: 800, exit: 400 };
  const currentKey = props.location.pathname.split("/")[1] || "/";
  console.log("layouts rendered");

  return (
    <div>
      <DashboardAppbar />
      <TransitionGroup component="div">
        <CSSTransition
          key={currentKey}
          timeout={timeOut}
          classNames={"pageSlider"}
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <div className={direction ? "right" : "left"}>
            <Route path={`${path}/events`} component={Events} />
            <Route path={`${path}/calendar`} component={EventsCalendar} />
            <Route exact path={`${path}`} component={Poll} />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Layout;

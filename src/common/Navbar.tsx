import { AppBar, Slide } from "@material-ui/core";

import React, { useEffect, useState } from "react";

import { RouteComponentProps, useHistory, withRouter } from "react-router";

import CustomAppBar from "./CustomAppBar";
interface navbarProps extends RouteComponentProps {}
const Navbar = (props: navbarProps) => {
  const history = useHistory();
  const [navigationItem, setnavigationItem] = useState<number | boolean>(false);

  const setNavigation = (value: number) => {
    setnavigationItem(value);
    switch (value) {
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/members");

        break;
      case 2:
        history.push("/alliance");
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (ev: Event) => {
    if (window.scrollY === 0 && isScrolled === true) {
      setIsScrolled(false);
    } else if (window.scrollY !== 60 && isScrolled !== true) {
      setIsScrolled(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    switch (props.location.pathname) {
      case "/":
        setnavigationItem(0);
        break;
      case "/dashboard":
        setnavigationItem(0);
        break;
      case "/dashboard/":
        setnavigationItem(0);
        break;
      case "/dashboard/events":
        setnavigationItem(0);
        break;
      case "/dashboard/calendar":
        setnavigationItem(0);
        break;

      case "/members":
        setnavigationItem(1);
        break;

      case "/alliance":
        setnavigationItem(2);
        break;
      default:
        setnavigationItem(false);
        break;
    }
    return () => {};
  }, [props.location.pathname]);
  console.log("navbar rendered");
  return (
    <div>
      {isScrolled ? (
        <Slide
          direction="down"
          in={isScrolled}
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          <AppBar position="fixed" variant="elevation" color="primary">
            <CustomAppBar
              navigationItem={navigationItem}
              setNavigationItem={setNavigation}
            />
          </AppBar>
        </Slide>
      ) : (
        <AppBar position="static" variant={undefined} color="primary">
          <CustomAppBar
            navigationItem={navigationItem}
            setNavigationItem={setNavigation}
          />
        </AppBar>
      )}
    </div>
  );
};

export default withRouter(Navbar);

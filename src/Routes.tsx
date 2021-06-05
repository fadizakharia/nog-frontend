import React, { Suspense, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router";
import PageLoading from "./common/PageLoading";
import Layout from "./pages/dashboard/Layout";

import Index from "./pages/landing";
import EditProfile from "./pages/profile/EditProfile";

import RequestAlliance from "./pages/request alliance/RequestAlliance";
const Auth = React.lazy(() => import("./pages/auth/Auth"));
const Members = React.lazy(() => import("./pages/members/Members"));
const Profile = React.lazy(() => import("./pages/profile/Profile"));
const CurrentProfile = React.lazy(
  () => import("./pages/profile/CurrentProfile")
);

const Routes = (props: { isLoggedIn: boolean }) => {
  const [routes, setRoutes] = useState<React.ReactElement>();
  useEffect(() => {
    if (props.isLoggedIn) {
      setRoutes(
        <Switch>
          <Route path="/user/current/edit" component={EditProfile} />
          <Route path="/user/current" component={CurrentProfile} />

          <Route
            path="/users/:characterName"
            render={(props) => <Profile {...props} />}
          />

          <Route exact path="/members" component={Members} />
          <Route path="/dashboard" render={(props) => <Layout {...props} />} />
          <Redirect to="/dashboard" />
        </Switch>
      );
    } else {
      setRoutes(
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route
            exact
            path="/users/:characterName"
            render={(props) => <Profile {...props} />}
          />
          <Route exact path="/members" component={Members} />
          <Route exact path="/alliance" component={RequestAlliance} />
          <Route exact path="/" component={Index} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return () => {};
  }, [props.isLoggedIn]);
  console.log("routes rendered");

  return <Suspense fallback={<PageLoading />}>{routes}</Suspense>;
};

export default Routes;

import { useDispatch, useSelector } from "react-redux";

import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

import { useEffect } from "react";

import { currentUser } from "./store/auth/actions/auth/auth";
import React from "react";
import Routes from "./Routes";
import PageLoading from "./common/PageLoading";
import { applicationState } from "./store/store";

function App() {
  const isLoggedIn = useSelector(
    ({ auth }: applicationState) => auth.isLoggedIn
  );
  const loading = useSelector(({ auth }: applicationState) => auth.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
    return () => {};
  }, [dispatch]);

  if (loading) {
    return <PageLoading />;
  } else {
    return (
      <div className="app">
        <Navbar />
        <Routes isLoggedIn={isLoggedIn!} />
        <Footer />
      </div>
    );
  }
}

export default App;

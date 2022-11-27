import React, { memo, Suspense, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import Appfooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import routes from "./router";
const App = memo(() => {
  // const location = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <Suspense fallback="loading...">
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>
      <Appfooter></Appfooter>
    </div>
  );
});

export default App;

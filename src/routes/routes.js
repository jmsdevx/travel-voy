import { Switch, Route } from "react-router-dom";
import React from "react";
import Splash from "../components/layout/splash/Splash";

export default (
  <Switch>
    <Route exact path="/" component={Splash} />
  </Switch>
);

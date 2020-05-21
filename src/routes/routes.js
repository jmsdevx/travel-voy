import { Switch, Route } from "react-router-dom";
import React from "react";
import Splash from "../components/layout/splash/Splash";
import Profile from "../components/user/Profile";

export default (
  <Switch>
    <Route exact path="/" component={Splash} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

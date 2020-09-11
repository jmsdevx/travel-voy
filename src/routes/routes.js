import { Switch, Route } from "react-router-dom";
import React from "react";
import Splash from "../components/layout/splash/Splash";
import Profile from "../components/profile/Profile";
import Login from "../components/user/Login";
import Quiz from "../components/quiz/Quiz";
import Home from '../components/layout/home/Home';

export default (
  <Switch>
    {/* <Route exact path="/" component={Splash} /> */}
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/login" component={Login} />
    <Route path="/quiz" component={Quiz} />
  </Switch>
);

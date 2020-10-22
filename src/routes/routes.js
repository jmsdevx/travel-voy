import { Switch, Route } from "react-router-dom";
import React from "react";
import Login from "../components/user/Login";
import NewQuiz from "../components/newQuiz/NewQuiz";
import Home from '../components/layout/home/Home';
import ProfileResp from '../components/profile/ProfileResp/ProfileResp';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={ProfileResp} />
    <Route path="/login" component={Login} />
    <Route path="/quiz" component={NewQuiz} />
  </Switch>
);

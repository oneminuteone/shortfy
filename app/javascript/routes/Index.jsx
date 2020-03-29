import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Notfound from '../components/Notfound'
import ShowShortURL from '../components/ShowShortURL';
import TopShortURLs from '../components/TopShortURLs';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/top" exact component={TopShortURLs} />
      <Route path="/:shortName" exact component={ShowShortURL} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);
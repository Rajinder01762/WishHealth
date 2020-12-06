import React from "react";
import Layout from "../components/layout";
import { Home,Search, DoctorProfile } from "../pages";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

export default () => (
  <>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/doctor-profile" component={DoctorProfile} />
        </Switch>
      </Layout>
    </Router>
  </>
);

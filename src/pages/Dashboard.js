import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dashboardoverview from "../Components/DashboardComponents/overview/index.js";
import dashboardstats from "../Components/DashboardComponents/statistics/index.js";
import design from "../Components/DashboardComponents/statistics/styles.module.css";

function Dashboard() {
  return (
    <div>
      <div className={design.ContainerBox}>
        <Router>
          <Switch>
            <Route
              path="/dashboard"
              exact
              component={dashboardoverview}
            ></Route>
            <Route
              path="/dashboard/statistics"
              exact
              component={dashboardstats}
            ></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Dashboard;

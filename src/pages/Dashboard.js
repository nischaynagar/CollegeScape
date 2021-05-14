import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Components/DashboardComponents/sidebar/index.js";
import Dashboardoverview from "../Components/DashboardComponents/overview";
import Dashboardstats from "../Components/DashboardComponents/statistics";
import design from "../Components/DashboardComponents/statistics/styles.module.css";
import Student from "./Student";
import Faculty from "./Faculty.js";

function Dashboard() {
  return (
    <div>
      <div className={design.ContainerBox}>
        <Sidebar />
        <Router>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboardoverview />
            </Route>
            <Route exact path="/dashboard/statistics">
              <Dashboardstats />
            </Route>
            <Route path="/dashboard/student">
              <Student />
            </Route>
            <Route exact path="/dashboard/faculty">
              <Faculty />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Dashboard;

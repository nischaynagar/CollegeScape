import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Components/DashboardComponents/sidebar/index.js";
import FacultyList from "../Components/DashboardComponents/faculty/facultylist";
import FacultyProfile from "../Components/DashboardComponents/faculty/facultyProfile";
import design from "../Components/DashboardComponents/statistics/styles.module.css";

export default function Faculty() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dashboard/faculty" exact>
            <FacultyList />
          </Route>
          <Route path="/dashboard/faculty/profile" exact>
            <FacultyProfile />
          </Route>
          <Route path="/dashboard/faculty/courses" exact></Route>
        </Switch>
      </Router>
    </>
  );
}

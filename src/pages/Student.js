import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Components/DashboardComponents/sidebar/index.js";
import Studentcourse from "../Components/StudentComponent/studentcourse";
import Studentcourses from "../Components/StudentComponent/courses";
import Studentlist from "../Components/StudentComponent/studentlist";
import design from "../Components/DashboardComponents/statistics/styles.module.css";

function Student() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/student/courses" exact>
            <Studentcourses />
          </Route>
          <Route path="/student/studentlist" exact>
            <Studentlist />
          </Route>
          <Route path="/student/studentcourse" exact>
            <Studentcourse />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Student;
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Components/DashboardComponents/sidebar/index.js";
import Studentcourse from "../Components/StudentComponent/studentcourse";
import Courses from "../Components/StudentComponent/courses";
import StudentList from "../Components/StudentComponent/studentlist";
import StudentProfile from "../Components/StudentComponent/profile";
import design from "../Components/DashboardComponents/statistics/styles.module.css";

function Student() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dashboard/student" exact>
            <StudentList />
          </Route>
          <Route path="/dashboard/student/courses" exact>
            <Studentcourse />
          </Route>
          <Route path="/dashboard/student/profile" exact>
            <StudentProfile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Student;

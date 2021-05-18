import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Components/DashboardComponents/sidebar/index.js";
import Studentcourse from "../Components/StudentComponent/studentcourse";
import Courses from "../Components/StudentComponent/courses";
import StudentList from "../Components/StudentComponent/studentlist";
import StudentProfile from "../Components/StudentComponent/profile";
import design from "../Components/DashboardComponents/statistics/styles.module.css";
import NewStudent from "../Components/StudentComponent/newstudent/index.js";

function Student() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dashboard/student" exact>
            <StudentList />
          </Route>
          <Route path="/dashboard/student/:id/courses" exact>
            <Courses/>
          </Route>
          <Route path="/dashboard/student/coursedetails" exact>
            <Studentcourse/>
          </Route>
          <Route path="/dashboard/student/:id/profile" exact>
            <StudentProfile />
          </Route>
          <Route path="/dashboard/student/newstudent" exact>
            <NewStudent />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Student;

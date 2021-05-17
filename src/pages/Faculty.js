import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Components/DashboardComponents/sidebar/index.js";
import FacultyList from "../Components/DashboardComponents/faculty/facultylist";
import FacultyProfile from "../Components/FacultyComponents/profile/index";
import design from "../Components/DashboardComponents/statistics/styles.module.css";
import NewFaculty from "../Components/FacultyComponents/newfaculty/index.js";
import FacultyCourses from "../Components/FacultyComponents/courses/index.js";
import FacultyCourse from "../Components/FacultyComponents/facultycourse/index.js";
import FacultyEditCourses from "../Components/FacultyComponents/editcoursesfaculty/index.js";

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
          <Route path="/dashboard/faculty/courses" exact>
            <FacultyCourses/>
          </Route>
          <Route path="/dashboard/faculty/courses/edit" exact>
            <FacultyEditCourses/>
          </Route>
          <Route path="/dashboard/faculty/coursedetails" exact>
            <FacultyCourse/>
          </Route>
          <Route path="/dashboard/faculty/newfaculty" exact>
            <NewFaculty/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Components/DashboardComponents/sidebar/index.js";
import studentprofile from "../Components/StudentComponent/profile/index";
import studentcourses from "../Components/StudentComponent/courses/index";
import studentlist from "../Components/StudentComponent/studentlist/index";
import design from "../Components/DashboardComponents/statistics/styles.module.css";

function AppBox(){
    return(
        <div>
        <div className={design.ContainerBox}>
          <Sidebar />
          <Router>
            <Switch>
              <Route
                path="/student/courses"
                exact
                component={studentcourses}
              ></Route>
              <Route
                path="/student/studentlist"
                exact
                component={studentlist}
              ></Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
}

export default AppBox;
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Sidebar from "../Components/DashboardComponents/sidebar/index.js";
import Dashboardoverview from "../Components/DashboardComponents/overview";
import Dashboardstats from "../Components/DashboardComponents/statistics";
import design from "../Components/DashboardComponents/rightSideBar/rightSideBar.module.css";
import Student from "./Student";
import Faculty from "./Faculty.js";
import { Button } from "@material-ui/core";
import { useUser } from "../contexts/user";

function Dashboard() {
  const history = useHistory();
  const [state, dispatch] = useUser();
  const handleLogOut = () => {
    dispatch({
      type: "UNSET_USER",
    });
    localStorage.clear();
  };

  return (
    <div className={design.main}>
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
      <div className={design.RightSideBarMain}>
        <Button variant="contained" color="primary" onClick={handleLogOut}>
          logout
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;

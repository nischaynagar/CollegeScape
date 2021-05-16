import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import design from "./styles.module.css";
import homeicon from "./images/overview.svg";
import stats from "./images/statistics.svg";
import profile from "./images/profile.svg";
import admin from "./images/admin.svg";
import searchbar from "./images/searchbar.svg";
import mainpic from "./images/mainpic.svg";
import AttendanceGraph from "./Graph";

function Overview() {
  return (
    <>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <div className={design.optionname}>Search</div>
        </div>
        <div>
          <div className={design.title}>Overview</div>
        </div>
        <div className={design.attendence}>
          <div className={design.attendenceTitle}>Attendence</div>
          {/* <AttendanceGraph /> */}
          <AttendanceGraph />
        </div>
      </div>
    </>
  );
}

export default Overview;

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

function Statistics() {
  return (
    <>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <div className={design.optionname}>Search</div>
        </div>
        <div>
          <div className={design.title}>Statistics</div>
        </div>

        <div className={design.rowbox}>
          <div className={design.statbox}>
            <div className={design.statname}>Number of Students</div>
            <div className={design.outercircle}>
              <div className={design.innercircle}>
                <div className={design.data}>25</div>
              </div>
            </div>
          </div>
          <div className={design.statbox}>
            <div className={design.statname}>Number of Faculties</div>
            <div className={design.outercircle}>
              <div className={design.innercircle}>
                <div className={design.data}>1</div>
              </div>
            </div>
          </div>
          <div className={design.statbox}>
            <div className={design.statname}>Number of Courses</div>
            <div className={design.outercircle}>
              <div className={design.innercircle}>
                <div className={design.data}>15</div>
              </div>
            </div>
          </div>
          <div className={design.statbox}>
            <div className={design.statname}>Number of Working Days</div>
            <div className={design.outercircle}>
              <div className={design.innercircle}>
                <div className={design.data}>365</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;

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

function Appbox() {
  return (
    <>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <p className={design.optionname}>Search</p>
        </div>
        <div>
          <p className={design.title}>Statistics</p>
        </div>

        <div className={design.rowbox}>
          <div className={design.statbox}>
            <p>Number of Students</p>
          </div>
          <div className={design.statbox}></div>
        </div>
        <div className={design.rowbox}>
          <div className={design.statbox}></div>
          <div className={design.statbox}></div>
        </div>
      </div>
    </>
  );
}

export default Appbox;

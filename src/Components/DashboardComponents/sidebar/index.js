import React from "react";
import { Link, useLocation } from "react-router-dom";
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

function Sidebar() {
  return (
    <div className={design.leftbar}>
      <div className={design.profPicandName}>
        <div className={design.profile}>
          <img src={mainpic} alt="hello" className={design.mainphoto}></img>
        </div>
        <p className={design.profileName}>Bhole</p>
      </div>
      <div className={design.choices}>
        <Link to="/dashboard">
          <div className={design.option}>
            <img src={homeicon} alt="hello"></img>
            <p className={design.mainoption}>Overview</p>
          </div>
        </Link>
        <Link to="/dashboard/statistics">
          <div className={design.option}>
            <img src={stats} alt="hello"></img>
            <p className={design.optionnames}>Statistics</p>
          </div>
        </Link>
        <Link to="/dashboard/student">
          <div className={design.option}>
            <img src={profile} alt="hello"></img>
            <p className={design.optionnames}>Student</p>
          </div>
        </Link>
        <Link to="/dashboard/faculty">
          <div className={design.option}>
            <img src={profile} alt="hello"></img>
            <p className={design.optionnames}>Faculty</p>
          </div>
        </Link>
        <Link to="/dashboard/profile">
          <div className={design.option}>
            <img src={profile} alt="hello"></img>
            <p className={design.optionnames}>Profile</p>
          </div>
        </Link>
        <Link to="/dashboard/admin">
          <div className={design.option}>
            <img src={admin} alt="hello"></img>
            <p className={design.optionnames}>Admin</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

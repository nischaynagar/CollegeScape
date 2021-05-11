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

function Sidebar() {
  return (
    <div className={design.leftbar}>
      <div className={design.profile}>
        <img src={mainpic} alt="hello" className={design.mainphoto}></img>
      </div>
      <p className={design.profileName}>Chodu Bhole</p>
      <div className={design.choices}>
        <div className={design.option}>
          <img src={homeicon} alt="hello"></img>
          <p className={design.mainoption}>Overview</p>
        </div>
        <div className={design.option}>
          <img src={stats} alt="hello"></img>
          <p className={design.optionnames}>Statistics</p>
        </div>
        <div className={design.option}>
          <img src={profile} alt="hello"></img>
          <p className={design.optionnames}>Profile</p>
        </div>
        <div className={design.option}>
          <img src={admin} alt="hello"></img>
          <p className={design.optionnames}>Admin</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
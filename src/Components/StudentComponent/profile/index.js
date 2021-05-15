import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import searchbar from "./images/searchbar.svg";
import arrow from "./images/arrow.svg";
import design from './profile.module.css'
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";



function StudentProfile() {
  return (
    <>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <p className={design.optionname}>Search</p>
        </div>
        <div className={design.heading}>
          <p className={design.title}>Student's Profile</p>
          <div className={design.moveBackWrapper}>
            <img className={design.moveBackImg} src={arrow} alt="move back"/>
            <h4 className={design.moveBackText} >Move Back</h4>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default StudentProfile;

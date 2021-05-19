import { HashRouter as Router, Switch, Route } from "react-router-dom";
import design from "./styles.module.css";
import searchbar from "./images/searchbar.svg";
import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import mainpic from "./images/mainpic.svg";
import arrow from "./images/arrow.svg";

function FacultyCourse() {
  return (
    <div>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <p className={design.optionname}>Search</p>
        </div>
        <div className={design.heading}>
          <p className={design.title}>Teacher's course</p>
          <div className={design.sideback}>
            <img src={arrow} alt="hello"></img>
            <p className={design.back}>Move back</p>
          </div>
        </div>
        <div className={design.coursebox}>
          <p className={design.coursename}>
            DAA - (Dynamic Programming of Algorithm and Analysis)
          </p>
          <p className={design.faculty}>Assigned faculty : R.Kala</p>
          <p className={design.semester}>BTech IT</p>
          <div className={design.resultbox}>
            <div className={design.attendence}>
              <p className={design.attendencetitle}>Attendence</p>
              <div className={design.outercircle}>
                <div className={design.innercircle}>
                  <p className={design.data}>69%</p>
                </div>
              </div>
            </div>
            <div className={design.cgpabox}>
              <div className={design.gradebox}>
                <p className={design.firstone}>C1</p>
                <p className={design.secondone1}>Graded</p>
              </div>
              <div className={design.gradebox}>
                <p className={design.firstone}>C2</p>
                <p className={design.secondone1}>Conducted</p>
              </div>
              <div className={design.gradebox}>
                <p className={design.firstone}>C3</p>
                <p className={design.secondone1}>Remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyCourse;

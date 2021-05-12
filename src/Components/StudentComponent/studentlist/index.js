import { HashRouter as Router, Switch, Route } from "react-router-dom";
import design from "./styles.module.css";
import searchbar from "./images/searchbar.svg";
import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import mainpic from "./images/mainpic.svg";

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(268.87deg, #4776FF -0.38%, #FF6B81 116.03%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

function AppBox() {
  return (
    <div>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <p className={design.optionname}>Search</p>
        </div>
        <div className={design.heading}>
          <p className={design.title}>Students</p>
          <StyledButton className={design.addbutton}>
            Add New Student
          </StyledButton>
        </div>
        <div className={design.studentbranch}>
          <p className={design.branchname}>BTech IT</p>
          <div className={design.studentbox}>
            <img src={mainpic} alt="hello" className={design.photo}></img>
            <p className={design.id}>IIT2019232</p>
            <p className={design.name}>Bineet Memers</p>
          </div>
          <div className={design.studentbox}>
            <img src={mainpic} alt="hello" className={design.photo}></img>
            <p className={design.id}>IIT2019232</p>
            <p className={design.name}>Goti Warriors</p>
          </div>
          <div className={design.studentbox}>
            <img src={mainpic} alt="hello" className={design.photo}></img>
            <p className={design.id}>IIT2019232</p>
            <p className={design.name}>Chodu Bholu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBox;

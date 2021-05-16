import React, { useState, useEffect, useRef } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import design from "./facultylist.module.css";
import searchbar from "../../../../images/searchbar.svg";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import mainpic from "../../../../images/mainpic.svg";
import { Link, useLocation } from "react-router-dom";

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(268.87deg, #4776FF -0.38%, #FF6B81 116.03%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    outline: "none !important",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

function FacultyList() {
  const history = useHistory();

  const handleOpenprofile = () => {
    history.push("./faculty/profile");
  };

  return (
    <div>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <p className={design.optionname}>Search</p>
        </div>
        <div className={design.heading}>
          <p className={design.title}>Faculties</p>
          <Link to="/dashboard/faculty/newfaculty" style={{ textDecoration: "none" }}>
          <StyledButton>Add New Faculty</StyledButton>
          </Link>
        </div>
        <div className={design.facultybranch}>
          <div className={design.facultybox} onClick={handleOpenprofile}>
            <img src={mainpic} alt="hello" className={design.photo}></img>
            <p className={design.id}>IIT2019232</p>
            <p className={design.name}>Bineet Wagh</p>
          </div>
          <div className={design.facultybox} onClick={handleOpenprofile}>
            <img src={mainpic} alt="hello" className={design.photo}></img>
            <p className={design.id}>IIT2019198</p>
            <p className={design.name}>Nischay Nagar</p>
          </div>
          <div className={design.facultybox} onClick={handleOpenprofile}>
            <img src={mainpic} alt="hello" className={design.photo}></img>
            <p className={design.id}>IIT2019194</p>
            <p className={design.name}>Rahul Rai</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyList;

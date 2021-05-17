import { HashRouter as Router, Switch, Route } from "react-router-dom";
import design from "./styles.module.css";
import searchbar from "./images/searchbar.svg";
import arrow from "./images/arrow.svg";
import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import "./bootstrap-css/bootstrap.min.css";import { styled } from "@material-ui/core/styles";
import mButton from "@material-ui/core/Button";

const CoursesButton = styled(mButton)({
  fontSize: "1.3vw",
  width: "23vw",
  margin: "auto",
  color: "white",
  fontWeight: "normal",
  textTransform: "none",
  fontFamily: "Montserrat",
  // transition: "all 0.9s ease-in-out",
  background:
    "#0E2A47",
  // border: 0,
  // borderRadius: 3,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.23)",
  borderRadius: "10px",
  height: 48,
  padding: "0 30px",
  "&:hover": {
    background:
      "#216FC0",
  },
});


function FacultyCourses() {
  return (
    <div>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <div className={design.optionname}>Search</div>
        </div>
        <div className={design.heading}>
          <div className={design.title}> R.Kala's Courses</div>
          <div className={design.sideback}>
            <img src={arrow} alt="hello"></img>
            <div className={design.back}>Move back</div>
          </div>
        </div>
        <div className={design.core}>
          <div className={design.slidecomponent}>


            <div className={design.slider}>
              <div className={design.courseboxupper}>
                <div className={design.ctitle}>DBMS</div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxupper}>
                <div className={design.ctitle}>DBMS</div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxupper}>
                <div className={design.ctitle}>DBMS</div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxupper}>
                <div className={design.ctitle}>DBMS</div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxupper}>
                <div className={design.ctitle}>DBMS</div>
              </div>
            </div><div className={design.slider}>
              <div className={design.courseboxupper}>
                <div className={design.ctitle}>DBMS</div>
              </div>
            </div>           
            
          </div>
        </div>
        <div className={design.core}>
          <div className={design.slidecomponent}>
          
            <div className={design.slider}>
              <div className={design.courseboxlower}>
                <div className={design.ctitle}>DBMS</div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxlower}>
                <div className={design.ctitle}>DBMS</div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxlower}>
                <div className={design.ctitle}>DBMS</div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxlower}>
                <div className={design.ctitle}>DBMS</div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxlower}>
                <div className={design.ctitle}>DBMS</div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxlower}>
                <div className={design.ctitle}>DBMS</div>
              </div>
            </div>


          </div>
        </div>

        <CoursesButton>Edit courses</CoursesButton>


      </div>
    </div>
  );
}

export default FacultyCourses;

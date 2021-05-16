import { HashRouter as Router, Switch, Route } from "react-router-dom";
import design from "./styles.module.css";
import searchbar from "./images/searchbar.svg";
import arrow from "./images/arrow.svg";
import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import "./bootstrap-css/bootstrap.min.css";

function Courses() {
  return (
    <div>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <div className={design.optionname}>Search</div>
        </div>
        <div className={design.heading}>
          <div className={design.title}> Bhole's Courses</div>
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
                <div className={design.outercircleupper}>
                  <div className={design.innercircle}>
                    <div className={design.data}>15</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxupper}>
                <div className={design.ctitle}>DBMS</div>
                <div className={design.outercircleupper}>
                  <div className={design.innercircle}>
                    <div className={design.data}>15</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxupper}>
                <div className={design.ctitle}>DBMS</div>
                <div className={design.outercircleupper}>
                  <div className={design.innercircle}>
                    <div className={design.data}>15</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxupper}>
                <div className={design.ctitle}>DBMS</div>
                <div className={design.outercircleupper}>
                  <div className={design.innercircle}>
                    <div className={design.data}>15</div>
                  </div>
                </div>
              </div>
            </div>

           
            
          </div>
        </div>
        <div className={design.core}>
          <div className={design.slidecomponent}>
            <div className={design.slider}>
              <div className={design.courseboxlower}>
                <div className={design.ctitle}>DBMS</div>
                <div className={design.outercirclelower}>
                  <div className={design.innercircle}>
                    <div className={design.data}>15</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={design.slider}>
              <div className={design.courseboxlower}>
                <div className={design.ctitle}>DBMS</div>
                <div className={design.outercirclelower}>
                  <div className={design.innercircle}>
                    <div className={design.data}>15</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxlower}>
                <div className={design.ctitle}>DBMS</div>
                <div className={design.outercirclelower}>
                  <div className={design.innercircle}>
                    <div className={design.data}>15</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxlower}>
                <div className={design.ctitle}>DBMS</div>
                <div className={design.outercirclelower}>
                  <div className={design.innercircle}>
                    <div className={design.data}>15</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={design.slider}>
              <div className={design.courseboxlower}>
                <div className={design.ctitle}>DBMS</div>
                <div className={design.outercirclelower}>
                  <div className={design.innercircle}>
                    <div className={design.data}>15</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

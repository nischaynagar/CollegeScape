import { HashRouter as Router, Switch, Route } from "react-router-dom";
import design from "./styles.module.css";
import searchbar from "./images/searchbar.svg";
import arrow from "./images/arrow.svg";
import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import "./bootstrap-css/bootstrap.min.css";

function AppBox() {
  return (
    <div>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <p className={design.optionname}>Search</p>
        </div>
        <div className={design.heading}>
          <p className={design.title}> Bhole's Courses</p>
          <div className={design.sideback}>
            <img src={arrow} alt="hello"></img>
            <p className={design.back}>Move back</p>
          </div>
        </div>
        <div className={design.core}>
          <Carousel className={design.slidecomponent}>
            <Carousel.Item className={design.slider}>
              <div className={design.courseboxupper}>
                <p className={design.title}>DBMS</p>
                <div className={design.outercircle1}>
                  <div className={design.innercircle}>
                    <p className={design.data}>15</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className={design.slider}>
              <div className={design.courseboxupper}>
                <p className={design.title}>DBMS</p>
                <div className={design.outercircle1}>
                  <div className={design.innercircle}>
                    <p className={design.data}>15</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className={design.slider}>
              <div className={design.courseboxupper}>
                <p className={design.title}>DBMS</p>
                <div className={design.outercircle1}>
                  <div className={design.innercircle}>
                    <p className={design.data}>15</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={design.core}>
          <Carousel className={design.slidecomponent}>
            <Carousel.Item className={design.slider}>
              <div className={design.courseboxlower}>
                <p className={design.title}>DBMS</p>
                <div className={design.outercircle2}>
                  <div className={design.innercircle}>
                    <p className={design.data}>15</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className={design.slider}>
              <div className={design.courseboxlower}>
                <p className={design.title}>DBMS</p>
                <div className={design.outercircle2}>
                  <div className={design.innercircle}>
                    <p className={design.data}>15</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className={design.slider}>
              <div className={design.courseboxlower}>
                <p className={design.title}>DBMS</p>
                <div className={design.outercircle2}>
                  <div className={design.innercircle}>
                    <p className={design.data}>15</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default AppBox;

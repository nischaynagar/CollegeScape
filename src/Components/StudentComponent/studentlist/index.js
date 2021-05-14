import { HashRouter as Router, Switch, Route } from "react-router-dom";
import design from "./styles.module.css";
import searchbar from "./images/searchbar.svg";
import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import mainpic from "./images/mainpic.svg";
import axios from "axios";
import { url } from "../../../constants";

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

var students = [];
function StudentList() {

  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    axios.get(`${url}api/studs`)
      .then( res => {
        console.log("RR:", res);
        students = Array.from(res.data);
        setloaded(true);
      })
      .catch( err => {
        console.log("Err: ", err)
      })
  }, [])

  return (
    <div>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <p className={design.optionname}>Search</p>
        </div>
        <div className={design.heading}>
          <p className={design.title}>Students</p>
          <StyledButton>Add New Student</StyledButton>
        </div>
        <div className={design.studentbranch}>
          <p className={design.branchname}>BTech IT</p>

          {
            loaded && (students.length > 0) && (
              students.map(e => {
                return (
                  <EachField name={e.firstName + " " + e.lastName} roll = {e.id} />
                )
              })
            )
          }
          
          {/* <div className={design.studentbox}>
            <img src={mainpic} alt="hello" className={design.photo}></img>
            <p className={design.id}>IIT2019198</p>
            <p className={design.name}>Nischay Nagar</p>
          </div>
          <div className={design.studentbox}>
            <img src={mainpic} alt="hello" className={design.photo}></img>
            <p className={design.id}>IIT2019194</p>
            <p className={design.name}>Rahul Rai</p>
          </div> */}

        </div>
      </div>
    </div>
  );
}

const EachField = (props) => {
  return(
    <div className={design.studentbox}>
      <img src={mainpic} alt="hello" className={design.photo}></img>
      <p className={design.id}>{props.roll}</p>
      <p className={design.name}>{props.name}</p>
    </div>
  )
}

export default StudentList;

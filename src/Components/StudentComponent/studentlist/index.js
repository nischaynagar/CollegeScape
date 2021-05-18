import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
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
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

let students = [];
function StudentList() {
  const history = useHistory();
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    axios
      .get(`${url}api/studs`)
      .then((res) => {
        console.log("RR:", res);
        students = Array.from(res.data);
        setloaded(true);
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
  }, []);

  const EachField = (props) => {
    return (
      <div
        className={design.studentbox}
        onClick={() => history.push(`./student/profile/${props.roll}`)}
      >
        <div className={design.RollAndPic}>
          <img src={mainpic} alt="hello" className={design.photo}></img>
          <div className={design.id}>{props.roll}</div>
        </div>
        <div className={design.name}>{props.name}</div>
      </div>
    );
  };

  return (
    <div>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <div className={design.optionname}>Search</div>
        </div>
        <div className={design.heading}>
          <div className={design.title}>Students</div>
          <Link
            to="/dashboard/student/newstudent"
            style={{ textDecoration: "none" }}
          >
            <StyledButton>Add New Student</StyledButton>
          </Link>
        </div>
        <div className={design.studentbranch}>
          <div className={design.branchname}>BTech IT</div>

          {loaded &&
            students.length > 0 &&
            students.map((e) => {
              return (
                <EachField name={e.firstName + " " + e.lastName} roll={e.id} />
              );
            })}

          {/* <div className={design.studentbox}>
            <img src={mainpic} alt="hello" className={design.photo}></img>
            <div className={design.id}>IIT2019198</div>
            <div className={design.name}>Nischay Nagar</div>
          </div>
          <div className={design.studentbox}>
            <img src={mainpic} alt="hello" className={design.photo}></img>
            <div className={design.id}>IIT2019194</div>
            <div className={design.name}>Rahul Rai</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default StudentList;

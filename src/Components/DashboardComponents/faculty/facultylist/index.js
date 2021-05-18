import React, { useState, useEffect, useRef } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
  useLocation
} from "react-router-dom";
import design from "./facultylist.module.css";
import searchbar from "../../../../images/searchbar.svg";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import mainpic from "../../../../images/mainpic.svg";
import axios from "axios";
import { url } from "../../../../constants";

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

var faculties = [];

function FacultyList() {
  const history = useHistory();
  const [loaded, setloaded] = useState(false);

  // const handleOpenprofile = () => {
  //   history.push("./faculty/profile");
  // };

  useEffect(() => {
    axios
      .get(`${url}api/facts`)
      .then((res) => {
        console.log("RR:", res);
        faculties = Array.from(res.data);
        setloaded(true);
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
  }, []);

  return (
    <div>
      <div className={design.overview}>
        <div className={design.searchmenu}>
          <img src={searchbar} alt="hello"></img>
          <p className={design.optionname}>Search</p>
        </div>
        <div className={design.heading}>
          <p className={design.title}>Faculties</p>
          <Link
            to="/dashboard/faculty/newfaculty"
            style={{ textDecoration: "none" }}
          >
            <StyledButton>Add New Faculty</StyledButton>
          </Link>
        </div>
        <div className={design.facultybranch}>
          {loaded &&
            faculties.length > 0 &&
            faculties.map((e) => {
              return (
                <EachField name={e.firstName + " " + e.lastName} roll={e.id} />
              );
            })}

          {/* <div className={design.facultybox} onClick={handleOpenprofile}>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

const EachField = (props) => {
  return (
    <div className={design.facultybox}>
      <div className={design.RollAndPic}>
        <img src={mainpic} alt="hello" className={design.photo}></img>
        <div className={design.id}>{props.roll}</div>
      </div>
      <div className={design.name}>{props.name}</div>
    </div>
  );
};

export default FacultyList;

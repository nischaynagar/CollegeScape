import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import searchbar from "./images/searchbar.svg";
import arrow from "./images/arrow.svg";
import mainpic from "./images/mainpic.svg";
import design from './styles.module.css'
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from "@material-ui/core/styles";
import mButton from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from "axios";
import { url } from "../../../constants";
import { useHistory } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';

const CustomCheckbox = withStyles({
  root: {
    color: "#834BFF",
    '&$checked': {
      color: "#834BFF",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


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




// const firstName = "Rahul";
// const email = "rahulrai@orissa.com";
// const dob = "01-01-2018";
// const enrollmentNumber = "IIT2019194";
// const batch = "IT2019";
// const lastName = "Rai";
// const mobile = "+91692437294";

let courses = [];

function FacultyEditCourses() {

  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    axios
      .get(`${url}api/coursedisp`)
      .then((res) => {
        console.log("RR:", res);
        courses = Array.from(res.data);
        setloaded(true);
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
  }, []);

  const [courseName, setCourseName] = useState();
  const [courseId, setCourseId] = useState();
  const [facultyName, setFaculty] = useState();

  const forCourseName = (event) => {
    setCourseName(event.target.value);
  };

  const forCourseId = (event) => {
    setCourseId(event.target.value);
  };

  const forFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const history = useHistory();

  // const sendData = (event) => {
  //   event.preventDefault();
  //   //  console.log("Final Data sent is :",finalfirstName," ",finallastName," ",finalenrlnum," ",finalemailaddr," ",finalgender," ",finalphn," ",finalbatch," ",finaldob); 
  //   console.log(" Data -c sent  :", courseName, " ", courseId, " ", facultyName);
  //   axios.post(`${url}api/insertc`, {
  //     "coursename": courseName,
  //     "courseid": courseId,
  //     "faculty": facultyName,
  //   })
  //     .then((res) => {
  //       console.log("Entry registered in courses list: ", res);
  //       history.push("/dashboard/faculty/courses/edit");
  //     })
  //     .catch((err) => {
  //       console.log("Failed to register course: ", err);
  //     }
  //     )
  // };

  const EachField = (props) => {
    return (
      <div className={design.coursebox}>
        <div className={design.checkbox}>
          <CustomCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />
        </div>
        <div className={design.name}>{props.cid}</div>
      </div>
    );
  };

  return (
    <>
      <div className={design.overview}>
        <div className={design.headingWrapper}>
          <div className={design.heading}>
            <p className={design.title}>Select courses</p>
            <div className={design.moveBackWrapper}>
              <img className={design.moveBackImg} src={arrow} alt="move back" />
              <h4 className={design.moveBackText} >Move Back</h4>
            </div>
          </div>
        </div>
        <div className={design.profileDetailsWrapper}>

          {loaded &&
            courses.length > 0 &&
            courses.map((e) => {
              return (
                <EachField cid={e.courseID}/>
              );
            })}


          {/* <div className={design.coursebox}>
            <div className={design.checkbox}>
              <CustomCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />
            </div>
            <div className={design.name}>DBMS</div>
          </div>
          <div className={design.coursebox}>
            <div className={design.checkbox}>
              <CustomCheckbox checked={state.checkedB} onChange={handleChange} name="checkedB" />
            </div>
            <div className={design.name}>SE</div>
          </div>
          <div className={design.coursebox}>
            <div className={design.checkbox}>
              <CustomCheckbox checked={state.checkedF} onChange={handleChange} name="checkedF" />
            </div>
            <div className={design.name}>DAA</div>
          </div>
          <div className={design.coursebox}>
            <div className={design.checkbox}>
              <CustomCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />
            </div>
            <div className={design.name}>PUBG</div> */}
          {/* </div> */}



          <CoursesButton>Save</CoursesButton>
        </div>
      </div>
    </>
  );
}



export default FacultyEditCourses;

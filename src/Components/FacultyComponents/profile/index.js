import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import searchbar from "./images/searchbar.svg";
import arrow from "./images/arrow.svg";
import mainpic from "./images/mainpic.svg";
import design from './profile.module.css'
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
import {useHistory} from "react-router-dom";


const genders = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  }
];

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

const ChangesButton = styled(mButton)({
  fontSize: "1.3vw",
  width: "23vw",
  margin: "auto",
  color: "white",
  fontWeight: "normal",
  textTransform: "none",
  fontFamily: "Montserrat",
  // transition: "all 0.9s ease-in-out",
  background:
    "#834BFF",
  // border: 0,
  // borderRadius: 3,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.23)",
  borderRadius: "10px",
  height: 48,
  padding: "0 30px",
  "&:hover": {
    background:
      "#C0A4FF",
  },
});

const useStyles = {
    margin: '1rem 3rem',
    '& .MuiTextField-root': {
      width: '25ch',
    }
};


// const firstName = "Rahul";
// const email = "rahulrai@orissa.com";
// const dob = "01-01-2018";
// const enrollmentNumber = "IIT2019194";
// const batch = "IT2019";
// const lastName = "Rai";
// const mobile = "+91692437294";



function FacultyProfile() {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [facultyID, setFacultyID] = useState();
  const [emailaddr, setemailaddr] = useState();
  const [batch, setBatch] = useState();
  // const [gender, setGender] = useState();
  const [dob, setdob] = useState();
  const [phn, setphn] = useState();

  const forFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const forLastName = (event) => {
    setLastName(event.target.value);
  };

  const forFacultyID = (event) => {
    setFacultyID(event.target.value);
  };

  const forEmail = (event) => {
    setemailaddr(event.target.value);
  };

  const forBatch = (event) => {
    setBatch(event.target.value);
  };

  const forphn = (event) => {
    setphn(event.target.value);
  };
  
  const history = useHistory();

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  

  const [gender, setGender] = React.useState('female');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setdob(selectedDate);
    console.log("date:",date)
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };
 
  const sendData=(event)=>{
    event.preventDefault();
  //  console.log("Final Data sent is :",finalfirstName," ",finallastName," ",finalenrlnum," ",finalemailaddr," ",finalgender," ",finalphn," ",finalbatch," ",finaldob); 
   console.log(" Data -c sent  :",firstName," ",lastName," ",facultyID," ",emailaddr," ",gender," ",phn," ",batch," ",dob);
   axios.post(`${url}api/inserts`,{
    "firstName":firstName,
    "lastName":lastName,
    "id":facultyID,
    "emailAddress":emailaddr,
    "sex":gender,
    "phoneno":phn,
    "currentbatch":batch,
    "doB":dob
   })  
   .then((res)=>{
     console.log("Entry registered in faculty list: ",res);
     history.push("/dashboard/faculty");
   })
   .catch((err)=>{
     console.log("Failed to register faculty: ",err);}
 ) 
 };

  return (
    <>
      <div className={design.overview}>
        <div className={design.headingWrapper}>
          <div className={design.heading}>
            <p className={design.title}>Faculty's Profile</p>
            <div className={design.moveBackWrapper}>
              <img className={design.moveBackImg} src={arrow} alt="move back"/>
              <h4 className={design.moveBackText} >Move Back</h4>
            </div>
          </div>
        </div>
        <div className={design.profileDetailsWrapper}>
            <div className={design.col1}>
              <img className={design.profileImg} src={mainpic} alt="student"/>
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="First Name"
                // defaultValue={firstName}
                value={firstName}
                variant="outlined"
                onChange={forFirstName}
              />
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Email"
                value={emailaddr}
                variant="outlined"
                onChange={forEmail}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  style={useStyles}
                  disableToolbar
                  required
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date of birth"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
              <CoursesButton>Assigned Courses</CoursesButton>
            </div>
            <div className={design.col2}>
            <TextField
              style={useStyles}
                required
                id="outlined-required"
                label="Faculty ID"
                value={facultyID}
                variant="outlined"
                onChange={forFacultyID}
              />
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Batch"
                value={batch}
                variant="outlined"
                onChange={forBatch}
              />
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Last Name"
                value={lastName}
                variant="outlined"
                onChange={forLastName}
              />
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Phone number"
                value={phn}
                variant="outlined"
                onChange={forphn}
              />
              <TextField
                style={useStyles}
                required
                select
                id="outlined-required"
                label="Gender"
                onChange={handleChange}
                value={gender}
                defaultValue={gender}
                variant="outlined"
              >{genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}</TextField>

              
              {/* <ChangesButton onChange={sendData}>Apply Changes</ChangesButton> */}
              <button className="btn btn-success space" type="submit" onClick={sendData}>
                  Save changes
                </button>              
            </div>
        </div>
      </div>
    </>
  );
}

export default FacultyProfile;

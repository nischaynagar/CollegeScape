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


const firstName = "Rahul";
const email = "rahulrai@orissa.com";
const dob = "01-01-2018";
const enrollmentNumber = "IIT2019194";
const batch = "IT2019";
const lastName = "Rai";
const mobile = "+91692437294";



function StudentProfile() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  

  const [gender, setGender] = React.useState('female');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      <div className={design.overview}>
        <div className={design.headingWrapper}>
          <div className={design.heading}>
            <p className={design.title}>Student's Profile</p>
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
                defaultValue={firstName}
                variant="outlined"
              />
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Email"
                defaultValue={email}
                variant="outlined"
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
              <CoursesButton>Enrolled Courses</CoursesButton>
            </div>
            <div className={design.col2}>
            <TextField
              style={useStyles}
                required
                id="outlined-required"
                label="Enrollment Number"
                defaultValue={enrollmentNumber}
                variant="outlined"
              />
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Batch"
                defaultValue={batch}
                variant="outlined"
              />
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Last Name"
                defaultValue={lastName}
                variant="outlined"
              />
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Phone number"
                defaultValue={mobile}
                variant="outlined"
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

              
              <ChangesButton>Apply Changes</ChangesButton>
            </div>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;

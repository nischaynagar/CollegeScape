import React, { useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import searchbar from "./images/searchbar.svg";
import arrow from "./images/arrow.svg";
import mainpic from "./images/mainpic.svg";
import design from "./profile.module.css";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import mButton from "@material-ui/core/Button";
import { useUser } from "../../../contexts/user";

const ChangesButton = styled(mButton)({
  fontSize: "1.3vw",
  width: "23vw",
  margin: "auto",
  color: "white",
  fontWeight: "normal",
  textTransform: "none",
  fontFamily: "Montserrat",
  // transition: "all 0.9s ease-in-out",
  background: "#834BFF",
  // border: 0,
  // borderRadius: 3,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.23)",
  borderRadius: "10px",
  height: 48,
  padding: "0 30px",
  "&:hover": {
    background: "#C0A4FF",
  },
});

const useStyles = {
  margin: "1rem 3rem",
  "& .MuiTextField-root": {
    width: "25ch",
  },
};

const firstName = "Rahul";
const email = "rahulrai@orissa.com";
const lastName = "Rai";
const mobile = "+91692437294";

function CurrentAdminProfile() {
  const history = useHistory();
  const [state, dispatch] = useUser();

  const handleGoBack = () => {
    history.push("./");
  };

  return (
    <>
      <div className={design.overview}>
        <div className={design.headingWrapper}>
          <div className={design.heading}>
            <p className={design.title}>Profile</p>
            {/* <div className={design.moveBackWrapper} onClick={handleGoBack}>
              <img className={design.moveBackImg} src={arrow} alt="move back" />
              <h4 className={design.moveBackText}>Move Back</h4>
            </div> */}
          </div>
        </div>
        <div className={design.detailsWrapperMain}>
          <img className={design.profileImg} src={mainpic} alt="student" />
          <div className={design.profileDetailsWrapper}>
            <div className={design.col1}>
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="First Name"
                defaultValue={state.user.firstName}
                variant="outlined"
              />
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Email"
                defaultValue={state.user.email}
                variant="outlined"
              />
            </div>
            <div className={design.col2}>
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Last Name"
                defaultValue={state.user.lastName}
                variant="outlined"
              />
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Phone number"
                defaultValue={state.user.mobile}
                variant="outlined"
              />
            </div>
          </div>
          <ChangesButton className={design.changesButton}>
            Apply Changes
          </ChangesButton>
        </div>
      </div>
    </>
  );
}

export default CurrentAdminProfile;

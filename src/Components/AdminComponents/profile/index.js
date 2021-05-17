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
import axios from "axios";
import { url } from "../../../constants";

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

function CurrentAdminProfile() {
  const history = useHistory();
  const [state, dispatch] = useUser();
  const [firstName, setFirstName] = useState(state.user.firstName);
  const [lastName, setLastName] = useState(state.user.lastName);
  const [email, setEmail] = useState(state.user.email);
  const [contact, setContact] = useState(state.user.contact);

  const handleGoBack = () => {
    history.goBack();
  };

  const UpdateAdminProfile = () => {
    axios
      .put(`${url}api/update_admin`, {
        username: state.user.username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        contact: contact,
      })
      .then((res) => {
        setUpdatedUserToLocalStorage();
        dispatch({
          type: "UPDATE_USER",
          user: {
            username: state.user.username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setUpdatedUserToLocalStorage = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: state.user.username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        contact: contact,
      })
    );
    console.log(localStorage.getItem("user"));
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
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={design.col2}>
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                style={useStyles}
                required
                id="outlined-required"
                label="Phone number"
                variant="outlined"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>
          <ChangesButton
            className={design.changesButton}
            onClick={UpdateAdminProfile}
          >
            Apply Changes
          </ChangesButton>
        </div>
      </div>
    </>
  );
}

export default CurrentAdminProfile;

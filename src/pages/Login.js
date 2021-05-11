import React from "react";
import design from "../Components/LoginComponents/loginComponents.module.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "55vw",
      maxWidth: "310px",
      "& .MuiInput-underline:after": {
        borderBottomColor: "black",
      },
    },
    display: "flex",
    gap: "10px",
    flexDirection: "column",
  },
}));

const StyledButton = withStyles({
  root: {
    background: "#393e46",
    borderRadius: 7,
    border: 0,
    color: "white",
    width: "55vw",
    maxWidth: 310,
    height: 35,
    margin: "30px 0 10px 0",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      background: "black",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export default function Login() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={design.LoginBox}>
      <div className={design.column1}>
        <p className={design.heading}>Login</p>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Email" />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
          />
        </form>
        <StyledButton
          className={design.submitbutton}
          onClick={() => history.push("/dashboard")}
        >
          Login
        </StyledButton>
        <p className={design.foot}>
          Forgot password? <div className={design.link}>click here</div>
        </p>
      </div>
      <div className={design.column2}></div>
    </div>
  );
}

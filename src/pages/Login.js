import React, { useState } from "react";
import design from "../Components/LoginComponents/loginComponents.module.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { url } from "../constants";
import { useUser } from "../contexts/user";

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

  const [state, dispatch] = useUser();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    Axios.get(`${url}api/auth`, {
      params: {
        AdminUserName: username,
        AdminPassword: password,
      },
    })
      .then((res) => {
        setLoading(false);
        if (parseInt(res.data.result) === 1) {
          console.log("success");
          dispatch({
            type: "SET_USER",
            user: {
              name: res.data.name,
              username: res.data.username,
            },
          });
          localStorage.setItem(
            "user",
            JSON.stringify({
              name: res.data.name,
              username: res.data.username,
            })
          );
          history.push("/dashboard");
        }
        if (parseInt(res.data.result) === 2) {
          setError("Wrong Password Entered!");
          setLoading(false);
        }
      })
      .catch((err) => {
        setError("No account with this username exist!");
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className={design.LoginBox}>
      <div className={design.column1}>
        <p className={design.heading}>Login</p>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <StyledButton
          className={design.submitbutton}
          // onClick={() => history.push("/dashboard")}
          onClick={handelLogin}
          disabled={loading}
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

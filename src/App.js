import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useUser } from "./contexts/user";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  const [state, dispatch] = useUser();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch({
        type: "SET_USER",
        user: JSON.parse(user),
      });
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/dashboard">
            {state.user ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" exact>
            {state.user ? <Redirect to="/dashboard"/>: <Login />}
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

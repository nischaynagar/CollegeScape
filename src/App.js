import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import design from "./styles.module.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import signup from './Components/LoginComponents/index.js';
import design from './styles.module.css';

function App() {
  return (
    <Router>
      <Switch>
        <div className={design.LoginBox}>
          <Route path='/' exact component={signup}></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

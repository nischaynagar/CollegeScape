import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import dashboardoverview from './Components/DashboardComponents/overview/index.js';
import dashboardstats from './Components/DashboardComponents/statistics/index.js';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/dashboard/overview" exact component={dashboardoverview}></Route>
          <Route path="/dashboard/statistics" exact component={dashboardstats}></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
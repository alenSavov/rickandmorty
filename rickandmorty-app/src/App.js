import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { makeStyles, Typography } from "@material-ui/core";
import theme, { defaultStyles } from './helpers/theme';

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Login from './components/Login';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import AllEpisodes from './components/AllEpisodes';
import Episode from './components/Episode';
import Location from './components/Location';

const useStyles = makeStyles(() => ({
}));

function App() {
  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");

  const classes = useStyles();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }

  }, []);

  return (
    <>
      <ThemeProvider theme={theme({})}>
        <Router>
          <PrivateRoute component={Header} />
          <div className={classes.root}>
            <Switch>
              <PrivateRoute path="/" exact component={AllEpisodes} />
              <PublicRoute restricted={true} path="/login" component={Login} />
              <PrivateRoute path="/search/" component={Search} />
              <PrivateRoute path="/allepisodes/" exact component={AllEpisodes} />
              <PrivateRoute path="/allepisodes/:id" exact component={Episode} />
              <PrivateRoute path="/location/" ecaxt component={Location} />
              <PrivateRoute path="/location/:id" ecaxt component={Location} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

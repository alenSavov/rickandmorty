import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Login from './components/Login';
import AllEpisodes from './components/AllEpisodes';
import Episode from './components/Episode';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

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
      <Router>
        <Header />
        <div className={classes.root}>
          <Switch>
            <PrivateRoute path="/" exact component={AllEpisodes} />
            <PublicRoute restricted={true} path="/login" component={Login} />
            <PrivateRoute path="/search/" component={Search} />
            <PrivateRoute path="/allepisodes/" exact component={AllEpisodes} />
            <PrivateRoute path="/allepisodes/:id" component={Episode} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

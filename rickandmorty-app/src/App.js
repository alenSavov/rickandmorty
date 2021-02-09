import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Search from './components/Search';
import Login from './components/Login';
import AllEpisodes from './components/AllEpisodes';
import EpisodeDetails from './components/EpisodeDetails';

function App() {
  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }

  }, []);

  const handleSubmit = details => {
    if (details.name === localStorage.getItem("user")) {
      console.log("Logged in");
      setUser({
        name: details.name
      });

      localStorage.setItem("user", details.name)
    } else {
      setError("Created new name");

      setUser({
        name: details.name
      });

      localStorage.setItem("user", details.name)
    }
  }

  const handleLogout = () => {
    console.log("Logout");

    setUser({});
    localStorage.clear();
  }

  return (
    <>
    <Router>
    <Header />
    <Switch>
    <Route path="/" exact component={AllEpisodes} />
          <Route path="/login" component={Login} />
          <Route path="/search/" component={Search} />
          <Route path="/allepisodes/" exact component={AllEpisodes} />
          <Route path="/allepisodes/:id" component={EpisodeDetails} />
    </Switch>
    </Router>
    </>
  );
}

export default App;

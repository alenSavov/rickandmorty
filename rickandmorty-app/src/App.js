import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Login from './components/Login';
import AllEpisodes from './components/AllEpisodes';
import EpisodeDetails from './components/EpisodeDetails';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

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

  // const handleSubmit = details => {
  //   if (details.name === localStorage.getItem("user")) {
  //     console.log("Logged in");
  //     setUser({
  //       name: details.name
  //     });

  //     localStorage.setItem("user", details.name)
  //   } else {
  //     setError("Created new name");

  //     setUser({
  //       name: details.name
  //     });

  //     localStorage.setItem("user", details.name)
  //   }
  // }

  // const handleLogout = () => {
  //   console.log("Logout");

  //   setUser({});
  //   localStorage.clear();
  // }

  // const fakeAuth = {
  //   isAuthenticated: true,
  //   authenticate(cb) {
  //     this.isAuthenticated = true
  //     setTimeout(cb, 100)
  //   },
  //   signout(cb) {
  //     this.isAuthenticated = false
  //     setTimeout(cb, 100)
  //   }
  // }

  // const PrivateRoute = ({ component: Component, ...rest }) => (
  //   <Route {...rest} render={(props) => (
  //     fakeAuth.isAuthenticated === true
  //       ? <Component {...props} />
  //       : <Redirect to='/login' />
  //   )} />
  // )



  return (
    <>
      <Router>
        <Header />
        <div class="root">
          <Switch>
            <PrivateRoute path="/" exact component={AllEpisodes} />
            <PublicRoute restricted={true} path="/login" component={Login} />
            <PrivateRoute path="/search/" component={Search} />
            <PrivateRoute path="/allepisodes/" exact component={AllEpisodes} />
            <PrivateRoute path="/allepisodes/:id" component={EpisodeDetails} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

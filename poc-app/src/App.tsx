import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import { User } from './models/user';
import NavbarComponent from './components/NavbarComponent';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function App() {
  // @ts-ignore
  const [authUser, setAuthUser] = useState(null as User);

  return (
    <>
    <Router>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h5" color ="inherit">
            <NavbarComponent authUser={authUser} />
          </Typography>
        </Toolbar>
      </AppBar>
    
    
      <Switch>
        <Route path="/home" render={() => <HomeComponent username={authUser?.username} /> } />
        <Route path="/login" render={() => <LoginComponent authUser={authUser} setAuthUser={setAuthUser} /> } />
      </Switch>
    </Router>

    
    
    </>
  );
}

export default App;

import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import NavbarComponent from './components/NavbarComponent';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import RegisterComponent from './components/RegisterComponent';
import { Employee } from './models/employee';

function App() {
  // @ts-ignore
  const [authUser, setAuthUser] = useState(null as Employee);
  // @ts-ignore
  const [registeredEmployee, setEmployee] = useState(null as Employee);

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
        <Route path="/home" render={() => <HomeComponent username={authUser?.username} newEmployee={registeredEmployee} /> } />
        <Route path="/login" render={() => <LoginComponent authUser={authUser} setAuthUser={setAuthUser} /> } />
        <Route path="/register" render={() => <RegisterComponent registeredEmployee={registeredEmployee} setEmployee={setEmployee} /> } />
      </Switch>
    </Router>

    
    
    </>
  );
}

export default App;

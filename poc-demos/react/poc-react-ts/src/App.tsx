import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RegisterComponent from './components/register-component/RegisterContainer';
import LoginComponent from './components/login-component/LoginContainer';
import HomeComponent from './components/home-component/HomeComponent';

import { User } from './models/user';
import NavbarComponent from './components/navbar-component/NavbarComponent';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from './Store';


const mockPosts = [
  {
    id: 1,
    title: 'post 1 title',
    body: 'post 1 body'
  },
  {
    id: 4,
    title: 'post 4 title',
    body: 'post 4 body'
  },
  {
    id: 6,
    title: 'post 6 title',
    body: 'post 6 body'
  }
]


function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <AppBar color="primary" position="static">
            <Toolbar>
              <Typography variant="h5" color="inherit">
                <NavbarComponent authUser={null as unknown as User} />
              </Typography>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route path="/home" render={() => <HomeComponent username={store.dispatch.name} posts={mockPosts} />} />
            <Route path="/login" render={() => <LoginComponent/>} />
            <Route path="/register" render={() => <RegisterComponent/>} />
          </Switch>

        </Router>
      </Provider>
    </>
  );
}

export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import HomeComponent from './components/home-component/HomeComponent';
import NavbarComponent from './components/navbar-component/NavbarComponent';
import LoginComponent from './components/login-component/LoginComponent';
import RegisterComponent from './components/register-component/RegisterComponent';


import { User } from './models/user';



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

  // @ts-ignore
  const [authUser, setAuthUser] = useState(null as User);
  // @ts-ignore
  const [newUser, setNewUser] = useState(null as User);

  return (
    <>
    <Provider store = store
      <Router>

        <AppBar color="primary" position="static">
          <Toolbar>
              <Typography variant="h5" color="inherit">
                <NavbarComponent authUser={authUser}/>
              </Typography>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/home" render={() => <HomeComponent username={authUser?.username} posts={mockPosts} /> } />
          <Route path="/login" render={() => <LoginComponent authUser={authUser} setAuthUser={setAuthUser} /> } />
          <Route path="/register" render={() => <RegisterComponent newUser={newUser} setNewUser={setNewUser} /> } />
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
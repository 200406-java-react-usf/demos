import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';

import { User } from './models/user';
import NavbarComponent from './components/NavbarComponent';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


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

  return (
    <>
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
        </Switch>
        
      </Router>
    </>
  );
}

export default App;

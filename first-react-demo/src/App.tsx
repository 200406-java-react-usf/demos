import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import  LoginComponent  from './components/login-component/LoginContainer';
import NavbarComponent from './components/navbar-component/NavbarComponent';
import { User } from './models/user';
import HomeComponent from './components/home-component/HomeComponent';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import RegisterComponent from './components/register-component/RegisterContainer';
import { store } from './Store';
import { Provider } from 'react-redux';

function App() {

    // @ts-ignore
    const [authUser, setAuthUser] = useState(null as User);
    // @ts-ignore
    const [newUser, makeNewUser] = useState(null as User);

    return (
        <> 
        < Provider store={store}>
            < Router >
                < AppBar color="primary" position="static"> 
                    < Toolbar >
                        < Typography variant="h5" color="inherit">
                            < NavbarComponent authUser={new User(0, '', '', '', '','','')} /> 
                        </Typography>
                    </Toolbar>
                </AppBar>

                < Switch >
                    < Route path="/home" render={() => < HomeComponent username={'test3'} />} />
                    < Route path="/login" render={() => < LoginComponent /> } />
                    < Route path="/register" render={() => < RegisterComponent /> } /> 
                    
                </Switch>
            </Router>
        </Provider>
        </>
    );
}

export default App;

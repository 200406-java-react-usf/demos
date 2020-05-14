import React, { useState } from "react";

import { User } from "../models/user";

import { 
    makeStyles, 
    Typography, 
    FormControl, 
    InputLabel,
    Button,
    Input
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { addNewUser } from '../remote/auth-service'
import { Redirect } from "react-router-dom";


interface IRegisterProps {
    authUser: User;
    setAuthUser: (user: User) => void
}

const useStyles = makeStyles({
    registerContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
    registerForm: {
        width: "50%"
    }
}) 

function RegisterComponent(props: IRegisterProps){
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorMessage, setErrorMessage] = useState('Test message');

    let updateUsername = (e:any) => {
        setUsername(e.currentTarget.value);
    }

    let updatePassword = (e:any) => {
        setPassword(e.currentTarget.value);
    }

    let updateFirstName = (e:any) => {
        setFirstName(e.currentTarget.value);
    }

    let updateLastName = (e:any) => {
        setLastName(e.currentTarget.value);
    }

    let register = async () => {
        let authUser = await addNewUser(username, password, firstName, lastName);
        props.setAuthUser(authUser);
    }

    return (
        props.authUser ?
        <Redirect to="/login" /> :
        <>
            <div className={classes.registerContainer}>
                <form className={classes.registerForm}>
                    <Typography align="center" variant="h4">Register with Revaboards!</Typography>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input 
                            onChange={updateUsername} 
                            value={username} 
                            id="username" type="text" 
                            placeholder="Enter your username" />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input 
                            onChange={updatePassword}
                            value={password}
                            id="password" type="password"
                            placeholder="Enter your password"/>
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                        <Input 
                            onChange={updateFirstName}
                            value={firstName}
                            id="firstName" type="text"
                            placeholder="First Name"
                        />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <Input 
                            onChange={updateLastName}
                            value={lastName}
                            id="lastName" type="text"
                            placeholder="Last Name"
                        />
                    </FormControl>
                    <br/><br/>
                    <Button onClick={register} variant="contained" color="primary" size="medium">Login</Button>
                    <br/><br/>
                    {
                        errorMessage 
                            ? 
                        <Alert severity="error">{errorMessage}</Alert>
                            :
                        <></>
                    }
                </form>
            </div>
        </>
    );
}

export default RegisterComponent;
import React, { useState } from 'react';

import { Alert } from '@material-ui/lab';
import { 
    Typography, 
    FormControl, 
    InputLabel, 
    Input, 
    Button, 
    makeStyles 
} from '@material-ui/core';

import { addNewUser } from '../remote/register-service';
import { User } from '../models/user';

interface IRegisterProps {
    addNewUser: User;
    setNewUser: (user: User) => void;
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
});

function RegisterComponent(props: IRegisterProps) {

    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('Test message');

    let addUsername = (e: any) => {
        setUsername(e.currentTarget.value);
    }

    let addPassword = (e: any) => {
        setPassword(e.currentTarget.value);
    }

    let addFirstName = (e: any) => {
        setFirstName(e.currentTarget.value);
    }
    let addLastName = (e: any) => {
        setLastName(e.currentTarget.value);
    }

    let addEmail = (e: any) => {
        setEmail(e.currentTarget.value);
    }

    let register = async () => {
        let newUser = await addNewUser(username, password, firstName, lastName, email);
        props.setNewUser(newUser);
    }

    return (
        <>
            <div className={classes.registerContainer}>
                <form className={classes.registerForm}>
                    <Typography align="center" variant="h4">Register into Revaboards!</Typography>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input 
                            onChange={addUsername} 
                            value={username} 
                            id="username" type="text" 
                            placeholder="Enter your username" />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input 
                            onChange={addPassword}
                            value={password}
                            id="password" type="password"
                            placeholder="Enter your password"/>
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                        <Input 
                            onChange={addFirstName} 
                            value={firstName} 
                            id="firstName" type="text" 
                            placeholder="Enter your First Name" />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <Input 
                            onChange={addLastName} 
                            value={lastName} 
                            id="lastName" type="text" 
                            placeholder="Enter your Last Name" />
                    </FormControl>
                    
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="email">email</InputLabel>
                        <Input 
                            onChange={addEmail} 
                            value={email} 
                            id="email" type="text" 
                            placeholder="Enter your Email" />
                    </FormControl>
                    <br/><br/>
                    <Button onClick={register} variant="contained" color="primary" size="medium">Register</Button>
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
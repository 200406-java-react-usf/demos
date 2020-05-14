import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, Typography, FormControl, InputLabel, Input, makeStyles, Button } from '@material-ui/core';
import { addNewEmployee } from '../remote/auth-service';
import { Employee } from '../models/employee';


interface IRegisterProps {
    registeredEmployee: Employee;
    setEmployee: (employee: Employee) => void
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



function RegisterComponent(props: IRegisterProps) {

    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

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

    let addRole = (e: any) => {
        setRole(e.currentTarget.value);
    }

    let register = async () => {
        let registeredEmployee = await addNewEmployee(username, password, firstName, lastName, email, role);
        console.log(registeredEmployee);
        props.setEmployee(registeredEmployee);
        
    }

    let checkKeys = (item: any) => {
        if(!item){
            return false;
        }
        let test = Object.keys(item)
        if(test.every(key => key)){
            return true;
        }
        else{
            return false;
        }
    }

    return(
        
        checkKeys(props.registeredEmployee) ?
        <Redirect to="/home" /> :
        <>
        <div className={classes.registerContainer}>
                    <form className={classes.registerForm}>
                        <Typography align="center" variant="h4">Register</Typography>

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
                            placeholder="Enter your password" />
                        </FormControl>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="password">First Name</InputLabel>
                            <Input 
                            onChange={addFirstName} 
                            value={firstName} 
                            id="firstName" type="text"
                            placeholder="Enter your First Name" />
                        </FormControl>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel  htmlFor="password">Last Name</InputLabel>
                            <Input 
                            onChange={addLastName} 
                            value={lastName} 
                            id="lastName" type="text"
                            placeholder="Enter your Last Name" />
                        </FormControl>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="password">Email</InputLabel>
                            <Input 
                            onChange={addEmail} 
                            value={email} 
                            id="email" type="email"
                            placeholder="Enter your Email" />
                        </FormControl>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="password">Role</InputLabel>
                            <Input 
                            onChange={addRole} 
                            value={role} 
                            id="role" type="text"
                            placeholder="Enter your Role" />
                        </FormControl>
                        <br/>
                        <br/>
                        <Button onClick={register} variant="contained" color="primary" size="medium">REGISTER</Button>
                        <br/>
                        <br/>
                    </form>
                </div>
        </>
    );
}

export default RegisterComponent;
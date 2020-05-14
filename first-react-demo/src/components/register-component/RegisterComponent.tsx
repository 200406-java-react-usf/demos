import { 
    makeStyles,
    Typography,
    InputLabel,
    Input,
    FormControl, 
    Button} from "@material-ui/core";
import React, { useState } from "react";
import { register } from '../../remote/user-service';
import { User } from "../../models/user";
import { Alert } from "@material-ui/lab";

interface IRegisterProps {
    newUser: User;
    errorMessage: string;
    registerAction: (username: string, password:string, firstName: string, lastName: string, email: string) => void;

}

const useStyles = makeStyles({
    registerContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 20,
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

    let updateUsername = (e: any) => {
        setUsername(e.currentTarget.value);
    }

    let updatePassword = (e: any) => {
        setPassword(e.currentTarget.value);
    }

    let updateFirstName = (e:any) => {
        setFirstName(e.currentTarget.value);
    }

    let updateLastName = (e:any) => {
        setLastName(e.currentTarget.value);
    }

    let updateEmail = (e:any) => {
        setEmail(e.currentTarget.value);
    }

    let makeNewUser = async () => {
        props.registerAction(username, password, firstName, lastName, email);

    }

    return (
        <>
            <div className={classes.registerContainer}>
                <form className={classes.registerForm}>
                    < Typography align="center" variant="h4">Register for Revaboards</Typography> 
                    < FormControl margin="normal" fullWidth>
                        < InputLabel htmlFor="username">Username</InputLabel>
                        < Input
                            onChange={updateUsername}
                            value={username}
                            id="username" type="text"
                            placeholder="Enter a username" />
                    </ FormControl>

                    < FormControl margin="normal" fullWidth>
                        < InputLabel htmlFor="password">Password</InputLabel>
                        < Input
                            onChange={updatePassword}
                            value={password}
                            id="password" type="password"
                            placeholder="Enter a password" />
                    </ FormControl>

                    < FormControl margin="normal" fullWidth>
                        < InputLabel htmlFor="firstname">First Name</InputLabel>
                        < Input
                            onChange={updateFirstName}
                            value={firstName}
                            id="firstname" type="text"
                            placeholder="Enter your first name" />
                    </ FormControl>

                    < FormControl margin="normal" fullWidth>
                        < InputLabel htmlFor="lastname">Last Name</InputLabel>
                        < Input
                            onChange={updateLastName}
                            value={lastName}
                            id="lastname" type="text"
                            placeholder="Enter your last name" />
                    </ FormControl>

                    < FormControl margin="normal" fullWidth>
                        < InputLabel htmlFor="email">Email</InputLabel>
                        < Input
                            onChange={updateEmail}
                            value={email}
                            id="email" type="text"
                            placeholder="Enter your email" />
                    </ FormControl>
                    <br/> <br/>
                    < Button 
                        onClick={makeNewUser} 
                        variant="contained" color="primary"
                        size = "medium"> Register
                    </Button>
                    <br/><br/>
                    {
                        props.errorMessage 
                            ? 
                        <Alert severity="error">{props.errorMessage}</Alert>
                            :
                        <></>
                    }

                </form>
            </div>
        </>
    );
}

export default RegisterComponent;
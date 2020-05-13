import React, { SyntheticEvent } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import TypoGraphy from '@material-ui/core/Typography';

interface ILoginState {
    username: string;
    password: string;
    errorMessage: string;
}


export class LoginComponent extends React.Component<any, ILoginState> {

    constructor(props: any) {
        super(props);
        this.state = {
            username:  '',
            password: '',
            errorMessage: 'Test'
        }
    }

    login = async (e: SyntheticEvent) => {

        
    }

    updateUsername = (e: any) => {
        this.setState({
            username: e.currentTarget.value
        });
    }

    updatePassword = (e: any) => {
        this.setState({
            password: e.currentTarget.value
        });
    }

    render () {
        return (
            <> {/* <----- this is a React fragment */} 
<<<<<<< HEAD
                <form>
                    <input type="text" name='username'/>
                    <input type="text" name='password'/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <h1>LoginComponent works!</h1>
                <h2>Will update in real time!</h2>   
=======
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 20,
                    marginTop: 40,
                    padding: 20
                }}>
                    <form style={{ width: "50%" }}>
                        <TypoGraphy align="center" variant="h4">Login into Revaboards!</TypoGraphy>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input 
                                onChange={this.updateUsername} 
                                value={this.state.username} 
                                id="username" type="text" 
                                placeholder="Enter your username" />
                        </FormControl>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input 
                                onChange={this.updatePassword}
                                value={this.state.password}
                                id="password" type="password"
                                placeholder="Enter your password"/>
                        </FormControl>
                        <br/><br/>
                        <Button onClick={this.login} variant="contained" color="primary" size="medium">Login</Button>
                        <br/><br/>
                        {
                            this.state.errorMessage 
                                ? 
                            <Alert severity="error">{this.state.errorMessage}</Alert>
                                :
                            <></>
                        }
                    </form>
                </div>
>>>>>>> c9f7c941c9b4daaa217ae7c1420e82e3b3158ff9
            </>     
        );
    }

}
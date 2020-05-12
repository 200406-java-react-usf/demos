import React, { SyntheticEvent } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TypoGraphy from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { InputLabel, Input, Button } from '@material-ui/core';
import request from '../remote/auth-service';

interface ILoginState {
    username: string;
    password: string;
    errorMessage: string;
}

export class LoginComponent extends React.Component<any, ILoginState> {

    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: ''
        }
    }

    login = async (e: SyntheticEvent) => {
        
            try{
                let resp = await request(this.state.username, this.state.password);
                console.log(resp);
            }
            catch(e){
                console.log(e);
            }
            
        
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

    render() {
        return (
            <>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 20,
                    marginTop: 40,
                    padding: 20
                }}>
                    <form style={{ width: "50%" }}>
                        <TypoGraphy align="center" variant="h4">Login to Revaboards!</TypoGraphy>

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
                            placeholder="Enter your password" />
                        </FormControl>
                        <br/>
                        <br/>
                        <Button onClick={this.login} variant="contained" color="primary" size="medium">LOGIN</Button>
                        <br/>
                        <br/>
                        {this.state.errorMessage ? <Alert severity="error">{this.state.errorMessage} </Alert> : <></> }
                    </form>
                </div>
            </>
        );
    }

}
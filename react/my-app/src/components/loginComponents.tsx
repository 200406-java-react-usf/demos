import React, { SyntheticEvent } from 'react';
import { userInfo } from 'os';

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
            errorMessage: ''
        }
    }

    login = async (e: SyntheticEvent) => {

        console.log(this.state.username);
        console.log(this.state.password); 
        // print username and password field values to console
        // you will not use document.getElementById (use state!)

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


        // Create a login component with two input fields, a button, and a alert message
        // figure out how to bind a JSX node to a method declared within this on component
        // JSX cannot have more than one top level node
        
        return (
            
            <> {/* <----- this is a React fragment */ } 
                <h1>LoginComponent works!</h1>
                <h2>Will update in real time!</h2> 
                <div>
                    Username: <input type='text' id='user' onInput={this.updateUsername}></input>
                    <br/>
                    Password: <input type='password' onInput={this.updatePassword}></input>
                    <br/>
                    <button onClick={this.login} >Submit</button>  
                </div>                     
            </>                
        );   
    }

}
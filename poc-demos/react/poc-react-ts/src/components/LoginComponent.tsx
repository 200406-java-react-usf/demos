import React, { SyntheticEvent } from 'react';

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
        // figure out how to bind a JSX node to a method declared ithin this on component
        // JSX cannot have more than one top level node
        return (
            <> {/* <----- this is a React fragment */} 
                <form>
                    <input type="text" name='username'/>
                    <input type="text" name='password'/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <h1>LoginComponent works!</h1>
                <h2>Will update in real time!</h2>   
            </>     
        );
    }

}
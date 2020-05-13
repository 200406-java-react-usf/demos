import React from 'react';
import { Redirect } from 'react-router-dom';

interface IHomeProps {
    username: string
}

const HomeComponent = (props: IHomeProps) => {

    return (
        !props.username ?
        <Redirect to="/login" /> : 
        <h1>Welcome, {props.username}!</h1>
    );

}

export default HomeComponent;
import React from 'react';

interface IHomeProps {
    username: string
}

const HomeComponent = (props: IHomeProps) => {

    return (
        <h1>Welcome, {props.username}!</h1>
    );

}

export default HomeComponent;
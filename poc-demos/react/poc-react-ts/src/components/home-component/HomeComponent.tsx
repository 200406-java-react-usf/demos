import React from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Typography, CardContent } from '@material-ui/core';

interface IHomeProps {
    username: string;
    posts: {id: number, title: string, body: string}[]
}

const HomeComponent = (props: IHomeProps) => {

    let myPosts: any[] = [];
    props.posts.forEach(post => {
        myPosts.push(
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        {post.title}
                    </Typography>
                    <Typography color="textSecondary">
                        {post.body}
                    </Typography>
                </CardContent>
            </Card>
        );
    });


    return (
        !props.username ?
        <Redirect to="/login" /> : 
        <>
            <h1>Welcome, {props.username}!</h1>
            {myPosts}
        </>
    );

}

export default HomeComponent;
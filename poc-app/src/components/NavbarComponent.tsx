import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';
import { makeStyles, List, ListItem, Typography, ListItemText } from '@material-ui/core';

interface INavbarProps {
    authUser: User;
}

const useStyles = makeStyles({
    link: {
        textDecoration: "none",
        color: "black"
    }
});

const NavbarComponent = (props: INavbarProps) => {

    const classes = useStyles();

    return(
        <>
            <List component="nav">
                <ListItem component="div">
                    <Typography color="inherit" variant="h5">Revaboards</Typography>
                    <ListItemText inset>
                        <Typography color="inherit" variant="h6">
                            <Link to="/home" className={classes.link}>Home</Link>
                        </Typography>
                    </ListItemText>
                    <ListItemText inset>
                        <Typography color="inherit" variant="h6">
                            <Link to="/login" className={classes.link}>Login</Link>
                        </Typography>
                    </ListItemText>
                    <ListItemText inset>
                        <Typography color="inherit" variant="h6">
                            <Link to="/register" className={classes.link}>Register</Link>
                        </Typography>
                    </ListItemText>
                    <ListItemText inset>
                        <Typography color="inherit" variant="h6">
                            <span className={classes.link}>{props.authUser?.username}</span>
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
        </>
    )
}

export default NavbarComponent;
import React from 'react';
import { Link } from 'react-router-dom';

import { 
    makeStyles, 
    List, 
    ListItem, 
    Typography, 
    ListItemText 
} from '@material-ui/core';

import { User } from '../models/user';

interface INavbarProps {
    authUser: User;
}

const useStyles = makeStyles({
    link: {
        textDecoration: "none",
        color: "white"
    }
});

const NavbarComponent = (props: INavbarProps) => {

    const classes = useStyles();

    return (
        <>
            <List component="nav">
                <ListItem component="div">
                    <Typography color="inherit" variant="h5">Revaboards</Typography>
                    {
                        props.authUser
                        ?
                        <ListItemText inset>
                            <Typography color="inherit" variant="h6">
                                <Link to="/home" className={classes.link}>Home</Link>
                            </Typography>
                        </ListItemText>
                        :
                        <>
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
                        </>
                    }
                    
                    <ListItemText inset>
                        <Typography color="inherit" variant="h6">
                            <span className={classes.link}>{props.authUser?.username}</span>
                        </Typography>
                    </ListItemText>
                    
                </ListItem>
            </List>
        </>
    );

}

export default NavbarComponent;
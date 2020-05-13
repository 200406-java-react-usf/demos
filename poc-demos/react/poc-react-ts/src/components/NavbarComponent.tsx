import React from 'react';
import User from '../models/user';
import { 
    makeStyles, 
    Typography, 
    ListItemText, 
    List, 
    ListItem } 
from '@material-ui/core';
import { Link } from 'react-router-dom';

interface INavbarProps {
    authUser: User;
}

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'white'
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
                            <Link className={classes.link}>Home</Link>
                        </Typography>
                    </ListItemText>
                    <ListItemText inset>
                        <Typography color="inherit" variant="h6">
                            <span className={classes.link}>Login</span>
                        </Typography>
                    </ListItemText>
                    <ListItemText inset>
                        <Typography color="inherit" variant="h6">
                            <span className={classes.link}>Register</span>
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
    );
}
export default NavbarComponent;
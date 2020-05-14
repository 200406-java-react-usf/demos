import React from 'react';
import { Redirect } from 'react-router-dom';
import { Employee } from '../models/employee';
import { Grid, Typography, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';

interface IHomeProps {
    username: string;
    newEmployee: Employee;
}

//let record;

const HomeComponent = (props: IHomeProps) => {


    return(
        !props.username ?
            <Redirect to="/login" /> :
            <>
                <h1>
                    Welcome, {props.username}!
                </h1>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5">
                            Recently Added Employee
                        </Typography>
                        <div>
                            <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">Username</TableCell>
                                    <TableCell align="right">Password</TableCell>
                                    <TableCell align="right">First Name</TableCell>
                                    <TableCell align="right">Last Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Role</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.newEmployee ?
                                      <TableRow>
                                        <TableCell align="right">{props.newEmployee.userId}</TableCell>
                                        <TableCell align="right">{props.newEmployee.username}</TableCell>
                                        <TableCell align="right">{props.newEmployee.password}</TableCell>
                                        <TableCell align="right">{props.newEmployee.firstName}</TableCell>
                                        <TableCell align="right">{props.newEmployee.lastName}</TableCell>
                                        <TableCell align="right">{props.newEmployee.email}</TableCell>
                                        <TableCell align="right">{props.newEmployee.role}</TableCell>
                                      </TableRow>  : <TableRow></TableRow>
                                    }
                                    
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </Grid>
                </Grid>
            </>
    );
}

export default HomeComponent;
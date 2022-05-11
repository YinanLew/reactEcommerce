import React from 'react';
import {Avatar, Grid, TextField, Button} from "@mui/material";
import {FormProvider, } from "react-hook-form";

import useStyles from './styles'
import {NavLink} from "react-router-dom";

const Reset = () => {

    const classes = useStyles();

    const alertUser = () => {
        alert("Password Reset Complete.")
    }

    return (
        <Grid container align={"center"}>
            <Grid item xs={12} >
                <FormProvider>
                    <form className={classes.box} >
                        <Avatar style={{backgroundColor: "#8e24aa"}}/>
                        <Grid item md={12}>
                            <h2 className={classes.title}>Reset your password</h2>
                            <TextField fullWidth required type={"password"} size={"small"} label={"New Password"} placeholder={"New password"}/>
                            <br/>
                            <br/>
                            <TextField fullWidth required type={"password"} size={"small"} label={"Confirm New Password"} placeholder={"Confirm new password"}/>
                            <br/>
                            <br/>
                            <br/>
                            <div style={{display:'flex', justifyContent:'flex-end'}}>
                                <NavLink style={{textDecoration: 'none'}} to={"/"}><Button onClick={alertUser} type={"submit"} variant={"contained"} color={"secondary"}>Next</Button></NavLink>
                            </div>
                        </Grid>
                    </form>
                </FormProvider>
            </Grid>
        </Grid>
    );
}

export default Reset;
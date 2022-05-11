import React from 'react';
import {Avatar, Grid, Paper, TextField, Checkbox, Button, Typography} from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormProvider} from "react-hook-form";

import useStyles from './styles'
import {NavLink} from "react-router-dom";
import Footer from "../../home/footer/Footer";


const Login = () => {

    const classes = useStyles();

    return (
        <div className={"container"}>
            <Grid container align={"center"}>
                <Grid item xs={12} >
                    <FormProvider >
                        <form className={classes.box}>
                            <Avatar style={{backgroundColor: "#8e24aa"}}/>
                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <h2 className={classes.title}>Sign in</h2>
                                <TextField size={"small"} label={"Username"} placeholder={"Enter username"} fullWidth required/>
                                <br/>
                                <br/>
                                <TextField size={"small"} label={"Password"} placeholder={"Enter password"} type={"password"} fullWidth required/>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked color={"secondary"}/>} label="Remember me" />
                                </FormGroup>
                            <br/>
                            <br/>
                            <Button size={"small"} variant={"contained"} type={"submit"} color={"secondary"} fullWidth>Log in</Button>
                            <br/>
                            <br/>
                            <Typography >
                                <NavLink style={{textDecoration: 'none', color: "#8e24aa"}} to={"/forgot"}>
                                    Forgot password
                                </NavLink>
                            </Typography>
                            <br/>
                            <Typography>
                                Do you have an account?&nbsp;
                                <NavLink style={{textDecoration: 'none', color: "#8e24aa"}} to={"/signup"}>
                                    Sign up
                                </NavLink>
                            </Typography>
                            </Grid>
                        </form>
                    </FormProvider>
                </Grid>
            </Grid>
            <div className={classes.footer}>
                <Footer />
            </div>

        </div>
    );
}

export default Login;
import React from 'react';
import {Avatar, Grid, Paper, TextField, Button} from "@mui/material";
import {FormProvider, useForm} from "react-hook-form";

import useStyles from './styles'

const Forgot = ({next}) => {

    const classes = useStyles();

    const methods = useForm();

    return (
        <Grid container align={"center"}>
            <Grid item xs={12} >
                <FormProvider {...methods} >
                    <form className={classes.box} onSubmit={methods.handleSubmit((data) => next({...data}))}>
                        <Avatar style={{backgroundColor: "#8e24aa"}}/>
                        <Grid item md={12}>
                            <h2 className={classes.title}>Find your password</h2>
                            <TextField fullWidth required type={"email"} size={"small"} label={"Email"} placeholder={"Enter email"}/>
                            <br/>
                            <br/>
                            <TextField fullWidth required type={"text"} size={"small"} label={"Username"} placeholder={"Enter Username"}/>
                            <br/>
                            <br/>
                            <br/>
                            <div style={{display:'flex', justifyContent:'flex-end'}}>
                                <Button type={"submit"} variant={"contained"} color={"secondary"}>Next</Button>
                            </div>
                        </Grid>
                    </form>
                </FormProvider>
            </Grid>
        </Grid>
    );
}

export default Forgot;
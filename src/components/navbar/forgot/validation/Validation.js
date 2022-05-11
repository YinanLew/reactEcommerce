import React from 'react';
import {Avatar, Grid, Paper, TextField, Button} from "@mui/material";
import {FormProvider, useForm} from "react-hook-form";

import useStyles from '../styles'

const Forgot = ({nextCode}) => {

    const classes = useStyles();

    const methods = useForm();

    return (
        <Grid container align={"center"}>
            <Grid item xs={12} >
                <FormProvider {...methods} >
                    <form className={classes.box} onSubmit={methods.handleSubmit((data) => nextCode({...data}))}>
                        <Grid item md={12} className={classes.box}>
                            <Avatar style={{backgroundColor: "#8e24aa"}}/>
                            <h2 className={classes.title}>Enter Code</h2>
                            <TextField size={"small"} label={"Code"} placeholder={"Enter Validation Code"} fullWidth required/>
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
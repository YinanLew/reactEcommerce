import React from 'react';
import {Avatar, Grid, Paper, TextField, Checkbox, Button, Typography} from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import {NavLink} from "react-router-dom";
import CircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import useStyles from './styles'
import {FormProvider} from "react-hook-form";
import Footer from "../../home/footer/Footer";


const Login = () => {

    const classes = useStyles();

    return (
        <div>
        <Grid container align={"center"}>
            <Grid item xs={12} >
                <FormProvider >
                    <form className={classes.box}>
                        <Avatar style={{backgroundColor: "#8e24aa"}}/>
                        <h2 className={classes.title}>Sign up</h2>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <TextField size={"small"} label={"First Name"} placeholder={"Enter firstname"} fullWidth required/>
                            <br/>
                            <br/>
                            <TextField size={"small"} label={"Last Name"} placeholder={"Enter lastname"} fullWidth required/>
                            <br/>
                            <br/>
                            <FormControl>
                                {/*<FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>*/}
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                            <TextField type={"email"} size={"small"} label={"Email"} placeholder={"Enter email"} fullWidth required/>
                            <br/>
                            <br/>
                            <TextField type={"password"} size={"small"} label={"Password"} placeholder={"Enter password"} fullWidth required/>
                            <br/>
                            <br/>
                            <TextField type={"password"} size={"small"} label={"Confirm Password"} placeholder={"Enter password"} fullWidth required/>
                            <br/><br/>
                            <TextField size={"small"} label={"address"} placeholder={"Enter address"} fullWidth required/>
                            <br/><br/>
                            <TextField size={"small"} label={"country"} placeholder={"Enter country"} fullWidth required/>
                            <br/><br/>
                            <Button fullWidth type={"submit"} variant={"contained"} color={"secondary"}>Sign Up</Button>
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
import React, {useState} from 'react';
import {Avatar, Grid, Paper, TextField, Button, Stepper, Step, StepLabel} from "@mui/material";
import {FormProvider} from "react-hook-form";
import useStyles from './styles'
import Validation from "./validation/Validation";
import Email from "./email/Email";
import Reset from './reset/Reset';

const Forgot = () => {
    const steps = ['Forgot Page', 'Validation Page'];

    const [activeStep, setActiveStep] = useState(0);
    const [emailData, setEmailData] = useState({});
    const [codeData, setCodeData] = useState({});

    const classes = useStyles();

    const next = (data) => {
        setEmailData(data);
        nextStep();
    }

    const nextCode = (data) => {
        setCodeData(data);
        nextStep();
    }

    const nextStep = () => setActiveStep((pre) => pre + 1);
    // const backStep = () => setActiveStep((pre) => pre - 1);

    const Form = () => activeStep === 0
        ? <Email next={next}/>
        : <Validation nextCode={nextCode}/>



    return (
        <Grid container align={"center"}>
            <Grid item xs={12} className={classes.box}>
                <FormProvider >
                        <Avatar style={{backgroundColor: "#8e24aa"}}/>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <Stepper activeStep={activeStep} className={classes.stepper}>
                                {/*{steps.map((step) => (*/}
                                {/*    <Step key={step}>*/}
                                {/*        <StepLabel>*/}
                                {/*            {step}*/}
                                {/*        </StepLabel>*/}
                                {/*    </Step>*/}
                                {/*))}*/}
                            </Stepper>
                            { activeStep === steps.length ? <Reset /> : <Form /> }
                            {/*<div style={{display:'flex', justifyContent:'flex-end'}}>*/}
                            {/*    <NavLink style={{textDecoration: 'none'}} to={"/validation"}><Button type={"submit"} variant={"contained"} color={"secondary"}>Next</Button></NavLink>*/}
                            {/*</div>*/}
                        </Grid>
                </FormProvider>
            </Grid>
        </Grid>
    );
}

export default Forgot;
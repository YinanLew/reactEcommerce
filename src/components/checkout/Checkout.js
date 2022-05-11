import React, {useState, useEffect} from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider,Button, CssBaseline } from "@mui/material";


import {Link} from 'react-router-dom';

import useStyles from './styles';
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({cart, order, checkout, error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();


    let arr = [];
    cart.map((p) =>(
        arr.push(p.qty*p.product.likes)
    ))
    const totalPrice = arr.reduce((count, p) => count + p, 0);

    // useEffect(() => {
    //     const generateToken = async () => {
    //         try{
    //             const token = await commerce.checkout.generateToken(cart.product.id, {type: 'cart'});
    //
    //             console.log(token)
    //
    //             setCheckoutToken(token);
    //         } catch (error) {
    //
    //         }
    //
    //     }
    //
    //     generateToken().then(r => console.log(r));
    // }, [cart]);

    // console.log('checkout',cart)


    const nextStep = () => setActiveStep((pre) => pre + 1);
    const backStep = () => setActiveStep((pre) => pre - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    // console.log('11',cart)

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant={"h5"}>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname} </Typography>
                <Divider className={classes.divider} />
                <Typography variant={"subtitle2"}>Order ref: {order.id} </Typography>
            </div>
            <br/>
            <Button component={Link} to={"/"} variant={"outlined"} type={"button"}>Back to Amazoo</Button>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );
    // if(error){
    //     <div>
    //         <Typography variant={"h5"}>Error: {error}</Typography>
    //         <br/>
    //         <Button element={Link} to={"/"} variant={"outlined"} type={"button"}>Back to Amazoo</Button>
    //     </div>
    // }

    const Form = () => activeStep === 0
    ? <AddressForm cart={cart} next={next}/>
    : <PaymentForm cart={cart} shippingData={shippingData} nextStep={nextStep} backStep={backStep} checkout={checkout} totalPrice={totalPrice}/>

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant={"h4"} align={"center"}>
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>
                                    {step}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    { activeStep === steps.length ? <Confirmation /> :  <Form/> }
                </Paper>

            </main>
        </>
    )
}

export default Checkout;
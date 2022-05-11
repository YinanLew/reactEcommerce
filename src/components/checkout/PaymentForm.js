import React from 'react';
import {Typography, Button, Divider} from "@mui/material";
import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from "@stripe/stripe-js";
import {v1 as uuid} from 'uuid'

import Review from './Review'



const stripePromise = loadStripe(`${process.env.REACT_APP_PAYMENT_METHOD_KEY}`);


const PaymentForm =({cart, backStep, nextStep, shippingData, checkout, totalPrice}) => {


    const paymentSubmit = async (e, elements, stripe) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const {error, paymentMethod} = await stripe.createPaymentMethod({type: 'card', card: cardElement});

            const orderDetails = {
                id: uuid(),
                products: cart,
                customer: {
                    firstname: shippingData.firstname,
                    lastname: shippingData.lastname,
                    email: shippingData.email
                },
                shipping: {
                    name: 'Primary',
                    street: shippingData.address,
                    city: shippingData.city,
                    postcode: shippingData.postcode,
                    province: shippingData.province,
                    country: shippingData.country
                },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }
            }

            checkout(orderDetails);

            nextStep();

        }


    return (

        <>
            <Review cart={cart} totalPrice={totalPrice} />
            <Divider />
            <Typography variant={"h6"} gutterBottom style={{margin: '20px 0'}}>Payment Methods</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {(elements, stripe) => (
                        <form onSubmit={(e) => paymentSubmit(e, elements, stripe)}>
                            {/*上面onSubmit替换为(e) => paymentSubmit(e, elements, stripe)*/}
                            <CardElement />
                            <br/>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <Button variant={"outlined"} onClick={backStep}>Back</Button>
                                <Button onClick={paymentSubmit} type={"submit"} variant={"contained"} color={"primary"} disabled={!stripe}>
                                    Pay ${totalPrice}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    );
}

export default PaymentForm;
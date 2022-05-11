import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import CardItems from './cartItems/CartItems';
import {Link} from'react-router-dom';

import useStyles from './styles';


const Cart = ({product, addItems, deItems, removeFromCart, emptyCart}) => {

        const isEmpty = !product.length;
        const classes =useStyles();

        let arr = [];
        product.map((p) =>(
            arr.push(p.qty*p.product.likes)
        ))
        const totalPrice = arr.reduce((count, p) => count + p, 0);


        const EmptyCart = () => {
            return (
                <Typography variant={"subtitle1"}>Your Amazoo product is empty<br/>
                    <Link to={'/'} className={classes.link}>Shop today's deals</Link>
                </Typography>
            )
        }

        const FilledCart = () => {
            return (
                <>
                    <Grid container spacing={3}>
                        {
                            product.map((p) => (
                            <Grid item xs={12} sm={4} key={p.product.id}>
                                <CardItems p={p} removeFromCart={removeFromCart} addItems={addItems} deItems={deItems}/>
                            </Grid>
                        ))
                        }
                    </Grid>
                    <div className={classes.cardDetails}>
                        <Typography variant={"h4"}>
                            Subtotal: $ {totalPrice}
                        </Typography>
                        <div>
                            <Button className={classes.emptyButton}
                                    size={"large"} type={"button"}
                                    variant={"contained"}
                                    color={"secondary"}
                                    onClick={emptyCart}>
                                Empty Cart
                            </Button>
                            <Button className={classes.checkoutButton}
                                    size={"large"} type={"button"}
                                    variant={"contained"}
                                    color={"primary"}
                                    component={Link} to={"/checkout"}>
                                Checkout
                            </Button>
                        </div>
                    </div>
                </>
            )
        }


        return (
            <Container>
                <div className={classes.toolbar}/>
                <Typography className={classes.title} variant={"h3"} gutterBottom>Shopping Cart</Typography>
                { isEmpty ?  <EmptyCart/> : <FilledCart/> }
            </Container>
        );
}

export default Cart;

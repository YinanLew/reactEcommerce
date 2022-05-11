import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, Button} from "@mui/material";

import useStyles from './styles';

const CartItems = ({p, addItems, deItems, removeFromCart}) => {

    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={p.product.urls.small} alt={'p'} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant={"h4"}>{p.product.login}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type={"button"} size={"small"} onClick={() => deItems(p.product.id)} >-</Button>
                    <Typography>{p.qty}</Typography>
                    <Button type={"button"} size={"small"} onClick={() => addItems(p.product.id)} >+</Button>
                </div>
                <Button variant={"contained"} type={"button"} color={"secondary"} onClick={() => removeFromCart(p)}>Remove</Button>
            </CardActions>
        </Card>
    );
}

export default CartItems;
import React from 'react';
import {Typography, List, ListItem, ListItemText} from "@mui/material";

const Review = ({cart, totalPrice}) => {

    return (
        <>
            <Typography variant={"h6"} gutterBottom>
                Your Order
            </Typography>
            <List>
                {
                    cart.map((p) =>(
                        <ListItem style={{padding: '10px 0'}} key={p.product.id}>
                            <ListItemText primary={p.product.login} secondary={`Quantity: ${p.qty}`}/>
                            <Typography variant={"body2"}>
                                {`$ ${p.qty*p.product.likes}`}{/*待增加*/}
                            </Typography>
                        </ListItem>
                    ))
                }
                    <ListItem style={{padding:'10px 0'}}>
                    <ListItemText primary={"Total:"} />
                    <Typography variant={"subtitle1"} style={{fontWeight: 700}} >
                        {`$ ${totalPrice}`}
                    </Typography>
                    </ListItem>
            </List>
        </>
    );
}

export default Review;

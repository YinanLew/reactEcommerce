import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@mui/material";
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import useStyles from './styles';


const Products = ({product, addToCart, productName}) => {
        const classes = useStyles();


        return (
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.urls.small} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant={"h5"} gutterBottom>
                            {productName}
                        </Typography>
                        <Typography variant={"h5"}>
                            $ {product.likes}
                        </Typography>
                    </div>
                    <Typography variant={"body2"} color={"textSecondary"}>
                        {product.alt_description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label={"Add to Cart"} onClick={ () => addToCart(product,1) }>
                        <AddShoppingCartTwoToneIcon />
                    </IconButton>
                </CardActions>
            </Card>
        );
}


export default Products;
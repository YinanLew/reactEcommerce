import * as React from 'react';
import {Card, Collapse, Grid, Link} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useStyles from './styles';
import {NavLink} from "react-router-dom";

const Cards = ({data, arr, category}) => {

    const classes = useStyles();





    return (
            <Card className={classes.root} >
                <NavLink style={{textDecoration: 'none'}}  to={"/search"} onClick={() => category(data.title)}>
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={arr}
                    alt="products"
                />
                </NavLink>
                <div className={classes.cardContent}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" >
                            <span className={classes.title}>{data.title}</span>
                        </Typography>
                    </CardContent>
                </div>
                <CardActions disableSpacing className={classes.cardActions}>
                <NavLink style={{textDecoration: 'none'}}  to={"/search"}>
                    <Button  size="small" color={"secondary"} onClick={() => category(data.title)}>Shop Now</Button>
                </NavLink>
                </CardActions>
            </Card>
    );
}

export default Cards;

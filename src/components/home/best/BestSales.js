import React, {useEffect, useRef} from 'react';
import {Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import a from '../../../assets/img/1.jpg';
import b from '../../../assets/img/2.jpg';
import c from '../../../assets/img/3.jpg';
import d from '../../../assets/img/4.jpg';

import useStyles from './styles';

import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const BestSales = () => {

    const classes = useStyles();

    const body = useRef(null);

    useEffect(() => {

        const bodyRef = body.current;

        gsap.to(bodyRef, {
            scrollTrigger: {trigger: bodyRef, scrub: 1},
            y: 80
        })
    },[])


    return (
        <div className={classes.root}>
            <Grid >
                <Typography gutterBottom align={"center"} variant={"h4"}>Best Sales</Typography>
                <Grid container ref={body}>
                    <Grid container className={classes.grid} item xs={12} sm={12} md={6} lg={6}>
                    <Card square={true} elevation={0} className={classes.card}>
                        <CardMedia
                            component="img"
                            image={a}
                            height="300px"
                            alt=" Product A"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Product A
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description
                            </Typography>
                        </CardContent>
                        <CardActions>

                        </CardActions>
                    </Card>
                    </Grid>

                    <Grid container className={classes.grid} item md={6} lg={6}>
                        <Card square={true} elevation={0}>
                            <CardMedia
                                component="img"
                                image={b}
                                height="300px"
                                alt="Product B"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" >
                                    Product B
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Description
                                </Typography>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid container className={classes.grid} item md={6} lg={6}>
                        <Card square={true} elevation={0}>
                            <CardMedia
                                component="img"
                                image={c}
                                height="300px"
                                alt="Product C"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Product C
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                   Description
                                </Typography>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid container className={classes.grid} item md={6} lg={6}>
                        <Card square={true} elevation={0}>
                            <CardMedia
                                component="img"
                                image={d}
                                height="300px"
                                alt="Product D"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Product D
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                   Description
                                </Typography>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>


                </Grid>
            </Grid>
        </div>
    );
}

export default BestSales;
import React, {useEffect, useRef} from 'react';

import useStyles from './styles';
import {Box} from "@mui/system";
import {Button, Grid, Typography} from "@mui/material";
import fashion from '../../../assets/video/fashion.mp4';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import FlippedBook from "./flipedBook/FlippedBook";
gsap.registerPlugin(ScrollTrigger);

const NewSeason = () => {

    const classes = useStyles();

    const body = useRef(null);
    const boxOne = useRef(null);
    const boxTwo = useRef(null);


    useEffect(() => {

        const bodyRef = body.current;
        const boxOneRef = boxOne.current;
        const boxTwoRef = boxTwo.current;


        if (window.innerWidth > 700 ) {
            gsap.to(boxOneRef, {scrollTrigger: { trigger: boxOneRef, start: 'top 50%', toggleActions: 'play none none pause' },
                opacity: 1, duration: 1.5, x: 60
                })

            gsap.to(boxTwoRef, {scrollTrigger: { trigger: boxTwoRef, start: 'top 55%', toggleActions: 'play none none pause' },
                opacity: 1, duration: 1.5, delay: 0.3, x: -150
            })
        }

        gsap.to(bodyRef, {
                        scrollTrigger: {trigger: bodyRef, scrub: 1},
                        y: 50
                    })
    },[])


    return (
        <>
            <Grid ref={body} className={classes.root}>
                {/*<Typography variant={"h2"} ref={title} sx={{width: 100}}>*/}
                {/*    NewSeason*/}
                {/*</Typography>*/}
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                        <Box className={classes.box} ref={boxOne}>
                            <FlippedBook />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} className={classes.box2Flex}>
                        <Box className={classes.box2} ref={boxTwo} >
                            <div className={classes.videoContainer}>
                            <span style={{fontFamily: 'Montserrat, sans-serif', fontSize: '150%', fontWeight: '500'}}>New Season</span>
                            <video className={classes.video} muted loop autoPlay playsInline>
                                <source src={fashion} type="video/mp4" />
                            </video>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

        </>
    );
}

export default NewSeason;
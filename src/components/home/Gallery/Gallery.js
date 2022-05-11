import React, {useEffect, useRef} from "react";
import Cards from "./Card/Cards";
import scrollPage from "../scrollPage/scrollPage";
import data from '../../../static/datd';
import beauty from '../../../assets/img/hua.jpg';
import accessories from '../../../assets/img/accessories.jpg';
import electronics from '../../../assets/img/it.jpg';
import fashion from '../../../assets/img/fashion.jpg';
import sport from '../../../assets/img/sport.jpg';


import useStyles from './styles';
import {Grid, Typography} from "@mui/material";

import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);





const Gallery = ({category}) => {

    const classes = useStyles();
    const checked = scrollPage('header');
    const arr = [fashion, beauty, electronics, sport, accessories];


    const body = useRef(null);

    const card = useRef(null);
    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);
    const card4 = useRef(null);

    useEffect(() => {
        const fRef = card.current;
        const bRef = card1.current;
        const eRef = card2.current;
        const sRef = card3.current;
        const aRef = card4.current;
        const bodyRef = body.current;


        gsap.to(fRef, {scrollTrigger: { trigger: fRef, start: 'top 65%', toggleActions: 'restart none none reset'  },
                duration: 1, opacity: 1, ease: 'power3.easeOut'})
        gsap.to(bRef, {scrollTrigger: { trigger: bRef, start: 'top 65%', toggleActions: 'restart none none reset'  },
                duration: 1, opacity: 1, delay: 0.1,ease: 'power3.easeOut'})
        gsap.to(eRef, {scrollTrigger: { trigger: eRef, start: 'top 65%', toggleActions: 'restart none none reset'  },
                duration: 1, opacity: 1, delay: 0.2,ease: 'power3.easeOut'})
        gsap.to(sRef, {scrollTrigger: { trigger: sRef, start: 'top 65%', toggleActions: 'restart none none reset'  },
                duration: 1, opacity: 1, delay: 0.3,ease: 'power3.easeOut'})
        gsap.to(aRef, {scrollTrigger: { trigger: aRef, start: 'top 65%', toggleActions: 'restart none none reset'  },
                duration: 1, opacity: 1, delay: 0.4,ease: 'power3.easeOut'})
        if (window.innerHeight > 700) {
            gsap.to(bodyRef, {
                scrollTrigger: {trigger: bodyRef, scrub: 1, toggleActions: 'restart none  reset'},
                y: 110
            })
        } else {
            gsap.to(bodyRef, {
                scrollTrigger: {trigger: bodyRef, scrub: 1, toggleActions: 'restart none none reset'},
                y: 100
            })
        }
    },[])

    return (
            <Grid ref={body} className={classes.page}>
                <Typography variant={"h4"} className={classes.title} id={"categoryPage"}>
                    SHOP BY CATEGORY
                </Typography>
                <Grid container className={classes.category}>
                    <Grid item xs={12} sm={2.4} className={classes.fadeIn} ref={card}>
                        <Cards data={data[0]} arr={arr[0]} checked={checked} category={category}/>
                    </Grid>
                    <Grid item xs={12} sm={2.4} className={classes.fadeIn} ref={card1}>
                        <Cards data={data[1]} arr={arr[1]} checked={checked} category={category}/>
                    </Grid>
                    <Grid item xs={12} sm={2.4} className={classes.fadeIn} ref={card2}>
                        <Cards data={data[2]} arr={arr[2]} checked={checked} category={category}/>
                    </Grid>
                    <Grid item xs={12} sm={2.4} className={classes.fadeIn} ref={card3}>
                        <Cards data={data[3]} arr={arr[4]} checked={checked} category={category}/>
                    </Grid>
                    <Grid item xs={12} sm={2.4} className={classes.fadeIn} ref={card4}>
                        <Cards data={data[4]} arr={arr[3]} checked={checked} category={category}/>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default Gallery;
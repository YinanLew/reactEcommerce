import React, {useEffect, useRef, useState} from 'react';
import {Typography, IconButton, Collapse, Grid} from '@mui/material';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { Link } from 'react-scroll';

import useStyles from './styles';

import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {

        const classes =useStyles();
        const [checked, setChecked] = useState(false)
        useEffect(() => {
               setChecked(true);
        })


        const parallax = useRef(null);
        const text = useRef(null);

        useEffect(() => {
                const para = parallax.current;
                const textRef = text.current;

                gsap.to(para, {scrollTrigger: { trigger: para, start: 'top',scrub: 1},
                       y: -20 })
                if (window.innerHeight > 700) {
                        gsap.to(textRef, {
                                scrollTrigger: {trigger: textRef, start: 'top center', scrub: 1},
                                y: 200
                        })
                } else {
                        gsap.to(textRef, {
                                scrollTrigger: {trigger: textRef, start: 'top center', scrub: 1},
                                y: 100
                        })
                }
        },[]);

        return (
            <>
                <div className={classes.root} id={"header"} ref={parallax}>
                        <div className={classes.container} ref={text}>
                                <Collapse in={checked} {...(checked ? { timeout: 1300 } : {})} collapsedSize={50}>
                                        <Typography variant={"h2"} className={classes.title} style={{fontWeight: '900'}} >
                                                <span>Created with life in <span style={{color: '#7b1fa2'}}>mind</span></span>
                                        </Typography>

                                        <Link activeClass="active" to="categoryPage" spy={true} smooth={true} duration={500} >
                                                <IconButton>
                                                        <KeyboardArrowDownSharpIcon sx={{ fontSize: 60 }} className={classes.downIcon}/>
                                                </IconButton>
                                        </Link>
                                </Collapse>
                        </div>

                </div>
            </>
        );
}

export default Header;
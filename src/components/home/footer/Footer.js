import React from 'react';
import {Grid} from "@mui/material";
import useStyles from "./styles";
import {NavLink} from "react-router-dom";

const Footer = () => {

    const classes = useStyles();

    return (
                <Grid container className={classes.about} style={{}}>
                    <Grid className={classes.p} item md={2}>
                        <div style={{ fontWeight: 600}} className={classes.title}>SHOP</div>
                        <br/>

                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Fashion</NavLink></div>

                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Beauty</NavLink></div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Electronics</NavLink></div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Accessories</NavLink></div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Sport</NavLink></div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Sale</NavLink></div>
                        <br/>
                    </Grid>
                    <Grid item md={2} className={classes.p}>
                        <div style={{ fontWeight: 600}} className={classes.title} >HELP</div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Track An Order</NavLink></div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Create A Return</NavLink></div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Contact Us</NavLink></div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>FAQs</NavLink></div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Privacy Policy</NavLink></div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Terms & Conditions</NavLink></div>
                        <br/>

                    </Grid>
                    <Grid item md={2} className={classes.p}>
                        <div style={{ fontWeight: 600}} className={classes.title} >ABOUT US</div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Discover Amazoo</NavLink></div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Careers</NavLink></div>
                        <br/>
                        <div><NavLink to={"/demo"} style={{textDecoration: 'none', color: '#000000'}}>Our Apps</NavLink></div>
                        <br/>
                    </Grid>
                    <Grid className={classes.sub} item md={2} >
                        {
                            window.innerWidth > 700 ? (
                          <div>
                            <div style={{ fontWeight: 600}} className={classes.title} >
                            BECOME A MEMBER
                            </div>
                            <br/>
                            <div>
                            Join now and get 10% off,
                            stay in the loop with the latest style news when you subscribe to our emails.
                            </div>
                              <br/>
                              <div className="form-control">
                                  <label htmlFor="my-input">Email address</label>
                                  <input id="my-input" aria-describedby="my-helper-text"/>
                                  <br/>
                                  <span id="my-helper-text">We'll never share your email.</span>
                              </div>
                          </div>
                            ) : (<></>)
                            }
                    </Grid>
                </Grid>
    );
}

export default Footer;
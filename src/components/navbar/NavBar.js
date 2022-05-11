import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import {AppBar, Toolbar, IconButton, Badge, Typography, Button, Box, ListItem, ListItemText, ListItemIcon, Divider, List,SwipeableDrawer} from "@mui/material";
import Search from '../container/search/Search';
import logo from '../../assets/img/logo.png';
import useStyles from './styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';



const NavBar = ({category, cartNum, openCart}) => {
        const classes = useStyles();
        const location = useLocation();
        const backTop = () => {
            window.scrollTo(0, 0);
        }



    const [state, setState] = React.useState({
        top: false
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const arr = ['man fashion','woman fashion']

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Men', 'Women'].map((text, index) => (
                    <NavLink to={"/search"} key={text} style={{textDecoration: 'none', color: 'gray'}}>
                    <ListItem button onClick={() => category(index % 2 === 0 ? arr[0] : arr[1])} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    </NavLink>
                ))}
            </List>
            <Divider />
            <List>
                {['Sale'].map((text, index) => (
                    <NavLink to={"/search"} key={text} style={{textDecoration: 'none', color: '#8e24aa'}}>
                    <ListItem button onClick={() => category('sale')}>
                        <ListItemIcon >
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    </NavLink>
                ))}
            </List>
        </Box>
);


    return (
            <>
                <AppBar position={"fixed"} className={classes.appBar} color={"inherit"}>
                    <Toolbar>
                        <div>
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer("top", true)}
                            >
                                <MenuSharpIcon />
                            </IconButton>
                            <SwipeableDrawer
                                anchor={"top"}
                                open={state["top"]}
                                onClose={toggleDrawer("top", false)}
                                onOpen={toggleDrawer("top", true)}
                            >
                                {list("top")}
                            </SwipeableDrawer>
                        </div>
                        <Typography variant={"h6"} className={classes.title} color={"inherit"}>
                            <NavLink to={"/"} style={{ textDecoration: 'none'}} onClick={backTop}>
                            {/*<img src={logo} alt={"Amazoo"} height={"25px"} className={classes.image}/>*/}
                            <span className={classes.logoText} >Amazoo</span>
                            </NavLink>
                        </Typography>
                        <div className={classes.search}>
                        <Search />
                        </div>
                        <NavLink to={"/login"} className={classes.login}>
                            <LoginSharpIcon color={"secondary"}/>
                        </NavLink>
                        <div className={classes.grow} />
                        <div className={classes.button}>
                            {location.pathname === '/cart' || (
                                <NavLink to={"/cart"}>
                                    <IconButton aria-label="cart" onClick={openCart}>
                                        <Badge badgeContent={cartNum} color="secondary">
                                            <ShoppingCartIcon/>
                                        </Badge>
                                    </IconButton>
                                </NavLink>
                            )}
                        </div>
                    </Toolbar>

                </AppBar>
            </>
        );
}

export default NavBar;
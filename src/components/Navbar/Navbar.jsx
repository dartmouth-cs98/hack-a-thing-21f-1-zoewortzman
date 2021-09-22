import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MeneuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/candyshop.jpeg'
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit" >
                        <img src={logo} alt="Zoe_Nina_Shop.js" height="25px" className={classes.image} />
                        Zoe_Nina_Shop.js
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color = "secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar
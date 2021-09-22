import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'

// const products = [
//     {id: 1, name: 'Shoes', description: 'running shoes.', price: '$50', image: 'https://images.app.goo.gl/V27qX3ej3oynh17B9'},
//     {id: 2, name: 'Watch', description: 'gold.', price: '$50'},
// ];

const Products = ({products}) => {
    const classes = useStyles();
    return (
        <main className={classes.content} >
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;
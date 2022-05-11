import React, {Component} from 'react';
import {Grid, Pagination} from '@mui/material';
import {connect} from 'react-redux';
import {searchAction} from '../../../redux/actions/search';
import {addToCart} from '../../../redux/actions/cart';
import Products from "./items/Products";

import './styles.css';

class ProductsList extends Component {

    state = {currentPage: 1, postsPerPage: 12};

    addToCart = (product, qty, price) => {
        const data = {product, qty, price}
        this.props.addToCart(data)
    }

    paginate = (value) => {
        console.log('page',value)
        this.setState({currentPage: value})
    }

    toTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        const {currentPage, postsPerPage} = this.state;
        const product = this.props.product;
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost);
        const total = Math.ceil(product.length / postsPerPage)

        return (
            <main className={"content"}>
                <Grid container justify={"center"} spacing={4}>
                    {
                        currentPosts.map((product) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                                    <Products productName={this.props.productName} product={product} addToCart={this.addToCart}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Pagination className={"pagination"} onClick={this.toTop} onChange={(event,value) => this.paginate(value)} count={total}  showFirstButton={true} showLastButton={true}/>
            </main>
        );
    }
}



export default connect(state => ({product: state.product, cart: state.cart}),
    {addToCart, searchAction})(ProductsList);
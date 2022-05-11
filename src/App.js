import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ProductsList from "./components/container/list/ProductsList";
import Home from './components/home/Home';
import Checkout from "./components/checkout/Checkout";
import {connect} from "react-redux";
import {addToCart, removeItem, removeAll} from "./redux/actions/cart";
import {searchAction} from "./redux/actions/search";
import Cart from "./components/cart/Cart";
import {addAction, deAction} from "./redux/actions/itemQty";
import axios from "axios";
import Demo from './demo/Demo';
import Login from "./components/navbar/login/login";
import Signup from "./components/navbar/signup/Signup";
import Forgot from "./components/navbar/forgot/Forgot";
import Validation from "./components/navbar/forgot/validation/Validation";

class App extends Component {

    state = {order: {}, error: '', data: ''};

    componentDidMount() {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }

    addItems = (id) => {
        const cart = this.props.cart;
        cart.map((item) => {
            if (item.product.id === id){
                item.qty+=1;
                this.props.addAction(item);
            }

        })
    }


    deItems = (id) => {
        const cart = this.props.cart;
        cart.map((item) => {
            if (item.qty > 1 && item.product.id === id) {
                item.qty-=1;
                this.props.deAction(item);
            }
        })
    }

    removeFromCart = (data) => {
        this.props.removeItem(data)
    }


    emptyCart = () => {
        this.props.removeAll()
    }


    checkout = (order) => {
        try {
            this.setState({order});

            this.props.removeAll();
        } catch (error) {
            console.log(error.message);

            this.setState({error: error.message})
        }
    }

    category = async (data) => {
        await this.setState({data})
        console.log(data)
        try {
            await axios.get(`https://api.unsplash.com/search/photos?per_page=28&query=${this.state.data}&client_id=P4k3jwgqxt4aQihFFeJ8Oj8fEGOIQ6LPZnUVqD_Y-HE`)
                .then((response) => {
                    console.log(response)
                        const product = response.data.results;
                        this.props.searchAction(product);
                    }
                )
        } catch (e) {
            console.log(e.message);
        }
        this.setState({term: ''});
        window.scrollTo(0, 0);
    };

    render() {
        const cartNum = this.props.cart.length;

        return (
            <div>
                <NavBar cartNum={cartNum} openCart={this.openCart} category={this.category}/>
                <Routes>
                    <Route path={"/search"} element={<ProductsList productName={this.props.productName}/>} />
                    <Route path={"/"} element={<Home category={this.category}/>} />
                    <Route path={"/cart"} element={<Cart
                                                        product={this.props.cart}
                                                        addItems={this.addItems}
                                                        deItems={this.deItems}
                                                removeFromCart={this.removeFromCart}
                                                        emptyCart={this.emptyCart}
                                                        />} />
                    <Route path={"/checkout"} element={<Checkout cart={this.props.cart} order={this.state.order} checkout={this.checkout} error={this.state.error}/>}/>
                    <Route path={"/login"} element={<Login />} />
                    <Route path={"/signup"} element={<Signup />} />
                    <Route path={"/forgot"} element={<Forgot />} />
                    <Route path={"/demo"} element={<Demo />} />
                </Routes>
            </div>
        );
    }
}

export default connect(state => ({product: state.product, cart: state.cart, total: state.totalItem, remove: state.remove, productName: state.productName}),
    {addToCart, searchAction, addAction, deAction, removeItem, removeAll})(App);
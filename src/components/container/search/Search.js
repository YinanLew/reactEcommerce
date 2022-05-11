import React, {Component} from 'react';
import {searchAction} from '../../../redux/actions/search'
import {connect} from 'react-redux';
import './styles.css';
import {NavLink} from "react-router-dom";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import {Button, IconButton, Input} from '@mui/material'
import axios from "axios";
import {getProductName} from "../../../redux/actions/getProductName";



class Search extends Component {

    state = {term: '', product: [], searchResult: ''};

    captureInput = async (event) => {
        await this.setState({term: event.target.value});
        const value = this.state.term

        this.props.getProductName(value)
    }

    search = () => {
        try {
            console.log("search",this.state.term)
            axios.get(`https://api.unsplash.com/search/photos?per_page=28&query=${this.state.term}&client_id=P4k3jwgqxt4aQihFFeJ8Oj8fEGOIQ6LPZnUVqD_Y-HE`)
            .then((response) => {
                const product = response.data.results;
                this.props.searchAction(product);
                this.setState({term: ''});
                }
            )
    } catch (e) {
            console.log(e.message);
        }
    }




    render() {
        return (
            <form >
                <Input id={"inp"} type="text" color={"secondary"} onChange={this.captureInput.bind(this)} value={this.state.term}/>

                    <IconButton color={"secondary"} onClick={this.search}>
                        <NavLink to={"/search"}>
                        <SearchSharpIcon />
                        </NavLink>
                    </IconButton>

            </form>
        );
    }
}

export default connect(state => ({product: state.product}),
    {searchAction, getProductName})(Search);


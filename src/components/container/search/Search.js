import React, {Component} from 'react';
import {searchAction} from '../../../redux/actions/search'
import {connect} from 'react-redux';
import './styles.css';
import {NavLink} from "react-router-dom";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import {Button, Input} from '@mui/material'
import axios from "axios";
import {getProductName} from "../../../redux/actions/getProductName";



class Search extends Component {

    state = {term: '', product: [], searchResult: ''};

    captureInput = async (event) => {
        await this.setState({term: event.target.value});
        const value = this.state.term

        this.props.getProductName(value)
    }

    search = async () => {
        if (this.state.term.trim() === '') {
            alert('Dear customer please input product name');
        }
        try {
            console.log("search",this.state.term)
        await axios.get(`https://api.unsplash.com/search/photos?per_page=28&query=${this.state.term}&client_id=P4k3jwgqxt4aQihFFeJ8Oj8fEGOIQ6LPZnUVqD_Y-HE`)
            .then((response) => {
                const product = response.data.results;
                this.props.searchAction(product);
                this.setState({searchResult: '/search'});
                }
            )
    } catch (e) {
            console.log(e.message);
        }
        this.setState({term: ''});
    }




    render() {
        return (
            <form >
                <Input id={"inp"} type="text" color={"secondary"} onChange={this.captureInput} defaultValue={this.state.term}/>
                <NavLink to={this.state.searchResult}>
                    <Button color={"secondary"} onClick={this.search}>
                        <SearchSharpIcon />
                    </Button>
                </NavLink>
            </form>
        );
    }
}

export default connect(state => ({product: state.product}),
    {searchAction, getProductName})(Search);


import React, {useState, useEffect} from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from "@mui/material";
import {useForm, FormProvider, set} from "react-hook-form";
import {Link} from 'react-router-dom';

import {commerce} from '../../lib/commerce'

import CustomTextField from "./CustomTextField";

const AddressForm =({checkoutToken, next}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] =useState([]);
    const [shippingSubdivision, setShippingSubdivision] =useState('');
    const [shippingOptions, setShippingOptions] =useState([]);
    const [shippingOption, setShippingOption] =useState('');



    // const fetchShippingCountries = async (checkoutTokenId) => {
    //     const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
    //
    //     setShippingCountries(countries);
    //     setShippingCountry(Object.keys(countries)[0]);
    // }

    // useEffect(() => {
    //     fetchShippingCountries(checkoutToken.id);
    // })

    const methods = useForm();
    // const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}));
    // console.log(countries)

    return (
        <div>
            <Typography variant={"h6"} gutterBottom>Shipping Address</Typography>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit((data) => next({...data}))}>
                        <Grid container spacing={3}>
                            <CustomTextField required name={'firstname'} label={'Firstname'} />
                            <CustomTextField required name={'lastname'} label={'Lastname'} />
                            <CustomTextField required name={'email'} label={'Email'} />
                            <CustomTextField required name={'address'} label={'Address'} />
                            <CustomTextField required name={'city'} label={'City'} />
                            <CustomTextField required name={'postcode'} label={'Postcode'} />
                            <CustomTextField required name={'province'} label={'Province'} />
                            <CustomTextField required name={'country'} label={'Country'} />
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <InputLabel>Shipping Country</InputLabel>*/}
                            {/*    <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>*/}
                            {/*        {countries.map((country) => (*/}
                            {/*        <MenuItem key={country.id} value={country.id}>*/}
                            {/*            Select*/}
                            {/*        </MenuItem>*/}
                            {/*        ))}*/}
                            {/*    </Select>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <InputLabel>Shipping Subdivision</InputLabel>*/}
                            {/*    <Select value={} fullWidth onChange={}>*/}
                            {/*        <MenuItem key={} value={}>*/}
                            {/*            Select*/}
                            {/*        </MenuItem>*/}
                            {/*    </Select>*/}

                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={6}>*/}
                            {/*    <InputLabel>Shipping Options</InputLabel>*/}
                            {/*    <Select value={} fullWidth onChange={}>*/}
                            {/*        <MenuItem key={} value={}>*/}
                            {/*            Select*/}
                            {/*        </MenuItem>*/}
                            {/*    </Select>*/}
                            {/*</Grid>*/}
                        </Grid>
                        <br/>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <Button component={Link} to={'/cart'} variant={"outlined"}>Back to Cart</Button>
                            <Button type={"submit"} variant={"contained"} color={"primary"}>Next</Button>
                        </div>
                    </form>
                </FormProvider>
        </div>
    );
}

export default AddressForm;
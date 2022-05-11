import React, {Component} from 'react';
import {Grid, Typography} from "@mui/material";

class Demo extends Component {
    render() {
        return (
            <div style={{height: '100vh'}}>
                <Grid container>
                    <Grid xs={12} style={{marginTop: '400px'}}>
                        <Typography variant={"h2"} style={{textAlign: 'center'}}>It's a demo page, Thanks for visiting!</Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Demo;
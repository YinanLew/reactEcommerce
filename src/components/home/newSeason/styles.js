import { makeStyles } from '@material-ui/core/styles';
import React from "react";


export default makeStyles((theme) => ({
    root:{
        margin: '200px 0 200px 0',
        height: '100%',
        "@media (max-width: 700px)": {
            margin: '10px 0 60px 0'
        },

    },
    box: {
        opacity: '0',
        width: 520,
        height: 500,
        justifyContent: 'center',
        "@media (max-width: 700px)": {
            width: '100%',
            height: 350,
            margin: '30px 0 0 0',
            transform: 'translateX(0)',
            opacity: '1',
            display: 'flex',
            justifyContent: 'center',
        }
    },
    box2Flex: {
        display: 'flex',
        justifyContent: 'flex-end',
        "@media (max-width: 700px)": {
            justifyContent: 'center'
        }
    },
    box2: {
        margin: '50px 0px 0px 80px',
        backgroundColor: '#e1b8ec',
        opacity: '0',
        width: 600,
        height: 400,
        "@media (max-width: 700px)": {
            margin: '0 0 0 0',
            width: '100%',
            height: 350,
            opacity: '1',
        },
        "@media (min-width: 1800px)": {
            margin: '50px 0px 0px 0px'
        },
        "@media (max-width: 1500px)": {
            width: 420,
            height: 350,
        },
        "@media (max-width: 1350px)": {
            width: 280,
        },
        "@media (max-width: 1200px)": {
            width: 600,
        }
    },
    videoContainer: {
        marginTop: '20px',
        marginLeft: '40px',
        "@media (max-width: 700px)": {
            marginTop: '0',
            marginLeft: '0',
        },
        // "@media (min-width: 1800px)": {
        //     transform: 'translateX(-100px)'
        // },

    },
    video: {
        width: 600,
        height: 400,
        marginLeft: 20,
        "@media (max-width: 700px)": {
            margin: '10px 0 0 0',
            width: '100%',
            height: 300,
            opacity: '1',
        },
        // "@media (min-width: 1800px)": {
        //     width: 750,
        //     height: 450,
        // },
    }
}));

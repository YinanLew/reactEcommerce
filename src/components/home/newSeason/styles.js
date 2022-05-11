import { makeStyles } from '@material-ui/core/styles';
import React from "react";


export default makeStyles((theme) => ({
    root:{
        margin: '200px 0 200px 0',
        height: '100%',
        "@media (max-width: 700px)": {
            margin: '10px 0 0 0'
        },

    },
    box: {
        opacity: '0',
        width: 520,
        height: 500,
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
        margin: '50px',
        backgroundColor: '#e1b8ec',
        opacity: '0',
        width: 600,
        height: 400,
        "@media (max-width: 700px)": {
            margin: '0 0 0 0',
            width: '100%',
            height: 350,
            opacity: '1',
        }
    },
    videoContainer: {
        marginTop: '20px',
        marginLeft: '40px',
        "@media (max-width: 700px)": {
            marginTop: '0',
            marginLeft: '0',
        }

    },
    video: {
        width: 700,
        height: 400,
        "@media (max-width: 700px)": {
            margin: '10px 0 0 0',
            width: '100%',
            height: 300,
            opacity: '1',
        }
    }
}));

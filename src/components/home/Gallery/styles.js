import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    page: {
      height: '130%'
    },
    title: {
        width: '100%',
        padding: '10px 0 0 0',
        textAlign: 'center'
    },
    category: {
      margin: '50px 0 0 0'
    },
    fadeIn: {
        opacity:0,
        "@media (max-width: 600px)": {
            opacity: '1',
        }
    }
}));

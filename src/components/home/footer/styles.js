import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    about: {
        height: '100%',
        justifyContent: "center",
        backgroundColor: '#f0f0f0',
        "@media (max-width: 600px)": {
            marginTop: '50px',
            height: ''
        }
    },
    p: {
        textAlign: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',
        lineHeight: '1.2',
        fontFamily: 'Montserrat',
        fontSize: '80%',
        color: '#000000'

    },
    sub: {
        lineHeight: '1.7',
        paddingTop: '50px',
        fontFamily: 'Montserrat',
        fontSize: '80%',
        "@media (max-width: 600px)": {
           opacity: '0'
        }
    }
}));
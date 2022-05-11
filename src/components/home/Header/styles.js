import { makeStyles } from '@material-ui/core/styles';
import full from '../../../assets/img/full.jpg';

export default makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${full})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        marginTop: '150px',
        textAlign: 'center'
    },
    title: {
        paddingTop: '80px',
        fontFamily: 'Lobster, cursive, Arial'
    },
    downIcon: {
        color: '#7b1fa2'
    }
}));



import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        margin: '5px'
    },
    media: {
        height: 260,
        overflow: 'hidden',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Lobster, cursive, Arial'
    },
    description: {
        fontFamily: 'Lobster, cursive, Arial'
    }
}));
import {INCREMENT, DECREMENT} from '../constant'


const initState = 0;
function itemReducer(preState=initState, action) {
    const {type, data} = action

    switch (type) {
        case INCREMENT:
            return preState + data.qty
        case DECREMENT:
            return preState - data.qty
        default:
            return preState;
    }

}

export default itemReducer;
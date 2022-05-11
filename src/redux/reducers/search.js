import {SEARCH} from '../constant'


const initState = [];

function searchReducer(preState=initState, action) {
    const {type, data} = action
    switch (type) {
        case SEARCH:
            return data;//返回API的值

        default:
            return preState;
    }
}

export default searchReducer;
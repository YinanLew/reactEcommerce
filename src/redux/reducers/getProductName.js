import {NAME} from '../constant'


const initState = '';

function nameReducer(preState=initState, action) {
    const {type, data} = action
    // console.log('111',data)
    switch (type) {
        case NAME:
            return data;//返回API的值

        default:
            return preState;
    }
}

export default nameReducer;
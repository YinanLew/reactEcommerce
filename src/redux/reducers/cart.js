import {CART, REMOVE, EMPTY} from '../constant'


const initState = [];


function cartReducer(preState=initState, action) {
    const {type, data} = action
    switch (type) {
        case CART:
            const exist = preState.find((item) => item.product.id === data.product.id);
            if(exist){
                return preState.map((item) => data.product.id === item.product.id ? {...item, qty: item.qty+1}: item );
            }else {
                return [data,...preState];
            }
        case REMOVE:
            const existItem = preState.find((item) => item.product.id === data.product.id);
            if (existItem){
                return preState.filter((item) => item.product.id !== existItem.product.id);
            }
            break
        case EMPTY:
            return preState=[];
        default:
            return preState;
            }
        }



export default cartReducer;
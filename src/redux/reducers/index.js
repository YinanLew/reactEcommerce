import {combineReducers} from "redux";
import product from './search';
import cart from './cart';
import totalItem from './itemQty';
import productName from './getProductName';



export default combineReducers({
    product,
    cart,
    totalItem,
    productName
})


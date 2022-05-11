import {CART, REMOVE, EMPTY} from "../constant";

export const addToCart = (data) => {
    return {type:CART, data};
}

export const removeItem = (data) => {
    return {type:REMOVE, data};
}

export const removeAll = (data) => {
    return {type: EMPTY, data}
}

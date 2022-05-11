import {INCREMENT, DECREMENT} from "../constant";

export const addAction = (data) => {
    return {type: INCREMENT, data};
}

export const deAction = (data) => {
    return {type: DECREMENT, data};
}
import { UPDATE_FASHION_COLOR, UPDATE_FASHION_QUANTITY, TOGGLE_FASHION_QUANTITY, REMOVE_FASHION_ITEM, PAYLOAD } from '../types/fashionTypes';

export const fashionColor = (payload: PAYLOAD) => {
    return ({
        type: UPDATE_FASHION_COLOR,
        payload
    })
}

export const fashionQuantity = (payload: PAYLOAD) => {
    return ({
        type: UPDATE_FASHION_QUANTITY,
        payload
    }) 
}

export const toggleFashionQuantity = (payload: PAYLOAD) => {
    return ({
        type: TOGGLE_FASHION_QUANTITY,
        payload
    })
}

export const fashionRemoveItem = (payload: PAYLOAD) => {
    return ({
        type: REMOVE_FASHION_ITEM,
        payload
    })
}
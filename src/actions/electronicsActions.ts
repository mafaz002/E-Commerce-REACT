import { UPDATE_ELECTRONICS_COLOR, UPDATE_ELECTRONICS_QUANTITY, TOGGLE_ELECTRONICS_QUANTITY, REMOVE_ELECTRONICS_ITEM, PAYLOAD } from '../types/electronicsTypes';

export const electronicsColor = (payload: PAYLOAD) => {
    return ({
        type: UPDATE_ELECTRONICS_COLOR,
        payload
    })
}

export const electronicsQuantity = (payload: PAYLOAD) => {
    return ({
        type: UPDATE_ELECTRONICS_QUANTITY,
        payload
    })
}

export const toggleElectronicsQuantity = (payload: PAYLOAD) => {
    return ({
        type: TOGGLE_ELECTRONICS_QUANTITY,
        payload
    })
}

export const electronicsRemoveItem = (payload: PAYLOAD) => {
    return ({
        type: REMOVE_ELECTRONICS_ITEM,
        payload
    })
}
import { electronicsState } from '../globalState/electronicsState';
import { UPDATE_ELECTRONICS_COLOR, UPDATE_ELECTRONICS_QUANTITY, TOGGLE_ELECTRONICS_QUANTITY, REMOVE_ELECTRONICS_ITEM, TYPE, PAYLOAD } from '../types/electronicsTypes';

const initialState = electronicsState;

type Action = TYPE & PAYLOAD;

export const electronicsReducer = (state = initialState, action: Action) => {
    switch (action.type) {

        case UPDATE_ELECTRONICS_COLOR:
            let tempItems = [...state.items]
            //@ts-ignore
            tempItems[action.payload.index].color = action.payload.value
            return { ...state, items: tempItems }

        case UPDATE_ELECTRONICS_QUANTITY:
            let tempItems1 = [...state.items]
            //@ts-ignore
            tempItems1[action.payload.index].quantity += 1;

            let total = 0;
            for (let i = 0; i < tempItems1.length; i++) {
                total += (tempItems1[i].quantity * tempItems1[i].price)
            }

            let Quantity = state.Quantity;
            Quantity += 1;
            
            return { items: tempItems1, total, Quantity }

        case TOGGLE_ELECTRONICS_QUANTITY:
            let tempItems2 = [...state.items]
            //@ts-ignore
            let diff = action.payload.value - tempItems2[action.payload.index].quantity;
            //@ts-ignore
            tempItems2[action.payload.index].quantity = action.payload.value;

            let total2 = 0;
            for (let i = 0; i < tempItems2.length; i++) {
                total2 += (tempItems2[i].quantity * tempItems2[i].price)
            }

            let Quantity2 = state.Quantity;

            Quantity2 += diff;

            return { items: tempItems2, total: total2, Quantity: Quantity2 }

        case REMOVE_ELECTRONICS_ITEM:
            let item = state.items;
            //@ts-ignore
            let quantity = item[action.payload.index].quantity;
            //@ts-ignore
            item[action.payload.index].quantity = 0;

            let quantityRemove = state.Quantity;
            quantityRemove -= quantity;

            let totalRemove = 0;
            for (let i = 0; i < item.length; i++) {
                totalRemove += (item[i].quantity * item[i].price)
            }

            return { items: item, total: totalRemove, Quantity: quantityRemove }

        default:
            return state;
    }
}
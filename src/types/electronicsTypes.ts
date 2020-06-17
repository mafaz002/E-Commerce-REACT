export const UPDATE_ELECTRONICS_COLOR = 'UPDATE_ELECTRONICS_COLOR';

export const UPDATE_ELECTRONICS_QUANTITY = 'UPDATE_ELECTRONICS_QUANTITY';

export const REMOVE_ELECTRONICS_ITEM = 'REMOVE_ELECTRONICS_ITEM';

export const TOGGLE_ELECTRONICS_QUANTITY = 'TOGGLE_ELECTRONICS_QUANTITY';

export type TYPE = {
    type: string
}

export type PAYLOAD = {
    index: number,
    value?: string | number
}

export type PRODUCT = {
    photo?: string,
    name?: string,
    color?: string,
    size?: number,
    price?: number,
    quantity?: number
}
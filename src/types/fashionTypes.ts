export const UPDATE_FASHION_COLOR = 'Update_Color';

export const UPDATE_FASHION_QUANTITY = 'UPDATE_QUANTITY';

export const REMOVE_FASHION_ITEM = 'REMOVE_ITEM';

export const TOGGLE_FASHION_QUANTITY = 'TOGGLE_FASHION_QUANTITY';

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
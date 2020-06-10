import { fashionMetaData } from './fashionMetaData';

export const fashionState = {
    items: [{
        itemIndex : 0,
        photo: 't-shirt.jpg',
        name: 'Shoe',
        color: 'dodgerblue',
        size: 8,
        price: 189.95,
        quantity: 0,
        metadata: fashionMetaData[0]
    }
        , {
            itemIndex: 1,
            photo: 'shoes.jpg',
            name: 'Shoe',
            color: 'red',
            size: 8,
            price: 125,
            quantity: 0,
            metadata: fashionMetaData[1]
        }
    ],
    total: 0,
    Quantity:0
}
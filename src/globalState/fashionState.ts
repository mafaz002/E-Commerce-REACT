import { fashionMetaData } from './fashionMetaData';

export const fashionState = {
    items: [{
        itemIndex : 0,
        photo: 't-shirt.jpg',
        name: 't-shirt',
        color: 'dodgerblue',
        size: 'S',
        price: 189.95,
        quantity: 0,
        metadata: fashionMetaData[0]
    }
        , {
            itemIndex: 1,
            photo: 'shoes.jpg',
            name: 'shoe',
            color: 'red',
            size: 8,
            price: 125.53,
            quantity: 0,
            metadata: fashionMetaData[1]
        }
        , {
            itemIndex: 2,
            photo: 'sunglassW.jpg',
            name: 'sunglass',
            color: '#FFA500',
            size: 'S',
            price: 234.87,
            quantity: 0,
            metadata: fashionMetaData[2]
        }
        , {
            itemIndex: 3,
            photo: 'sunglassM.jpg',
            name: 'sunglass',
            color: 'green',
            size: 'S',
            price: 420.78,
            quantity: 0,
            metadata: fashionMetaData[3]
        }
    ],
    total: 0,
    Quantity:0
}
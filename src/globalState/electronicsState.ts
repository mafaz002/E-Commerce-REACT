import { electronicsMetaData } from './electronicsMetaData';

export const electronicsState = {
    items: [{
        itemIndex: 0,
        photo: 'laptop.jpg',
        name: 'Laptop',
        color: 'dodgerblue',
        size: 8,
        price: 189.95,
        quantity: 0,
        metadata: electronicsMetaData[0]
    }
        , {
        itemIndex: 1,
        photo: 'iphone.jpg',
        name: 'IPhone',
        color: 'red',
        size: 8,
        price: 125,
        quantity: 0,
        metadata: electronicsMetaData[1]
        }
        , {
            itemIndex: 2,
            photo: 'dslr.jpg',
            name: 'DSLR',
            color: '#FFA500',
            size: 8,
            price: 125,
            quantity: 0,
            metadata: electronicsMetaData[2]
        }
        , {
            itemIndex: 3,
            photo: 'ps5.jpg',
            name: 'PlayStation 5',
            color: 'green',
            size: 8,
            price: 125,
            quantity: 0,
            metadata: electronicsMetaData[3]
        }
    ],
    total: 0,
    Quantity: 0
}
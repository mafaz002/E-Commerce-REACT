import React, {useState} from 'react';
import './MyShoppingCart.css';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingTable } from '../ShoppingTable/ShoppingTable';
import { Checkout } from '../Checkout/Checkout';
import { fashionRemoveItem, toggleFashionQuantity } from '../../actions/fashionActions';
import { electronicsRemoveItem, toggleElectronicsQuantity } from '../../actions/electronicsActions';
import { PRODUCT, REMOVE_FASHION_ITEM } from '../../types/fashionTypes';
import { REMOVE_ELECTRONICS_ITEM } from '../../types/electronicsTypes';

export const MyShoppingCart = () => {
    const titles: string[] = ['Item', 'Name', 'Price', 'Quantity', 'Total', ''];

    //@ts-ignore
    const fashionProducts = useSelector(state => state.Fashion);
    //@ts-ignore
    const electronicsProducts = useSelector(state => state.Electronics);

    const dispatch = useDispatch();

    //@ts-ignore
    let fashionItems = fashionProducts.items.filter((value: PRODUCT, index: number) => value.quantity > 0);
    //@ts-ignore
    let electronicsItems = electronicsProducts.items.filter((value: PRODUCT, index: number) => value.quantity > 0);

    const grandTotal = fashionProducts.total + electronicsProducts.total

    const [fashionitemState, changeFashionItemState] = useState(fashionItems);
    const [electronicsitemState, changeElectronicsItemState] = useState(electronicsItems);

    const removeFashionItem = (itemIndex: number, stateIndex: number, category: string) => {
        let obj = { index: itemIndex }

        if (category === REMOVE_FASHION_ITEM)
            dispatch(fashionRemoveItem(obj))

        let Items = fashionitemState;
        Items = Items.filter((value: any, index: number) => index !== stateIndex);
        changeFashionItemState(Items);
    }

    const removeElectronicsItem = (itemIndex: number, stateIndex: number, category: string) => {
        let obj = { index: itemIndex }

        if (category === REMOVE_ELECTRONICS_ITEM)
            dispatch(electronicsRemoveItem(obj))

        let Items = electronicsitemState;
        Items = Items.filter((value: any, index: number) => index !== stateIndex);
        changeElectronicsItemState(Items);
    }

    return (
        <div className={'cartContainer'}>
            <h3>My Cart</h3>

            {fashionitemState.length > 0 || electronicsitemState.length > 0 ?
                <div className={'cartTable darkGrey'}>
                {titles.map((value: any, index: number) => <div key={index} className={'updateWidth'}>{value}</div>)}
                </div>
                : <div className={'noItem'}>No Items Selected to Display</div>
            }

            <ShoppingTable items={fashionitemState} actionCreator={toggleFashionQuantity} removeItem={removeFashionItem} category={REMOVE_FASHION_ITEM} />
            <ShoppingTable items={electronicsitemState} actionCreator={toggleElectronicsQuantity} removeItem={removeElectronicsItem} category={REMOVE_ELECTRONICS_ITEM} />

            {
                (fashionitemState.length > 0 || electronicsitemState.length > 0) && <div className={'cartTable lightGrey'}>
                    <div className={'updateWidth'}></div>
                    <div className={'updateWidth'}></div>
                    <div className={'updateWidth'}></div>
                    <div className={'updateWidth grandTotal'}>Grand-Total</div>
                    <div className={'updateWidth grandPrice'}>{`$ ${grandTotal}`}</div>
                    <div className={'updateWidth'}></div>
                </div>
            }

            {
                (fashionitemState.length > 0 || electronicsitemState.length > 0) && <Checkout />
            }

        </div>
    )
}
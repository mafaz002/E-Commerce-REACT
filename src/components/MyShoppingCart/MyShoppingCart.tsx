import React, {useState} from 'react';
import './MyShoppingCart.css';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingTable } from '../ShoppingTable/ShoppingTable';
import { fashionRemoveItem, toggleFashionQuantity } from '../../actions/fashionActions';
import { PRODUCT, REMOVE_FASHION_ITEM } from '../../types/fashionTypes';

export const MyShoppingCart = () => {
    const titles: string[] = ['Item', 'Name', 'Price', 'Quantity', 'Total', ''];

    //@ts-ignore
    const fashionProducts = useSelector(state => state.Fashion);
    const dispatch = useDispatch();

    //@ts-ignore
    let Items = fashionProducts.items.filter((value:PRODUCT,index:number)=>value.quantity>0);
    const grandTotal = fashionProducts.total

    const [itemState,changeItemState] = useState(Items);

    const removeItem = (itemIndex: number, stateIndex: number, category: string) => {
        let obj = { index: itemIndex }

        if (category === REMOVE_FASHION_ITEM)
            dispatch(fashionRemoveItem(obj))

        let Items = itemState;
        Items = Items.filter((value: any, index: number) => index !== stateIndex);
        changeItemState(Items);
    }

    return (
        <div className={'cartContainer'}>
            <h3>My Cart</h3>

            {itemState.length > 0 ?
                <div className={'cartTable darkGrey'}>
                {titles.map((value: any, index: number) => <div key={index} className={'updateWidth'}>{value}</div>)}
                </div>
                : <div className={'noItem'}>No Items Selected to Display</div>
            }
            
            <ShoppingTable items={itemState} actionCreator={toggleFashionQuantity} removeItem={removeItem} category={REMOVE_FASHION_ITEM} />

            {
                itemState.length > 0 && <div className={'cartTable lightGrey'}>
                    <div className={'updateWidth'}></div>
                    <div className={'updateWidth'}></div>
                    <div className={'updateWidth'}></div>
                    <div className={'updateWidth grandTotal'}>Grand-Total</div>
                    <div className={'updateWidth grandPrice'}>{`$ ${grandTotal}`}</div>
                    <div className={'updateWidth'}></div>
                </div>
            }

        </div>
    )
}
import React, { useContext } from 'react';
import './CardFooter.css';
import { FiShoppingCart } from "react-icons/fi";
import {RootContext} from '../../App';
import { useDispatch } from 'react-redux';
import { fashionQuantity } from '../../actions/fashionActions';
import { PAYLOAD } from '../../types/fashionTypes';

export const CardFooter: React.FunctionComponent = () => {
    const context = useContext(RootContext).item;
    const dispatch = useDispatch();
    const index = context.itemIndex;
    const theme = context.color;
    const price = context.price;

    const handleCart = () => {
        let obj: PAYLOAD = {
            index
        };
        dispatch(fashionQuantity(obj));
    }

    const handleOver = (event: any) => {
        event.target.style.backgroundColor = 'seagreen';
        event.target.style.color = 'black';
    }

    const handleOut = (event: any) => {
        event.target.style.backgroundColor = theme;
        event.target.style.color = 'white';
    }

    return (
        <div className={'footerContainer'}>
            <div className={'cartButton'} onClick={handleCart} onMouseOver={handleOver} onMouseOut={handleOut} style={{ backgroundColor: theme }}>
                <FiShoppingCart size={15} className={'custom'} />
                ADD TO CART
            </div>
            <div className={'itemPrice'}>{`$${price}`}</div>
        </div>
    );
}
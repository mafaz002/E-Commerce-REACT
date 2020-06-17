import React, {useContext} from 'react';
import './CardProduct.css';
import { FiShare2 } from "react-icons/fi";
import { RootContext } from '../ItemType/ItemType';

export const CardProduct = () => {
    const context = useContext(RootContext).item;
    const theme = context.color;
    return (
        <div className={'productContainer'}>
            <img src={require(`../../Photos/${context.photo}`)} className={'responsive'} />
            <div className={'shareButton'} style={{backgroundColor: theme}}>
                <FiShare2 size={'15'} />
            </div>
        </div>
        );
}
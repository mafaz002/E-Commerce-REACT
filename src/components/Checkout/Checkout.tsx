import React from 'react';
import './Checkout.css';
import { AiFillCreditCard } from "react-icons/ai";
import { useHistory } from 'react-router-dom';

export const Checkout = () => {
    const history = useHistory();
    return (
        <div className={'checkoutContainer'} onClick={() => history.push('/Checkout')}>
            <AiFillCreditCard />
            <div className={'ML'}>CHECKOUT</div>
         </div>
    )
}
import React from 'react';
import './ShoppingCard.css';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardBody } from '../CardBody/CardBody';
import { CardColorPicker } from '../CardColorPicker/CardColorPicker';
import { CardSizePicker } from '../CardSizePicker/CardSizePicker';
import { CardFooter } from '../CardFooter/CardFooter';
import { CardProduct } from '../CardProduct/CardProduct';

export const ShoppingCard = () => {
    return (
        <div className={'shoppingContainer'}>
            <CardProduct />
            <div className={'cardRightSide'}>
                <CardHeader />
                <CardBody />
                <CardColorPicker />
                <CardSizePicker />
                <CardFooter />
            </div>
        </div>
    );
}
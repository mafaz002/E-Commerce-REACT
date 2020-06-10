import React from 'react';
import './ShoppingTable.css';
import { GrFormClose } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { PAYLOAD } from '../../types/fashionTypes';

type Props = {
    items?: any,
    actionCreator?: (payload: PAYLOAD) => {
        type: string,
        payload:PAYLOAD
    },
    removeItem?: (index: number, stateIndex: number,category:string) => void,
    category?: string
}

export const ShoppingTable: React.FunctionComponent<Props> = (props) => {

    const dispatch = useDispatch();

    const handleQuantityChange = (event: any, index: number) => {
        let obj = {
            index,
            value: +event.target.value
        }
        //@ts-ignore
        dispatch(props.actionCreator(obj));
    }  

    return (
        <div>
            {
                //@ts-ignore
                props.items.map((value,index) => {
                    return (
                        <div key={value.itemIndex} className={'flexItem'}>
                            <div className={'setWidth'}><img src={require(`../../Photos/${value.photo}`)} className={'cartPhoto'} /></div>
                            <div className={'setWidth'}>{value.name}</div>
                            <div className={'setWidth'}>{value.price}</div>
                            <div className={'setWidth'}>
                                <input type="number" min={1} value={value.quantity} onChange={(event) => handleQuantityChange(event, value.itemIndex)} className={'quantityPicker'} />
                            </div>
                            <div className={'setWidth'}>{value.price * value.quantity}</div>
                            <div className={'setWidth'}><GrFormClose className={'removeItem'} onClick={() =>
                                //@ts-ignore
                                props.removeItem(value.itemIndex, index, props.category)} /></div>
                        </div>
                    )
                })}
        </div>
        )
}
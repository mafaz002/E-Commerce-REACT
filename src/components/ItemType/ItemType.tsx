import React from 'react';
import './ItemType.css';
import { ShoppingCard } from '../ShoppingCard/ShoppingCard';
import { NavBar } from '../NavBar/NavBar';
import { CoverPhoto } from '../CoverPhoto/CoverPhoto';
import { useSelector } from 'react-redux';
import { PRODUCT } from '../../types/fashionTypes';
import { Footer } from '../Footer/Footer';

export const RootContext: React.Context<any> = React.createContext(0);

type Props = {
    type: string,
    name: string,
    quotes?: boolean
}

export const ItemType : React.FunctionComponent<Props> = (props) => {
    //@ts-ignore
    let rootState = useSelector(state => state[props.type]);
    
    return (
        <div>
            <NavBar />
            <CoverPhoto type={props.type} name={props.name} quotes={props.quotes}/>
            <div className={'shoppingItems'}>
                {
                    rootState.items.map((value: PRODUCT, index: number) =>
                        //@ts-ignore
                        <RootContext.Provider value={{ item: value, type: props.type }} key={index}>
                            <ShoppingCard />
                        </RootContext.Provider>)
                }
            </div>
            <Footer/>
        </div>
        )
}

import React from 'react';
import './SideMenu.css';
import { GrClose } from "react-icons/gr";
import { MyShoppingCart } from '../MyShoppingCart/MyShoppingCart';

type Props = {
    show: boolean;
    toggleShow: () => void
}

export const SideMenu: React.FunctionComponent<Props> = (props) => {
    const value = props.show ? 'block' : 'none';
    return (
        <div className={'SideMenuContainer'} style={{ display: value }}>
            <MyShoppingCart/>
            <GrClose className={'close'} onClick={props.toggleShow} />
        </div>
        );
}

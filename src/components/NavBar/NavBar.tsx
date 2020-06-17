import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { FaShoppingCart } from "react-icons/fa";
import { SideMenu } from '../SideMenu/SideMenu';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

function CustomizedBadges(grandQuantity: number = 0) {
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={grandQuantity} color="secondary">
                <FaShoppingCart style={{ color: 'black' }} />
            </StyledBadge>
        </IconButton>
    );
}

type Props = {
    name?: string;
}

const defaultProps = {
    name: 'Mafaz'
}

export const NavBar: React.FunctionComponent<Props> = (props) => {
    useEffect(() => {
        //@ts-ignore
        document.getElementById('/').style.color = 'white';
    }, []);

    const [show, changeShow] = useState(false)
    const toggleShow = () => changeShow(prevShow => !prevShow)

    const state = useSelector(State => State);
    //@ts-ignore
    const grandQuantity = state.Fashion.Quantity + state.Electronics.Quantity;

    const history = useHistory();

    const handleClick = (URL: string) => {
        //@ts-ignore
        document.getElementById("/").style.color = 'black';
        //@ts-ignore
        document.getElementById("/Electronics").style.color = 'black';
        //@ts-ignore
        document.getElementById(URL).style.color = 'white';
        history.push(URL);
    }

    return (
        <div className={'navContainer'}>
            <img src={require('../../Photos/shopLogo.png')} className={'shopLogo'} />
            <div className={'navItem'} id={'/'} onClick={() => handleClick('/')}>FASHION</div>
            <div className={'navItem'} id={'/Electronics'} onClick={() => handleClick('/Electronics')}>ELECTRONICS</div>
            <div className={'navItem MR'} onClick={toggleShow}>
                {CustomizedBadges(grandQuantity)}
            </div>
            {show && <SideMenu show={show} toggleShow={toggleShow} />}
        </div>
    );
}

NavBar.defaultProps = defaultProps;
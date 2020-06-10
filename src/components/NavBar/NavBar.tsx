import React, {useState} from 'react';
import './NavBar.css';
import { FaShoppingCart } from "react-icons/fa";
import { SideMenu } from '../SideMenu/SideMenu';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from 'react-redux';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

function CustomizedBadges(grandQuantity:number=0) {
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={grandQuantity} color="secondary">
                <FaShoppingCart style={{color:'black'}}/>
            </StyledBadge>
        </IconButton>
    );
}

type Props = {
    name?: string;
}

const defaultProps = {
    name : 'Mafaz'
}

export const NavBar: React.FunctionComponent<Props> = (props) => {
    const [show, changeShow] = useState(false)
    const toggleShow = () => changeShow(prevShow => !prevShow)

    const state = useSelector(State => State);
    //@ts-ignore
    const grandQuantity = state.Fashion.Quantity;

    return (
        <div className={'navContainer'}>
            <div className={'navItem'}>FASHION</div>
            <div className={'navItem'}>ELECTRONICS</div>
            <div className={'navItem'}>HOUSEHOLD</div>
            <div className={'navItem'} onClick={toggleShow}>
                {CustomizedBadges(grandQuantity)}
            </div>
            {show && <SideMenu show={show} toggleShow={toggleShow} />}
        </div>
        );
}

NavBar.defaultProps = defaultProps;
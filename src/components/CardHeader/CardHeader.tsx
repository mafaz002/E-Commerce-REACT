import React, {useContext} from 'react';
import './CardHeader.css';
import {RootContext} from '../../App';

export const CardHeader: React.FunctionComponent = () => {
    let context = useContext(RootContext).item;
    let theme = context.color;
    let metaData = context.metadata.header;
    
    return (
        <div className='headerContainer'>
            <h4 className={'customFonts inlineBlock'}>{metaData.mainTitle}</h4>
            <div className={'newButton inlineBlock'} style={{ backgroundColor: theme }}>NEW</div>
            <p>{metaData.subTitle}</p>
        </div>);
} 
import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <div className={'Footer'}>
            <div className={'footItem'}>
                <img src={require('../../Photos/shopLogo.png')} className={'shopLogo'} />
                <div>23,Bulhoms Gate,Oslo,Norway</div>
                <div className={'copy'}>Copyrights Reserved</div>
            </div>
        </div>
        )
}
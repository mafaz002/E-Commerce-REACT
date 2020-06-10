import React from 'react';
import './CoverPhoto.css';

export const CoverPhoto = () => {
    return (
        <div className={'photoContainer'}>
            <img src={require('../../Photos/coverTurkey.jpg')} className={'Cover'} />
            <div className={'quotes'}>
                <h1 className={'photoCaption'}>Happiness is not in Money but in Shopping</h1>
            </div>
        </div>
        );
}
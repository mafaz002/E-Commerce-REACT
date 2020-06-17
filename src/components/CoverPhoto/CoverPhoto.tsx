import React from 'react';
import './CoverPhoto.css';

type Props = {
    type: string,
    name: string,
    quotes?: boolean
}

const defaultProps = {
    quotes: false
}

export const CoverPhoto: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={'photoContainer'}>
            <img src={require(`../../Photos/${props.name}.jpg`)} className={'Cover'} />
            {props.quotes &&
                <div className={'quotes'}>
                <h1 className={'photoCaption'}>Happiness is not in Money but in Shopping</h1>
                </div>
            }
        </div>
        );
}

CoverPhoto.defaultProps = defaultProps;
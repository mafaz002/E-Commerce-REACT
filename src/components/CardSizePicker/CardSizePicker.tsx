import React, {useContext} from 'react';
import './CardSizePicker.css';
import { RootContext } from '../../App';

type Props = {
    title?: string
}

const defaultProps = {
    title: 'Size'
}

export const CardSizePicker: React.FunctionComponent<Props> = (props) => {
    let context = useContext(RootContext).item;
    let theme = context.color;
    let metaData = context.metadata.size;

    const handleOver = (event: any) => {
        event.target.style.backgroundColor = 'seagreen';
        event.target.style.color = 'black';
    }

    const handleOut = (event: any) => {
        event.target.style.backgroundColor = theme;
        event.target.style.color = 'white';
    }

    if (metaData.show) {
        return (
            <div className='cardSizeContainer'>
                <h3 className='customSizeFont'>{props.title}</h3>
                {metaData.sizeValues.map((value: any, index: number) =>
                    <div className={'numberPalette'} key={index} style={{ backgroundColor: theme }} onMouseOver={handleOver} onMouseOut={handleOut}>
                    {value}</div>)}
            </div>
        );
    }
    return (<div></div>);
}

CardSizePicker.defaultProps = defaultProps
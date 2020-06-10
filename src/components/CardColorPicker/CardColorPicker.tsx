import React, {useContext} from 'react';
import './CardColorPicker.css';
import { CirclePicker } from 'react-color';
import { RootContext } from '../../App';
import { useDispatch } from 'react-redux';
import { fashionColor } from '../../actions/fashionActions';

type Props = {
    title?: string
}

const defaultProps = {
    title : 'Color'
}

export const CardColorPicker: React.FunctionComponent<Props> = (props) => {
    let context = useContext(RootContext).item;
    const theme = context.color;
    const metaData = context.metadata.color;
    const dispatch = useDispatch();

    const handleChange = (color: any) => {
        let obj = {
            index: context.itemIndex,
            value: color.hex
        };
        dispatch(fashionColor(obj));
    }

    return (
        <div className='cardColorContainer'>
            <h3 className='customColorFont'>{props.title}</h3>
            <CirclePicker color={theme} colors={metaData.colors} circleSpacing={10} circleSize={10} onChangeComplete={handleChange} />
        </div>
        );
}

CardColorPicker.defaultProps = defaultProps
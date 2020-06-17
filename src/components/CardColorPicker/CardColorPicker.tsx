import React, {useContext} from 'react';
import './CardColorPicker.css';
import { CirclePicker } from 'react-color';
import { RootContext } from '../ItemType/ItemType';
import { useDispatch } from 'react-redux';
import { fashionColor } from '../../actions/fashionActions';
import { electronicsColor } from '../../actions/electronicsActions';


type Props = {
    title?: string
}

const defaultProps = {
    title : 'Color'
}

export const CardColorPicker: React.FunctionComponent<Props> = (props) => {
    let context = useContext(RootContext).item;
    const category = useContext(RootContext).type;
    const theme = context.color;
    const metaData = context.metadata.color;
    const dispatch = useDispatch();

    const handleChange = (color: any) => {
        let obj = {
            index: context.itemIndex,
            value: color.hex
        };
        category === 'Fashion' ? dispatch(fashionColor(obj)) : dispatch(electronicsColor(obj));
    }

    return (
        <div className='cardColorContainer'>
            <h3 className='customColorFont'>{props.title}</h3>
            <CirclePicker color={theme} colors={metaData.colors} circleSpacing={10} circleSize={10} onChangeComplete={handleChange} />
        </div>
        );
}

CardColorPicker.defaultProps = defaultProps
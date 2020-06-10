import React from 'react';
import './CardBody.css';

type Props = {
        bodyTitle?: string,
        bodyContent?: string
}

const defaultProps = {
        bodyTitle: 'Product Info',
        bodyContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
}

export const CardBody: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={'cardBodyContainer'}>
            <div className={'bodyTitle customBodyFonts'}>{props.bodyTitle}</div>
            <div className={'customBodyContent'}>{props.bodyContent}</div>
        </div>
        );
}

CardBody.defaultProps = defaultProps;
import React from 'react';
import { ItemType } from './ItemType';

export default {
    component: ItemType,
    title: 'ItemType'
}

export const DefaultItemType = () => <ItemType type={'Fashion'} name={'Fashion'}/>
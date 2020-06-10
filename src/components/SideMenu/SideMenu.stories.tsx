import React from 'react';
import { SideMenu } from './SideMenu';

export default {
    component: SideMenu,
    title: 'SideMenu'
}

export const defaultSideMenu = () => <SideMenu show={true} toggleShow={() => console.log('show')} />
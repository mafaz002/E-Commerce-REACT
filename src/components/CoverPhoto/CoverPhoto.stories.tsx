import React from 'react';
import { CoverPhoto } from './CoverPhoto';

export default {
    component: CoverPhoto,
    title: 'CoverPhoto'
}

export const MainCoverPhoto = () => <CoverPhoto type={'Fashion'} name={'Fashion'} quotes={true}/>
import React from 'react';

import { Header } from './header/Header';
import { AccommodationList } from './accommodation/AccommodationList';

export const Home = () => {
    return (
        <>
            <Header />

            <AccommodationList />
        </>
    );
};

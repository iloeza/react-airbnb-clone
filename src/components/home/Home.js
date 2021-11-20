import React from 'react';

import { Header } from './header/Header';
import { AccommodationList } from './accommodation/AccommodationList';
import { Footer } from './footer/Footer';

export const Home = () => {
    return (
        <>
            <Header />

            <AccommodationList />

            <Footer />
        </>
    );
};

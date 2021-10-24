import React from 'react';

import { 
    AccommodationBox,
    Info,
} from '../../styles/accommodation/AccommodationStyled';


export const Accommodation = ( { accommodations } ) => {

    const { distance, img, title } = accommodations;

    return (
        <AccommodationBox>
            <a href="!#">
                <img 
                    src={ img }
                    alt={ title }
                />

                <Info>
                    <p> { title } </p>
                    <p className="horas"> { distance } </p>
                </Info>
            </a>
        </AccommodationBox>
    );
};

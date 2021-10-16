import React from 'react';

import { 
    AccommodationContainer,
    AccommodationBox,
    Info,
    H2
} from '../../styles/accommodation/AccommodationStyled';

import pCarmen from '../../../images/pCarmen.jpg';
import cancun from '../../../images/cancun.jpg'
import tulum from '../../../images/tulum.jpg'
import merida from '../../../images/merida.jpg'
import cozumel from '../../../images/cozumel.jpg'
import holbox from '../../../images/holbox.jpg'
import bacalar from '../../../images/bacalar.jpg'
import valladolid from '../../../images/valladolid.jpg'

export const Accommodation = () => {
    return (
        <div className="container">
            <H2> Discover accommodations near you </H2>

            <AccommodationContainer>
                <AccommodationBox>
                    <a href="!#">
                        <img 
                            src={ pCarmen }
                            alt="imagen playa carmen"
                        />

                        <Info>
                            <p> Playa del carmen </p>
                            <p className="horas"> 4 hours by car </p>
                        </Info>
                    </a>
                </AccommodationBox>

                <AccommodationBox>
                    <a href="!#">
                        <img 
                            src={ cancun }
                            alt="imagen playa carmen"
                        />

                        <Info>
                            <p> Cancún, </p>
                            <p className="horas"> 4 hours by car  </p>
                        </Info>
                    </a>
                </AccommodationBox>

                <AccommodationBox>
                    <a href="!#">
                        <img 
                            src={ tulum }
                            alt="imagen playa carmen"
                        />

                        <Info>
                            <p> Tulum </p>
                            <p className="horas"> 4 hours by car  </p>
                        </Info>
                    </a>
                </AccommodationBox>

                <AccommodationBox>
                    <a href="!#">
                        <img 
                            src={ merida }
                            alt="imagen playa carmen"
                        />

                        <Info>
                            <p> Mérida </p>
                            <p className="horas"> 15 minutes by car  </p>
                        </Info>
                    </a>
                </AccommodationBox>

                <AccommodationBox>
                    <a href="!#">
                        <img 
                            src={ cozumel }
                            alt="imagen playa carmen"
                        />

                        <Info>
                            <p> San Miguel de Cozumel </p>
                            <p className="horas"> 8 hours by car  </p>
                        </Info>
                    </a>
                </AccommodationBox>

                <AccommodationBox>
                    <a href="!#">
                        <img 
                            src={ holbox }
                            alt="imagen playa carmen"
                        />

                        <Info>
                            <p> Holbox </p>
                        </Info>
                    </a>
                </AccommodationBox>

                <AccommodationBox>
                    <a href="!#">
                        <img 
                            src={ bacalar }
                            alt="imagen playa carmen"
                        />

                        <Info>
                            <p> Bacalar </p>
                            <p className="horas"> 6.5 hours by car  </p>
                        </Info>
                    </a>
                </AccommodationBox>

                <AccommodationBox>
                    <a href="!#">
                        <img 
                            src={ valladolid }
                            alt="imagen playa carmen"
                        />

                        <Info>
                            <p> Valladolid </p>
                            <p className="horas"> 2.5 hours by car  </p>
                        </Info>
                    </a>
                </AccommodationBox>

            </AccommodationContainer>
        </div>
    );
};

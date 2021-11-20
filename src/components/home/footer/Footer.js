import React from 'react';
import { Configuration } from './Configuration';
import { InformationSite } from './InformationSite';

import { ContainerGrid, ContainerInformation, Widget } from '../../styles/footer/footerStyled';

export const Footer = () => {
    return (
        <div className="container">
            <ContainerGrid>
                <Widget>
                    <h2> Attendance </h2>

                    <a href="!#"> help Center </a>
                    <a href="!#"> Safety information </a>
                    <a href="!#"> Cancellation options </a>
                    <a href="!#"> Our response to COVID-19 </a>
                    <a href="!#"> Accessibility for all </a>
                    <a href="!#"> Problems in your neighborhood? </a>

                </Widget>

                <Widget>
                    <h2> Community </h2>

                    <a href="!#"> help Airbnb.org for emergencies </a>
                    <a href="!#"> Support Afghan refugees </a>
                    <a href="!#"> Diversity and community </a>
                    <a href="!#"> Fight against discrimination </a>
                </Widget>

                <Widget>
                    <h2> How to host </h2>

                    <a href="!#"> Dare to be a host </a>
                    <a href="!#"> AirCover for hosts </a>
                    <a href="!#"> Host Resources </a>
                    <a href="!#"> Visit the community forum </a>
                    <a href="!#"> Be a responsible host </a>
                </Widget>

                <Widget>
                    <h2> About </h2>

                    <a href="!#"> Press room </a>
                    <a href="!#"> Descubre las nuevas funciones </a>
                    <a href="!#"> Founders letter </a>
                    <a href="!#"> job </a>
                    <a href="!#"> Investors </a>
                    <a href="!#"> Airbnb Luxe </a>
                </Widget>
            </ContainerGrid>

            <ContainerInformation>
                <InformationSite />

                <Configuration />
            </ContainerInformation>
        </div>
    );
};

import React from 'react';
import { ContainerFlex, Container, P } from '../../styles/footer/informationSiteStyled';

export const InformationSite = () => {
    return (
        <ContainerFlex>
            <P> &copy; 2021 Airbnb, Inc. </P>

            <Container>
                <a href="!#"> Privacy </a>
                <a href="!#"> Terms of Service </a>
                <a href="!#"> Site Map </a>
                <a href="!#"> Company information </a>
            </Container>
        </ContainerFlex>
    );
};

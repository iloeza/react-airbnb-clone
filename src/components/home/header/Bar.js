import React from 'react';
import { NavLogin } from './NavLogin';

import styled from 'styled-components';

import logo from '../../../images/airbnb.svg';

const ContainerBar = styled.div`
    margin-top: 2rem;
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
const Img = styled.img`
    width: 7rem;
`;
const Nav = styled.nav`
    @media screen and (min-width: 768px) {
        display: flex;
        gap: 4rem;
    }
    a {
        color: #ffffff;
        font-weight: 900;
    }
`;

export const Bar = () => {
    return (
        <ContainerBar>
            <div>
                <Img 
                    src={ logo }
                    alt="logo airbnb"
                />
            </div>

            <Nav>
                <a href="!#"> Lugares para hospedarte </a>
                <a href="!#"> Experiencias </a>
                <a href="!#"> Experiencias en linea </a>
            </Nav>

            <NavLogin />
            
        </ContainerBar>
    )
}

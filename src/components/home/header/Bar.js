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
                <a
                    href="!#"
                >
                    <Img 
                        src={ logo }
                        alt="logo airbnb"
                    />
                </a>
            </div>

            <Nav>
                <a href="!#"> Places to stay </a>
                <a href="!#"> Experiences </a>
                <a href="!#"> Online experiences </a>
            </Nav>

            <NavLogin />
            
        </ContainerBar>
    )
}

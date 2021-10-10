import React from 'react';

import { ContainerBar, Img, Nav } from '../../styles/bar/BarStyled';

import { NavLogin } from './NavLogin';

import logo from '../../../images/airbnb.svg';


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
    );
};

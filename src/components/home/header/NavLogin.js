import React from 'react';

import { ContainerNav, 
        Nav, 
        HamburguerMenu, 
        User 
} from '../../styles/bar/NavLoginStyled';

export const NavLogin = () => {
    return (
        <ContainerNav>
            <div>
                <a href="!#"> Become a host</a>
            </div>

            <div>
                <a
                    href="!#"
                >
                    <i className="fas fa-globe"></i>
                </a>
            </div>

            <Nav>
                <div>
                    <a
                        href="!#"
                    >
                        <HamburguerMenu className="fas fa-bars"> </HamburguerMenu>
                    </a>
                </div>
                <div>
                    <a
                        href="!#"
                    >
                        <User className="fas fa-user-circle"> </User>
                    </a>
                </div>
            </Nav>
        </ContainerNav>
    )
};

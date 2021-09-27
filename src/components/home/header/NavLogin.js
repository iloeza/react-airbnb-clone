import React from 'react';

import styled from 'styled-components';

const ContainerNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
        color: #ffffff;
        font-weight: 900;
    }
    i {
        color: #ffffff;
    }
`;
const Nav = styled.div`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .6rem;
    border-radius: 2rem;

    i {
        color: #000000;
    }
`;
const HamburguerMenu = styled.i`
    font-size: 1rem;
`; 
const User = styled.i`
    font-size: 1.7rem;
`;


export const NavLogin = () => {
    return (
        <ContainerNav>
            <div>
                <a href="!#"> Hazte anfitrión </a>
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
                        <HamburguerMenu className="fas fa-bars"></HamburguerMenu>
                    </a>
                </div>
                <div>
                    <a
                        href="!#"
                    >
                        <User className="fas fa-user-circle"></User>
                    </a>
                </div>
            </Nav>
        </ContainerNav>
    )
};

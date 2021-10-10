import styled from 'styled-components';

export const ContainerNav = styled.nav`
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
export const Nav = styled.div`
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
export const HamburguerMenu = styled.i`
    font-size: 1rem;
`; 
export const User = styled.i`
    font-size: 1.7rem;
`;
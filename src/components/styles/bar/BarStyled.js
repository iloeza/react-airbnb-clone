import styled from 'styled-components';



export const ContainerBar = styled.div`
    margin-top: 2rem;
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
export const Img = styled.img`
    width: 7rem;
`;
export const Nav = styled.nav`
    @media screen and (min-width: 768px) {
        display: flex;
        gap: 4rem;
    }
    a {
        color: #ffffff;
        font-weight: 900;
    }
`;
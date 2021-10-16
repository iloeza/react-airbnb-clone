import styled from "styled-components";

export const H2 = styled.h2`
    margin: 0;
    padding: 1rem 0;
    font-size: 2.3rem;
`;

export const AccommodationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat( 2, 1fr );

    img {
        border-radius: .7rem;
    }
    
    @media (min-width: 768px) {
        grid-template-columns: repeat( 3, 1fr );
    
        img {
            width: 4rem;
        }
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat( 4, 1fr );
    }
`;

export const  AccommodationBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    a {
        margin-top: 1rem;
        color: black;
    
        @media (min-width: 768px) {
            display: flex;
            gap: 1rem;
        }
    }
`;

export const Info = styled.div`
    text-align: center;
    font-size: 1.3rem;

    p {
        margin: 0;
    }
    .horas {
        font-size: 1rem;
    }
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
    }
`;

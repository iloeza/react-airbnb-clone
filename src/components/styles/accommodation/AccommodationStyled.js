import styled from "styled-components";

import {
    devices,
} from '../../styles/mediaqueries/MediaQueriesStyled';

export const H2 = styled.h2`
    margin: 0;
    padding: 1rem 0;
    font-size: 2.3rem;
`;

export const AccommodationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat( 2, 1fr );
    column-gap: 1rem;

    img {
        border-radius: .7rem;
    }
    
    ${ devices.tablet`
        grid-template-columns: repeat( 3, 1fr );
    
        img {
            width: 4rem;
        }
    `}

    ${ devices.laptop`
        grid-template-columns: repeat( 4, 1fr );
    `}
`;

export const  AccommodationBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${ devices.tablet`
        flex-direction: row;
    `}

    a {
        margin-top: 1rem;
        color: black;

        ${ devices.tablet`
            display: flex;
            gap: 1rem;
        `}
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

    ${ devices.tablet`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
    `}
`;

import styled from "styled-components";

import { devices } from '../base/MediaQueriesStyled';
import { 
        grid, 
        fColumn, 
        flex 
} from '../base/MixinsStyled';

export const H2 = styled.h2`
    margin: 0;
    padding: 1rem 0;
    font-size: 2.3rem;
`;

export const AccommodationContainer = styled.div`
    ${ grid( 2, '1rem' ) };

    img {
        border-radius: .7rem;
    }

    ${ devices.tablet(`
            ${ grid( 3, '1rem' ) }; 
            img { 
                width: 4rem; 
            } 
        `)
    }
    ${ devices.laptop( `${ grid( 4, '1rem' ) }` ) }
`;

export const  AccommodationBox = styled.div`
    ${ fColumn };
    align-items: center;

    ${ devices.tablet`
        flex-direction: row;
    `}

    a {
        margin-top: 1rem;
        color: black;
        ${ devices.tablet( `${ flex( '1rem' ) }` ) }
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
        `
    }
`;
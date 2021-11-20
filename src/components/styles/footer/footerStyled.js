import styled from 'styled-components';

import { grid } from '../base/MixinsStyled';
import { devices } from '../base/MediaQueriesStyled';

export const ContainerGrid = styled.div`
    ${grid( 2, '1rem' ) };
    margin-top: 4rem;

    ${devices.laptop(` ${grid( 4, '1rem' )}` )}
`;

export const Widget = styled.div`

    h2 {
        font-size: 1.2rem;
        margin: 1rem 0;
    }

    a {
        color: black;
        display: block;
        line-height: 2.2rem;
        
        &:hover {
            text-decoration: underline;
        }
    }
`;
export const ContainerInformation = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin-top: 2rem;

    
    ${ devices.laptop(`
        flex-direction: row;
        justify-content: space-between;
        `
    )}
`;
import styled from 'styled-components';

import { flex } from '../base/MixinsStyled';
import { devices } from '../base/MediaQueriesStyled';

export const Container = styled.div`
    ${ flex( '2rem' ) };
    align-items: center;
    font-weight: 900;

    ${ devices.tablet(` justify-content: center; `) }

    a {
        color: black;
    }

    span {
        margin-left: .5rem;
    }
`;

export const Socials = styled.div`
    display: none;

    ${devices.tablet(` ${flex( '2rem' )} `)};
`;
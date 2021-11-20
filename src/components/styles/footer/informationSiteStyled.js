import styled from 'styled-components';

import { flex, fColumn } from '../base/MixinsStyled';
import { devices } from '../base/MediaQueriesStyled';

export const ContainerFlex = styled.div`
    ${ fColumn() };

    ${ devices.tablet(` align-items: center; `) }

    ${ devices.laptop(` flex-direction: row; `) }
`;
export const P = styled.p`
    margin: 0;
`;
export const Container = styled.div`
    ${ flex( '1rem' ) };

    a {
        color: black;
        display: block;
    }
`;
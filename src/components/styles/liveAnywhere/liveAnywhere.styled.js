import styled from "styled-components";

import { devices } from "../base/MediaQueriesStyled";
import { grid, fColumn, flex } from "../base/MixinsStyled";

export const H2 = styled.h2`
  margin-top: 3rem;
  font-size: 2.3rem;
`;

export const LiveAnywhereContainer = styled.div`
  ${grid(1, "1rem")};
  margin-top: 2rem;

  img {
    border-radius: 0.7rem;
    width: 100%;
  }

  ${devices.tablet(`
        ${grid(2, "1rem")}; 
    `)}

  ${devices.laptop(`${grid(4, "1rem")}`)}
`;

export const LiveAnywhereBox = styled.div`
  ${fColumn}

  a {
    color: black;
  }
`;

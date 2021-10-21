import styled from "styled-components";

import hero from "../../../images/header.jpg";

export const Hero = styled.header`
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  padding: 0 0 20rem 0;
  position: relative;

  &::before {
    content: "";
    background-color: #000000;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;
  }
`;
export const Contenido = styled.div`
  position: relative;
`;
export const TextCovid = styled.div`
  background-color: #222222;
  text-align: center;
  padding: 1rem;

  a {
    color: #a3a3a3;
    margin: 0;
    font-size: 1.1rem;
  }
`;

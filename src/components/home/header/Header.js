import React from 'react';
import { Bar } from './Bar';
import { FormHeader } from './FormHeader';

import styled from 'styled-components';

import hero from '../../../images/header.jpg';

const Hero = styled.header`
    background-image: url(${hero});
    background-size: cover;
    background-position: center;
    padding: 0 0 20rem 0;
    position: relative;

    &::before {
        content: '';
        background-color: #000000;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: .6;
    }
`;
const Contenido = styled.div`
    position: relative;
`;
const TextCovid = styled.div`
    background-color: #222222;
    text-align: center;
    padding: 1rem;

    a {
        color: #A3A3A3;
        margin: 0;
        font-size: 1.1rem;
    }
`;

export const Header = () => {
    return (
        <Hero>
            <Contenido>
                <TextCovid>
                    <a
                        href="!#"
                    >
                        Find out the latest news about the measures we are taking against the coronavirus
                    </a>
                </TextCovid>

                <div className="container">

                    <Bar />

                    <FormHeader />
                </div>
            </Contenido>
        </Hero>
    )
};

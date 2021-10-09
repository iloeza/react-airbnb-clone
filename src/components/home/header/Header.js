import React from 'react';

import { Hero, Contenido, TextCovid } from '../../styles/header/HeaderStyled';

import { Bar } from './Bar';
import { FormHeader } from './FormHeader';


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

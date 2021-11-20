import React from 'react';
import { Container, Socials } from '../../styles/footer/configurationStyled';


export const Configuration = () => {
    return (
        <Container>
            <a
                href="!#"
            >
                <i className="fas fa-globe"></i>
                <span> English(US) </span>
            </a>

            <p> $ <span> USD </span> </p>

            <Socials>
                <a href="!#">
                    <i className="fab fa-facebook-f"></i>
                </a>

                <a href="!#">
                    <i className="fab fa-twitter"></i>
                </a>

                <a href="!#">
                    <i className="fab fa-instagram"></i>
                </a>
            </Socials>
        </Container>
    );
};

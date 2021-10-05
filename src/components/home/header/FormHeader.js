import React from 'react';

import styled from 'styled-components';

const Form = styled.form`
    margin: 3rem auto 2rem auto;
    background-color: #ffffff;
    border-radius: 5rem;
    box-shadow: 0px 4px 7px 0px #686868;
    padding: 3rem 0;

    @media screen and (min-width: 992px) {
        display: flex;
        justify-content: space-between;
        max-width: 60rem;
        padding: 0;
    }
`;
const Countryside = styled.div`
    display: flex;
    padding: .6rem 1rem;
    flex-direction: column;

    &:nth-child(1) {
        @media screen and (min-width: 768px) {
            padding-left: 2rem;
        }
    }
    &:hover {
        background-color: #F0F0F0;
        border-radius: 5rem;
        box-shadow: 0px 6px 20px rgba(0,0,0, 40%);
    }
    &:hover&:nth-child(5) {
        border-radius: unset;
        background-color: unset;
        box-shadow: unset;
    }
`;
const Label = styled.label`
    font-size: 1rem;
    font-weight: 900;
`;
const Input = styled.input`
    background-color: unset;
    border: none;
    color: #686868;
    font-size: 1rem;
    margin-top: .3rem;
    width: 100%;
`;
const Button = styled.button`
    border: none;
    border-radius: 2rem;
    padding: 1rem;
    background-color: #FF385C;

    &:hover {
        background-color: #ED4C67;
    } 

    i {
        color: #ffffff;
        font-size: 1.4rem;
    }
`;

export const FormHeader = () => {
    return (
        <Form>
            <Countryside>
                <Label htmlFor="ubicacion"> Location </Label>
                <Input 
                    type="text" 
                    id="ubicacion" 
                    placeholder="¿A donde viajas?" 
                />
            </Countryside>

            <Countryside>
                <Label htmlFor="llegada"> Arrival </Label>
                <Input 
                    type="date" 
                    id="llegada"
                />
            </Countryside>

            <Countryside>
                <Label htmlFor="salida"> Departure </Label>
                <Input 
                    type="date" 
                    id="salida" 
                />
            </Countryside>

            <Countryside>
                <Label htmlFor="huespedes"> Guests </Label>
                <Input 
                    type="number" 
                    id="huespedes" 
                    placeholder="¿Cuantos?" 
                />
            </Countryside>

            <Countryside>
                <Button
                    type="submit" 
                > 
                    <a
                        href="!#"
                    >
                        <i className="fas fa-search"></i>
                    </a>
                </Button>
            </Countryside>
        </Form>
    )
};

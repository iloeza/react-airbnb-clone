import styled from 'styled-components';

export const Form = styled.form`
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
export const Countryside = styled.div`
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
export const Label = styled.label`
    font-size: 1rem;
    font-weight: 900;
`;
export const Input = styled.input`
    background-color: unset;
    border: none;
    color: #686868;
    font-size: 1rem;
    margin-top: .3rem;
    width: 100%;
`;
export const Button = styled.button`
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
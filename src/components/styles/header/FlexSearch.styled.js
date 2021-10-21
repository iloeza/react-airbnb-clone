import styled from "styled-components";

export const FlexSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px 0;
`;

export const FlexSearchButton = styled.div`
  position: relative;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  width: 17rem;
  padding: 1rem;
  border-radius: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &::before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50px;
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 80ms;
  }

  &:hover::before {
    opacity: 1;
  }

  & span {
    background: linear-gradient(90deg, #6f019c 0%, #c6017e 135.12%) !important;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    -webkit-background-clip: text !important;
  }
`;

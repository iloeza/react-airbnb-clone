import styled from "styled-components";

export const FlexSearchContainer = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    background: rgba(0, 0, 0, 0)
      linear-gradient(90deg, rgb(111, 1, 156) 0%, rgb(198, 1, 126) 135.12%)
      repeat scroll 0% 0% padding-box text !important;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
`;

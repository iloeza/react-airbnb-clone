import React from "react";
import {
  FlexSearchContainer,
  FlexSearchButton,
} from "../../styles/header/FlexSearch.styled";

export const FlexSearch = () => {
  return (
    <FlexSearchContainer>
      <h3>You don't know where to go? No problem!</h3>
      <FlexSearchButton>
        <span>Flexible Search</span>
      </FlexSearchButton>
    </FlexSearchContainer>
  );
};

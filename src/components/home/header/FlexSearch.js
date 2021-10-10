import React from "react";
import {
  FlexSearchContainer,
  FlexSearchButton,
} from "../../styles/header/FlexSearch.styled";

const FlexSearch = () => {
  return (
    <FlexSearchContainer>
      <h3>¿No sabes a dónde ir? ¡No importa!</h3>
      <FlexSearchButton>
        <span>Búsqueda Flexible</span>
      </FlexSearchButton>
    </FlexSearchContainer>
  );
};

export default FlexSearch;

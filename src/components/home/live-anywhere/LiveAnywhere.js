import React from "react";
import { LiveAnywhereBox } from "../../styles/liveAnywhere/liveAnywhere.styled";

export const LiveAnywhere = (props) => {
  const { title, img } = props.livingOptions;
  return (
    <LiveAnywhereBox>
      <a href="#">
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </a>
    </LiveAnywhereBox>
  );
};

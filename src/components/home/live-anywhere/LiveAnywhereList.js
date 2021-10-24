import React, { useState } from "react";
import {
  LiveAnywhereContainer,
  H2,
} from "../../styles/liveAnywhere/liveAnywhere.styled";
import { LiveAnywhere } from "./LiveAnywhere";

import outdoor from "../../../images/liveAnywhere/live-anywhere1.jpg";
import unique from "../../../images/liveAnywhere/live-anywhere2.jpg";
import full from "../../../images/liveAnywhere/live-anywhere3.jpg";
import pet from "../../../images/liveAnywhere/live-anywhere4.jpg";

export const LiveAnywhereList = () => {
  const [liveAnywhere, setLiveAnywhere] = useState([
    {
      id: 1,
      title: "Outdoor Travelling",
      img: outdoor,
    },
    {
      id: 2,
      title: "Unique Lodging",
      img: unique,
    },
    {
      id: 3,
      title: "Full Lodging",
      img: full,
    },
    {
      id: 4,
      title: "With Your Pet",
      img: pet,
    },
  ]);

  return (
    <>
      <H2>Live anywhere in the world!</H2>
      <LiveAnywhereContainer>
        {liveAnywhere.map((data) => (
          <LiveAnywhere key={data.id} livingOptions={data} />
        ))}
      </LiveAnywhereContainer>
    </>
  );
};

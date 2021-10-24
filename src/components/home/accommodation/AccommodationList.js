import React, { useState } from "react";

import { Accommodation } from "./Accommodation";
import {
  AccommodationContainer,
  H2,
} from "../../styles/accommodation/AccommodationStyled";

import pCarmen from "../../../images/accommodation/pCarmen.jpg";
import cancun from "../../../images/accommodation/cancun.jpg";
import tulum from "../../../images/accommodation/tulum.jpg";
import merida from "../../../images/accommodation/merida.jpg";
import cozumel from "../../../images/accommodation/cozumel.jpg";
import holbox from "../../../images/accommodation/holbox.jpg";
import bacalar from "../../../images/accommodation/bacalar.jpg";
import valladolid from "../../../images/accommodation/valladolid.jpg";

export const AccommodationList = () => {
  const [result, setResult] = useState([
    {
      id: 1,
      img: pCarmen,
      title: "Playa del carmen",
      distance: "4 hours by car",
    },
    { id: 2, img: cancun, title: "Cancún", distance: "4 hours by car" },
    { id: 3, img: tulum, title: "Tulum", distance: "4 hours by car" },
    { id: 4, img: merida, title: "Mérida", distance: "15 minutes by car" },
    {
      id: 5,
      img: cozumel,
      title: "San Miguel de Cozumel",
      distance: "8 hours by car ",
    },
    { id: 6, img: holbox, title: "Holbox ", distance: "" },
    { id: 7, img: bacalar, title: "Bacalar", distance: "6.5 hours by car" },
    {
      id: 8,
      img: valladolid,
      title: "Valladolid",
      distance: "2.5 hours by car",
    },
  ]);

  return (
    <>
      <H2> Discover accommodations near you </H2>
      <AccommodationContainer>
        {result.map((data) => (
          <Accommodation key={data.id} accommodations={data} />
        ))}
      </AccommodationContainer>
    </>
  );
};

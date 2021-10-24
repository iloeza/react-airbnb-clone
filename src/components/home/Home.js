import React from "react";

import { Header } from "./header/Header";
import { AccommodationList } from "./accommodation/AccommodationList";
import { LiveAnywhereList } from "./live-anywhere/LiveAnywhereList";

export const Home = () => {
  return (
    <>
      <Header />

      <div className="container">
        <AccommodationList />

        <LiveAnywhereList />
      </div>
    </>
  );
};

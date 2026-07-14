import React from "react";
import Hero from "../Components/Hero";
import PromotedAuctions from "../Components/PromotedAuctions";
import NewMarketplace from "../Components/NewMarketPlace";
import UpcomingAuctions from "../Components/UpcomingAuctions";
import ScrollingTicker from "../Components/ScrollingTicker";
import MasterFooter from "../Components/MasterFooter";
function Land() {
  return (
    <>
      <Hero />
      <PromotedAuctions />
      <NewMarketplace />
      <UpcomingAuctions />
      <ScrollingTicker />
    </>
  );
}

export default Land;

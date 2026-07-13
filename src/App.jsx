import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import PromotedAuctions from "./Components/PromotedAuctions";
import NewMarketplace from "./Components/NewMarketPlace";
import UpcomingAuctions from "./Components/UpcomingAuctions";
import ScrollingTicker from "./Components/ScrollingTicker";
import MasterFooter from "./Components/MasterFooter";


export default function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <PromotedAuctions/>
    <NewMarketplace/>
    <UpcomingAuctions/>


    <ScrollingTicker/>
    <MasterFooter/>
    </>
  )
}

import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import FineArt from "./Pages/FineArt";
import MasterFooter from "./Components/MasterFooter";
import Land from "./Pages/Land"; 
import Antiques from "./Pages/Antiques";
import Furniture from "./Pages/Furniture";
import Collectibles from "./Pages/Collectibles";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Global Navigation */}
      <Nav />
      
      {/* Main page content container */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Land />} />
          <Route path="/fine-art" element={<FineArt />} />
          
          <Route path="/antiques" element={<Antiques />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/collectibles" element={<Collectibles />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <MasterFooter />
    </div>
  );
}
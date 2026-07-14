import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Users } from "lucide-react";

import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import fur from "../assets/fur.jpg";
import rolex from "../assets/rolex.jpg";
import vase from "../assets/vase.jpg";
import tele from "../assets/tele.jpg";
import sculp from "../assets/sculp.avif";
import paint from "../assets/paint.avif";
import pocket from "../assets/pocket.avif";

export default function Nav() {
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("Welcome");
  const [showModal, setShowModal] = useState(false);
  const [inputName, setInputName] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // SMART SCROLL STATES
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // VISITOR COUNTER STATES
  const [visitorCount, setVisitorCount] = useState(142);
  const [hasCounted, setHasCounted] = useState(false);

  // REALISTIC SUBCATEGORY DATA MATRIX
  const subcategories = {
    FineArt: [
      "Photography",
      "Posters",
      "Paintings",
      "Mixed Media Art",
      "Sculptures",
      "Drawings",
      "Prints",
    ],
    Furniture: [
      "Beds",
      "Benches & Stools",
      "Cabinets, Armoires & Cupboards",
      "Chairs",
      "Clocks",
      "Decor & Accessories",
      "Dressers & Vanities",
      "Lamps & Lights",
      "Mirrors",
      "Rugs & Carpets",
      "Shelves & Bookcases",
      "Sofas, Couches & Chaises",
      "Tables, Stands & Consoles",
    ],
    Collectibles: [
      "Advertising, Paper & Ephemera",
      "Animation Art",
      "Antiques",
      "Autographs",
      "Books, Maps & Manuscripts",
      "Coins, Money & Stamps",
      "Couture, Fashion & Accessories",
      "Electronics Collectibles",
      "Historical, Political & Space Collectibles",
      "Memorabilia",
      "Military & Wartime Collectibles",
    ],
    Antiques: [
      "Armor & Weapons",
      "Pre-Columbian Antiquities",
      "Egyptian Artifacts",
      "Classical Antiquities",
      "Folk Art",
      "Asian Antiques",
      "Vintage Timepieces",
    ],
  };

  const menuImages = {
    FineArt: [art1, art2, paint],
    Antiques: [sculp, vase],
    Furniture: [fur, tele],
    Collectibles: [rolex, pocket],
  };

  // SMART SCROLL LOGIC
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setActiveMenu(null);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Slideshow preview switcher (5 seconds)
  useEffect(() => {
    if (!activeMenu) {
      setCurrentImageIndex(0);
      return;
    }
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, [activeMenu]);

  // Initialize Session Checks
  useEffect(() => {
    const storedName = sessionStorage.getItem("bidspirit_user");
    const countStatus = localStorage.getItem("bidspirit_counted");
    
    if (countStatus === "true") {
      setVisitorCount(143);
      setHasCounted(true);
    }

    if (!storedName) {
      setShowModal(true);
    } else {
      setUserName(storedName);
      updateGreeting(storedName);
    }
  }, []);

  const updateGreeting = (name) => {
    const hour = new Date().getHours();
    let timeGreeting = "Welcome";
    if (hour < 12) timeGreeting = "Good morning";
    else if (hour < 16) timeGreeting = "Good afternoon";
    else timeGreeting = "Good evening";
    setGreeting(`${timeGreeting}, ${name}`);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      sessionStorage.setItem("bidspirit_user", inputName.trim());
      setUserName(inputName.trim());
      updateGreeting(inputName.trim());
      setShowModal(false);
    }
  };

  const handleVisitorIncrement = () => {
    if (!hasCounted) {
      setVisitorCount((prev) => prev + 1);
      setHasCounted(true);
      localStorage.setItem("bidspirit_counted", "true");
    }
  };

  const handleLinkClick = (linkName) => {
    setClickedLink(linkName);
  };

  const categories = ["FineArt", "Antiques", "Furniture", "Collectibles"];

  return (
    <>
      {/* SLIM NAVBAR FRAME */}
      <nav className={`fixed top-0 left-0 w-full h-14 bg-white border-b border-neutral-200 z-50 px-4 sm:px-6 md:px-12 flex items-center justify-between select-none transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
        
        {/* Left Side Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-serif text-lg md:text-2xl font-bold tracking-wider text-neutral-900 uppercase cursor-pointer">
            BidSpirit
          </span>
        </Link>

        {/* Center Links (Now using React Router Link components) */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 h-full">
          {categories.map((item) => {
            const path = item === "FineArt" ? "/fine-art" : `/${item.toLowerCase()}`;

            return (
              <Link
                key={item}
                to={path}
                className="relative h-full flex items-center cursor-pointer group"
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu(null)}
                onClick={() => handleLinkClick(item)}
              >
                <span
                  className={`font-sans text-[11px] xl:text-lg uppercase tracking-widest transition-colors duration-300 ${
                    clickedLink === item
                      ? "text-[#8B1E2F] font-semibold"
                      : "text-neutral-800 group-hover:text-[#8B1E2F]"
                  }`}
                >
                  {item === "FineArt" ? "Fine Art" : item}
                </span>

                {/* Decorator line indicator */}
                <div className="absolute bottom-0 left-0 w-full h-0.75 bg-[#8B1E2F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center flex justify-center items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1E2F] absolute -top-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {userName && (
            <span className="hidden sm:inline font-sans text-[10px] md:text-xs uppercase tracking-wider text-neutral-400 font-medium">
              {greeting}
            </span>
          )}

          {/* Interactive Visitor Badge Counter */}
          <button 
            onClick={handleVisitorIncrement}
            disabled={hasCounted}
            className={`flex items-center space-x-1 md:space-x-1.5 text-[#8B1E2F] transition-all focus:outline-none ${
              !hasCounted ? "hover:scale-105 cursor-pointer" : "cursor-default opacity-90"
            }`}
          >
            <Users className="w-3.5 h-3.5 md:w-4 h-4" strokeWidth={2.5} />
            <span className="font-sans text-xs font-bold tracking-wide">
              {visitorCount}
            </span>
          </button>

          {/* Mobile Hamburger Icon */}
          <button
            className="lg:hidden p-1 text-neutral-800 hover:text-neutral-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* EXPANDED DIRECTORY MEGA-PANEL */}
        <div
          className={`absolute top-14 left-0 w-full bg-white border-b border-neutral-200 shadow-md transition-all duration-300 ease-in-out transform origin-top ${
            activeMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
          }`}
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 grid grid-cols-4 gap-8">
            
            {/* Columns 1 & 2: Subcategories */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-sans text-[9px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                  Marketplace Lots
                </h4>
                <ul className="space-y-2 text-xs text-neutral-600 font-normal">
                  {activeMenu && subcategories[activeMenu]?.slice(0, Math.ceil(subcategories[activeMenu].length / 2)).map((sub, i) => {
                    const pagePath = activeMenu === "FineArt" ? "fine-art" : activeMenu.toLowerCase();
                    return (
                      <li key={i}>
                        <Link 
                          to={`/${pagePath}?cat=${sub.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                          className="inline-block w-fit origin-left font-sans text-xs transition-all duration-200 hover:text-[#8B1E2F] hover:font-semibold hover:scale-105 hover:underline"
                        >
                          {sub}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <div className="h-4" />
                <ul className="space-y-2 text-xs text-neutral-600 font-normal">
                  {activeMenu && subcategories[activeMenu]?.slice(Math.ceil(subcategories[activeMenu].length / 2)).map((sub, i) => {
                    const pagePath = activeMenu === "FineArt" ? "fine-art" : activeMenu.toLowerCase();
                    return (
                      <li key={i}>
                        <Link 
                          to={`/${pagePath}?cat=${sub.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                          className="inline-block w-fit origin-left font-sans text-xs transition-all duration-200 hover:text-[#8B1E2F] hover:font-semibold hover:scale-105 hover:underline"
                        >
                          {sub}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Columns 3 & 4: Preview Slideshow */}
            <div className="col-span-2 border-l border-neutral-100 pl-8 flex items-center justify-between">
              <div>
                <p className="font-serif text-sm md:text-base text-neutral-800 italic mb-1 capitalize">
                  Explore {activeMenu === "FineArt" ? "Fine Art" : activeMenu}
                </p>
                <p className="text-[10px] md:text-[11px] text-neutral-400 font-light max-w-xs leading-relaxed">
                  Discover global pieces curated by our network of international gallery experts.
                </p>
              </div>

              <div className="w-28 h-16 md:w-32 md:h-20 bg-neutral-50 rounded-sm border border-neutral-200 flex items-center justify-center overflow-hidden relative shadow-xs">
                {activeMenu && menuImages[activeMenu] && (
                  <img
                    src={menuImages[activeMenu][currentImageIndex]}
                    alt="Preview Lot"
                    className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                    key={currentImageIndex}
                  />
                )}
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`fixed top-14 left-0 w-full bg-white border-b border-neutral-200 z-40 transition-all duration-300 ease-in-out transform ${
        mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      } lg:hidden`}>
        <div className="px-6 py-5 bg-white space-y-4">
          
          {userName && (
            <div className="pb-2 border-b border-neutral-100">
              <span className="font-sans text-[10px] uppercase tracking-widest text-neutral-400 block mb-0.5">
                Portal Connection
              </span>
              <span className="font-sans text-xs font-semibold text-[#8B1E2F] tracking-wide">
                {greeting}
              </span>
            </div>
          )}

          <div className="space-y-2.5">
            {categories.map((item) => {
              const path = item === "FineArt" ? "/fine-art" : `/${item.toLowerCase()}`;

              return (
                <Link
                  key={item}
                  to={path}
                  className="py-1.5 flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    handleLinkClick(item);
                    setMobileMenuOpen(false);
                  }}
                >
                  <span className={`font-sans text-xs uppercase tracking-widest ${
                    clickedLink === item ? "text-[#8B1E2F] font-bold" : "text-neutral-800"
                  }`}>
                    {item === "FineArt" ? "Fine Art" : item}
                  </span>
                  <span className="text-neutral-300 text-xs">&rarr;</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2 text-center border-t border-neutral-100">
            <span className="font-sans text-[9px] uppercase tracking-widest text-neutral-400 block">
              Secure Bidder Connection Active
            </span>
          </div>
        </div>
      </div>

      {/* ENTRANCE MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs z-100 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm md:max-w-md rounded-none px-6 py-10 md:px-8 md:py-12 flex flex-col items-center border border-neutral-200 shadow-2xl">
            
            <h2 className="font-serif text-lg md:text-xl text-neutral-900 text-center tracking-wide mb-1 uppercase">
              Welcome to BidSpirit
            </h2>
            <p className="font-sans text-[9px] md:text-[10px] text-neutral-400 text-center uppercase tracking-widest mb-8">
              Fine Art & Luxury Collectibles Portal
            </p>

            <form onSubmit={handleModalSubmit} className="w-full flex flex-col items-center">
              <div className="w-full mb-8">
                <input
                  type="text"
                  required
                  placeholder="Enter your first name to unlock"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className="w-full text-center py-2 font-sans text-xs md:text-sm text-neutral-800 placeholder-neutral-300 border-b border-neutral-300 focus:border-neutral-900 outline-none bg-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full max-w-xs bg-neutral-950 hover:bg-[#8B1E2F] text-white font-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest py-3 px-6 rounded-full transition-colors duration-300 shadow-sm"
              >
                Gain Gallery Access
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}
import React, { useState, useEffect } from "react";
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

  // SMART SCROLL STATES: Tracks visibility based on scroll behavior
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // FIXED: Your premium imported variables are now mapped to each gallery group
  const menuImages = {
    "Fine Art": [art1, art2, paint],
    Antiques: [sculp, vase],
    Furniture: [fur, tele],       
    Collectibles: [rolex, pocket],  
  };

  // SMART SCROLL LOGIC: Detects direction and toggles navbar visibility safely
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show navbar at the absolute top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling Down -> Fold Up
        setIsVisible(false);
        setActiveMenu(null); // Closes mega menu cleanly if open while scrolling down
      } else {
        // Scrolling Up -> Pop Up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // The 5-second slide show interval switcher
  useEffect(() => {
    if (!activeMenu) {
      setCurrentImageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, [activeMenu]);

  // Mock visitor count for project requirement
  const visitorCount = 142;

  // Initialize Modal, Geolocation, and Greeting Time Logic
  useEffect(() => {
    // Check if user has already entered their name this session
    const storedName = sessionStorage.getItem("bidspirit_user");
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
      sessionStorage.setItem("bidspirit_user", inputName);
      setUserName(inputName);
      updateGreeting(inputName);
      setShowModal(false);
    }
  };

  const handleLinkClick = (linkName) => {
    setClickedLink(linkName);
  };

  const categories = ["Fine Art", "Antiques", "Furniture", "Collectibles"];

  return (
    <>
      {/* MAIN NAVBAR CONTAINER - Added visible translation transitions */}
      <nav className={`fixed top-0 left-0 w-full h-20 bg-white border-b border-neutral-200 z-50 px-6 md:px-12 flex items-center justify-between select-none transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
        {/* Left Side: Christie's Style Serif Logo */}
        <div className="flex items-center">
          <span className="font-serif text-2xl font-bold tracking-wider text-neutral-900 uppercase cursor-pointer">
            BidSpirit
          </span>
        </div>

        {/* Center: Desktop Menu Items with Custom Dot/Underline Hover Architecture */}
        <div className="hidden lg:flex items-center space-x-8 h-full">
          {categories.map((item) => (
            <div
              key={item}
              className="relative h-full flex items-center cursor-pointer group"
              onMouseEnter={() => setActiveMenu(item)}
              onMouseLeave={() => setActiveMenu(null)}
              onClick={() => handleLinkClick(item)}
            >
              <span
                className={`font-sans text-lg uppercase tracking-widest transition-colors duration-300 ${
                  clickedLink === item
                    ? "text-[#8B1E2F] font-semibold"
                    : "text-neutral-800 group-hover:text-[#8B1E2F]"
                }`}
              >
                {item}
              </span>

              {/* Custom Hybrid Hover Decorator (Burgundy Line + Center Dot from Pic 2) */}
              <div className="absolute bottom-0 left-0 w-full h-0.75 bg-[#8B1E2F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-[#8B1E2F] absolute -top-1.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Greeting, Burgundy People Count, and Hamburger Menu */}
        <div className="flex items-center space-x-6">
          {/* Dynamic Greeting */}
          {userName && (
            <span className="hidden sm:inline font-sans text-base uppercase tracking-wider text-neutral-500 font-medium">
              {greeting}
            </span>
          )}

          {/* Visitor Counter Component (Burgundy People Icon Layout) */}
          <div className="flex items-center space-x-2 text-[#8B1E2F]">
            <Users className="w-5 h-5" strokeWidth={2} />
            <span className="font-sans text-base font-semibold tracking-wide">
              {visitorCount}
            </span>
          </div>

          {/* Mobile Hamburguer Action Icon */}
          <button
            className="lg:hidden p-1 text-neutral-800 hover:text-neutral-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* FULL WIDTH MEGA-MENU PANEL (Christie's Expand-Down Architecture) */}
        <div
          className={`absolute top-20 left-0 w-full bg-white border-b border-neutral-200 shadow-lg transition-all duration-300 ease-in-out transform origin-top ${
            activeMenu
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none"
          }`}
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-7xl mx-auto px-12 py-8 grid grid-cols-4 gap-8">
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                Auctions
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600 font-light">
                <li className="hover:text-[#8B1E2F] cursor-pointer transition-colors">
                  Upcoming Online Auctions
                </li>
                <li className="hover:text-[#8B1E2F] cursor-pointer transition-colors">
                  Completed Auctions
                </li>
                <li className="hover:text-[#8B1E2F] cursor-pointer transition-colors">
                  Sponsored Auctions
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                Highlights
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600 font-light">
                <li className="hover:text-[#8B1E2F] cursor-pointer transition-colors">
                  Popular Items
                </li>
                <li className="hover:text-[#8B1E2F] cursor-pointer transition-colors">
                  Trending Lots
                </li>
                <li className="hover:text-[#8B1E2F] cursor-pointer transition-colors">
                  Private Collections
                </li>
              </ul>
            </div>

            {/* CORRECTED SINGLE INSTANCE EXPLORE COLUMN AND DYNAMIC SLIDESHOW FRAME */}
            <div className="col-span-2 border-l border-neutral-100 pl-8 flex items-center justify-between">
              <div>
                <p className="font-serif text-lg text-neutral-800 italic mb-2">
                  Explore {activeMenu}
                </p>
                <p className="text-xs text-neutral-400 font-light max-w-xs">
                  Discover global pieces curated by our network of international
                  gallery experts.
                </p>
              </div>

              <div className="w-36 h-24 bg-neutral-50 rounded border border-neutral-200 flex items-center justify-center overflow-hidden relative shadow-sm">
                {activeMenu && menuImages[activeMenu] && (
                  <img
                    src={menuImages[activeMenu][currentImageIndex]}
                    alt={`${activeMenu} Preview`}
                    className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                    key={currentImageIndex}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE & TABLET DRAWER (Slides down from Navbar perfectly matching video flow) */}
      <div
        className={`fixed top-20 left-0 w-full bg-white border-b border-neutral-200 z-40 transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        } lg:hidden`}
      >
        <div className="px-6 py-6 space-y-4 bg-white">
          {categories.map((item) => (
            <div
              key={item}
              className="py-3 border-b border-neutral-100 flex items-center justify-between cursor-pointer"
              onClick={() => {
                handleLinkClick(item);
                setMobileMenuOpen(false);
              }}
            >
              <span
                className={`font-sans text-sm uppercase tracking-widest ${
                  clickedLink === item
                    ? "text-[#8B1E2F] font-bold"
                    : "text-neutral-800"
                }`}
              >
                {item}
              </span>
              <span className="text-neutral-300 font-light">&rarr;</span>
            </div>
          ))}
          {userName && (
            <div className="pt-4 text-center">
              <span className="font-sans text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                Signed in as
              </span>
              <span className="font-sans text-sm font-semibold tracking-wide text-neutral-800">
                {greeting}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* RE-USABLE ENTRANCE MODAL COMPONENT (Screenshot 2026-07-06 121410.png Layout) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100 flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="bg-white w-full max-w-md rounded-none px-8 py-12 relative flex flex-col items-center border border-neutral-200">
            {/* Top Right Cross Dismiss Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <X className="w-5 h-5 font-light" strokeWidth={1.5} />
            </button>

            {/* Premium Header Typographies */}
            <h2 className="font-serif text-2xl text-neutral-900 text-center tracking-wide mb-2 uppercase">
              Welcome to BidSpirit
            </h2>
            <p className="font-sans text-xs text-neutral-400 text-center uppercase tracking-widest mb-8">
              Fine Art & Luxury Collectibles
            </p>

            {/* Clean Input Form Layout */}
            <form
              onSubmit={handleModalSubmit}
              className="w-full flex flex-col items-center"
            >
              <div className="w-full mb-8 relative">
                <input
                  type="text"
                  required
                  placeholder="Enter your first name"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className="w-full text-center py-2 font-sans text-base text-neutral-800 placeholder-neutral-300 border-b border-neutral-300 focus:border-neutral-900 outline-none transition-colors bg-transparent"
                />
              </div>

              {/* Pill-shaped Solid Signature Button */}
              <button
                type="submit"
                className="w-full max-w-xs bg-neutral-950 hover:bg-[#8B1E2F] text-white font-sans text-xs font-semibold uppercase tracking-widest py-3.5 px-6 rounded-full transition-colors duration-300 shadow-md"
              >
                Enter Gallery
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
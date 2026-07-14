import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { X, SearchCode, ShieldCheck, Heart, ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';

// Curated High-End Furniture Database mapped directly to the correct marketplace categories
const FURNITURE_ITEMS = [
  { 
    id: 1, 
    title: "Eames Lounge Chair & Ottoman", 
    origin: "Herman Miller, c. 1965", 
    category: "chairs", 
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600", 
    images: ["https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600"], 
    basePrice: 5500, 
    currentBid: 6200, 
    bidsCount: 14, 
    estimate: "$6,500 - $8,500", 
    description: "Early production molded rosewood plywood shells with original black gloving leather cushions." 
  },
  { 
    id: 2, 
    title: "Art Deco Macassar Ebony Sideboard", 
    origin: "France, c. 1930", 
    category: "cabinets-armoires-cupboards", 
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600", 
    images: ["https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600"], 
    basePrice: 9500, 
    currentBid: 11200, 
    bidsCount: 8, 
    estimate: "$12,000 - $16,000", 
    description: "Dramatically grained Macassar ebony veneer with high-gloss French polish." 
  },
  { 
    id: 3, 
    title: "Sputnik Brass Chandelier", 
    origin: "Italy, c. 1960", 
    category: "lamps-lights", 
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600", 
    images: ["https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600"], 
    basePrice: 3200, 
    currentBid: 3200, 
    bidsCount: 0, 
    estimate: "$3,800 - $5,000", 
    description: "Solid raw brass construction with 24 adjustable radial arms." 
  },
  { 
    id: 4, 
    title: "Mid-Century Live Edge Dining Table", 
    origin: "George Nakashima Style", 
    category: "tables-stands-consoles", 
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=600", 
    images: ["https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=600"], 
    basePrice: 7000, 
    currentBid: 7800, 
    bidsCount: 4, 
    estimate: "$8,500 - $11,000", 
    description: "An extraordinary solid walnut book-matched live edge top with butterfly joints." 
  }
];

// Exact categories matching your marketplace image
const SUB_CATEGORIES = [
  { id: 'all', name: 'View All' },
  { id: 'beds', name: 'Beds' },
  { id: 'benches-stools', name: 'Benches & Stools' },
  { id: 'cabinets-armoires-cupboards', name: 'Cabinets, Armoires & Cupboards' },
  { id: 'chairs', name: 'Chairs' },
  { id: 'clocks', name: 'Clocks' },
  { id: 'decor-accessories', name: 'Decor & Accessories' },
  { id: 'dressers-vanities', name: 'Dressers & Vanities' },
  { id: 'lamps-lights', name: 'Lamps & Lights' },
  { id: 'mirrors', name: 'Mirrors' },
  { id: 'rugs-carpets', name: 'Rugs & Carpets' },
  { id: 'shelves-bookcases', name: 'Shelves & Bookcases' },
  { id: 'sofas-couches-chaisess', name: 'Sofas, Couches & Chaises' },
  { id: 'tables-stands-consoles', name: 'Tables, Stands & Consoles' }
];

export default function Furniture() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catQuery = searchParams.get('cat') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(catQuery);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const NGN_RATE = 1550;

  // Bidding states
  const [userBid, setUserBid] = useState('');
  const [bidError, setBidError] = useState('');
  const [bidSuccess, setBidSuccess] = useState(false);

  // Microscope states
  const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
  const [lensStyle, setLensStyle] = useState({ display: 'none' });
  const imageRef = useRef(null);

  useEffect(() => {
    setSelectedCategory(catQuery);
  }, [catQuery]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setDropdownOpen(false);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ cat: catId });
    }
  };

  const filteredItems = selectedCategory === 'all'
    ? FURNITURE_ITEMS
    : FURNITURE_ITEMS.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedItem(item);
    setActiveImageIndex(0);
    setUserBid((item.currentBid + 250).toString());
    setBidError('');
    setBidSuccess(false);
  };

  const handlePrevItem = () => {
    const currentIndex = FURNITURE_ITEMS.findIndex(i => i.id === selectedItem.id);
    const prevIndex = currentIndex === 0 ? FURNITURE_ITEMS.length - 1 : currentIndex - 1;
    openModal(FURNITURE_ITEMS[prevIndex]);
  };

  const handleNextItem = () => {
    const currentIndex = FURNITURE_ITEMS.findIndex(i => i.id === selectedItem.id);
    const nextIndex = currentIndex === FURNITURE_ITEMS.length - 1 ? 0 : currentIndex + 1;
    openModal(FURNITURE_ITEMS[nextIndex]);
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const bidValue = parseFloat(userBid);

    if (isNaN(bidValue)) {
      setBidError('Please enter a valid numeric bid.');
      return;
    }

    if (bidValue <= selectedItem.currentBid) {
      setBidError(`Your bid must be greater than the current bid of $${selectedItem.currentBid.toLocaleString()} USD.`);
      return;
    }

    selectedItem.currentBid = bidValue;
    selectedItem.bidsCount += 1;
    setBidError('');
    setBidSuccess(true);
    setTimeout(() => setBidSuccess(false), 3000);
  };

  const handleMouseMove = (e) => {
    const img = imageRef.current;
    if (!img) return;

    const { left, top, width, height } = img.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;

    if (x < 0) x = 0;
    if (x > width) x = width;
    if (y < 0) y = 0;
    if (y > height) y = height;

    const zoomFactor = 2.5;
    const px = (x / width) * 100;
    const py = (y / height) * 100;

    setZoomStyle({
      display: 'block',
      backgroundImage: `url(${selectedItem.images[activeImageIndex] || selectedItem.image})`,
      backgroundPosition: `${px}% ${py}%`,
      backgroundSize: `${width * zoomFactor}px ${height * zoomFactor}px`,
    });

    const lensWidth = 80;
    const lensHeight = 80;
    setLensStyle({
      display: 'block',
      left: `${x - lensWidth / 2}px`,
      top: `${y - lensHeight / 2}px`,
      width: `${lensWidth}px`,
      height: `${lensHeight}px`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none' });
    setLensStyle({ display: 'none' });
  };

  const currentCategoryName = SUB_CATEGORIES.find(cat => cat.id === selectedCategory)?.name || "View All";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
      {/* Breadcrumb */}
      <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-6 font-sans">
        Home &gt; <span className="text-neutral-900 font-medium">Furniture</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative">
        
        {/* MOBILE CATEGORY SELECTOR (DROPDOWN) */}
        <div className="w-full lg:hidden relative z-30 mb-2">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 font-sans">
            Marketplace Lots
          </label>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full bg-white border border-neutral-200 px-4 py-3 flex justify-between items-center text-xs uppercase tracking-widest text-neutral-800 font-bold focus:outline-none"
          >
            <span>
              {currentCategoryName} ({
                selectedCategory === 'all'
                  ? FURNITURE_ITEMS.length
                  : FURNITURE_ITEMS.filter(item => item.category === selectedCategory).length
              })
            </span>
            <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {dropdownOpen && (
            <div className="absolute left-0 right-0 mt-1 bg-white border border-neutral-200 shadow-xl max-h-60 overflow-y-auto z-40">
              {SUB_CATEGORIES.map((cat) => {
                const count = cat.id === 'all'
                  ? FURNITURE_ITEMS.length
                  : FURNITURE_ITEMS.filter(item => item.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`w-full text-left px-4 py-3 text-xs uppercase tracking-widest transition-colors flex justify-between items-center border-b border-neutral-50 last:border-0 ${
                      selectedCategory === cat.id
                        ? 'bg-neutral-50 text-[#8B1E2F] font-bold'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-neutral-400">({count})</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* SIDEBAR FILTERS (Sticky on Desktop and Tablets) */}
        <aside className="hidden lg:block lg:w-1/4 lg:sticky lg:top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-4">
          <h2 className="font-sans text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-6">
            Marketplace Lots
          </h2>
          <nav className="flex flex-col space-y-3">
            {SUB_CATEGORIES.map((cat) => {
              const count = cat.id === 'all'
                ? FURNITURE_ITEMS.length
                : FURNITURE_ITEMS.filter(item => item.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`text-left font-sans text-xs uppercase tracking-widest transition-all duration-200 py-1 flex justify-between items-center w-full ${
                    selectedCategory === cat.id
                      ? 'text-[#8B1E2F] font-bold border-l-2 border-[#8B1E2F] pl-3'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] text-neutral-400">({count})</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* DYNAMIC GALLERY */}
        <main className="w-full lg:w-3/4">
          <div className="border-b border-neutral-100 pb-4 mb-6 md:mb-8">
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 capitalize">
              {selectedCategory === 'all' ? 'Explore Furniture' : selectedCategory.replace(/-/g, ' ')}
            </h1>
            <p className="text-xs lg:text-[13px] text-neutral-400 font-sans mt-1">
              Discover global pieces curated by our network of international gallery experts.
            </p>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-neutral-200">
              <p className="font-serif text-lg text-neutral-400">No active lots in this category yet.</p>
              <button 
                onClick={() => handleCategoryChange('all')}
                className="mt-4 text-xs font-sans font-bold uppercase tracking-widest text-[#8B1E2F] hover:underline"
              >
                View All Lots
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => openModal(item)}
                  className="group border border-neutral-100 p-3 bg-white hover:shadow-md transition-shadow duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-square bg-neutral-50 overflow-hidden mb-3 border border-neutral-100 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/95 px-4 py-2 text-[10px] uppercase font-bold tracking-wider text-neutral-900 shadow-sm">
                          Inspect Furniture
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="font-serif text-sm lg:text-base text-neutral-900 group-hover:text-[#8B1E2F] transition-colors truncate">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-neutral-500 italic">
                        {item.origin}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 flex justify-between items-center text-xs lg:text-sm font-sans border-t border-neutral-50 mt-3">
                    <span className="text-neutral-400 uppercase tracking-wider text-[9px]">Starting Bid</span>
                    <span className="font-bold text-neutral-900">${item.basePrice.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* POP-UP INTERACTIVE DETAIL MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-120 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-6xl rounded-none relative shadow-2xl flex flex-col lg:flex-row border border-neutral-200 max-h-[90vh] lg:max-h-none overflow-hidden my-auto">
            
            {/* Nav Arrows */}
            <button 
              onClick={handlePrevItem}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-50 p-2 bg-white/90 hover:bg-white border border-neutral-200 text-neutral-800 shadow-md hover:text-[#8B1E2F] transition-colors cursor-pointer hidden lg:block"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNextItem}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-50 p-2 bg-white/90 hover:bg-white border border-neutral-200 text-neutral-800 shadow-md hover:text-[#8B1E2F] transition-colors cursor-pointer hidden lg:block"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Close Button */}
            <button 
              onClick={() => { setSelectedItem(null); handleMouseLeave(); }}
              className="absolute top-4 right-4 z-50 p-1.5 bg-neutral-950 text-white hover:bg-[#8B1E2F] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* LEFT COLUMN: Image & Loupe */}
            <div className="w-full lg:w-[55%] p-4 sm:p-6 lg:p-8 flex flex-col justify-between bg-neutral-50 border-b lg:border-b-0 lg:border-r border-neutral-200 relative overflow-y-auto">
              
              <div className="relative flex-grow flex items-center justify-center min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]">
                <div 
                  className="relative overflow-hidden cursor-crosshair border border-neutral-200 bg-white max-w-full"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    ref={imageRef}
                    src={selectedItem.images[activeImageIndex] || selectedItem.image}
                    alt={selectedItem.title}
                    className="object-contain w-full max-h-[280px] sm:max-h-[350px] lg:max-h-[380px] select-none"
                  />
                  <div 
                    className="absolute pointer-events-none border border-[#8B1E2F] bg-white/10"
                    style={lensStyle}
                  />
                </div>
              </div>

              {/* Thumbnails */}
              <div className="mt-4 sm:mt-6 flex justify-center space-x-2">
                {(selectedItem.images && selectedItem.images.length > 0 ? selectedItem.images : [selectedItem.image]).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border bg-white flex items-center justify-center overflow-hidden transition-all p-0.5 ${
                      activeImageIndex === idx ? 'border-2 border-[#8B1E2F]' : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <img src={img} alt="Thumbnail view" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center space-x-1.5 text-neutral-400 font-sans text-[10px] uppercase tracking-wider">
                <SearchCode className="w-3.5 h-3.5 text-[#8B1E2F]" />
                <span>Hover item to inspect joinery & material details</span>
              </div>
            </div>

            {/* RIGHT COLUMN: Metadata & Bidding Panel */}
            <div className="w-full lg:w-[45%] p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative bg-white overflow-y-auto max-h-[45vh] lg:max-h-none">
              
              {/* Microscope View */}
              <div 
                className="absolute inset-0 bg-neutral-900 text-white z-40 transition-all duration-300 overflow-hidden flex flex-col"
                style={{ 
                  display: zoomStyle.display,
                  opacity: zoomStyle.display === 'block' ? 1 : 0 
                }}
              >
                <div className="bg-[#8B1E2F] text-white px-4 py-3 flex items-center justify-between text-[10px] font-sans tracking-widest uppercase font-bold">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full animate-ping mr-2 inline-block" />
                    Material Quality Inspection
                  </span>
                  <span>2.5x magnification</span>
                </div>
                <div 
                  className="flex-grow w-full h-full bg-no-repeat pointer-events-none bg-neutral-950"
                  style={{
                    backgroundImage: zoomStyle.backgroundImage,
                    backgroundPosition: zoomStyle.backgroundPosition,
                    backgroundSize: zoomStyle.backgroundSize,
                  }}
                />
              </div>

              {/* Detail Content */}
              <div className="space-y-4 lg:space-y-5">
                <span className="inline-block bg-[#8B1E2F]/10 text-[#8B1E2F] text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-sans">
                  {selectedItem.category.replace(/-/g, ' ')}
                </span>
                
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-neutral-900 tracking-wide leading-tight">
                    {selectedItem.title}
                  </h2>
                  <p className="font-sans text-xs lg:text-sm italic text-neutral-500 mt-1">
                    Provenance/Maker: <span className="font-semibold text-neutral-800 not-italic font-sans">{selectedItem.origin}</span>
                  </p>
                </div>

                {/* Bidding Engine */}
                <div className="bg-neutral-50 border border-neutral-100 p-3 sm:p-4 font-sans">
                  
                  <div className="text-[11px] text-neutral-500 font-medium pb-2 border-b border-neutral-200 flex justify-between">
                    <span>Est: {selectedItem.estimate} USD</span>
                    <span>{selectedItem.bidsCount} verified bids</span>
                  </div>

                  <div className="py-3 sm:py-4">
                    <div className="flex items-baseline flex-wrap gap-x-2">
                      <span className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                        ${selectedItem.currentBid.toLocaleString()} USD
                      </span>
                      <span className="text-[11px] sm:text-xs text-neutral-400 font-semibold font-sans">
                        ({(selectedItem.currentBid * NGN_RATE).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})} NGN)
                      </span>
                    </div>
                  </div>

                  {/* Bidding Form */}
                  <form onSubmit={handleBidSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[10px] text-neutral-400 font-semibold uppercase tracking-wider mb-1">
                        Your Custom Bid ($ USD):
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs">$</span>
                        <input
                          type="number"
                          value={userBid}
                          onChange={(e) => {
                            setUserBid(e.target.value);
                            setBidError('');
                          }}
                          className="w-full pl-6 pr-3 py-1.5 text-xs border border-neutral-300 bg-white text-neutral-800 font-semibold focus:border-neutral-900 focus:outline-none rounded-none"
                          placeholder="Amount above current bid"
                        />
                      </div>
                    </div>

                    {bidError && (
                      <p className="text-[11px] text-red-600 font-semibold bg-red-50 p-2 border border-red-200">
                        {bidError}
                      </p>
                    )}

                    {bidSuccess && (
                      <p className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 p-2 border border-emerald-200">
                        ✓ Bid placed! You currently lead this auction item.
                      </p>
                    )}

                    <button 
                      type="submit"
                      className="w-full bg-neutral-900 hover:bg-[#8B1E2F] text-white font-sans text-xs font-bold uppercase tracking-widest py-2.5 transition-colors duration-300 rounded-none cursor-pointer"
                    >
                      Place Bid
                    </button>
                  </form>

                  <div className="text-center pt-2">
                    <button className="text-[11px] font-bold text-[#8B1E2F] hover:underline bg-transparent border-none">
                      Register to Bid Live
                    </button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="space-y-1.5 pt-1">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Premium Condition Report
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-[10px] text-neutral-500 font-sans font-medium pl-1">
                    <li className="flex items-center space-x-1">
                      <span className="text-emerald-500">✓</span> <span>Structure Guaranteed</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span className="text-emerald-500">✓</span> <span>Certified Original Finish</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-1 pt-1 border-t border-neutral-100">
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    Piece Narrative & Description
                  </h4>
                  <p className="text-[11px] text-neutral-600 leading-relaxed font-sans max-h-[80px] overflow-y-auto pr-2">
                    {selectedItem.description}
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
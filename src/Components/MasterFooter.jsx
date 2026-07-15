import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

// Import your verified image files from your local directory
import dualPhone from "../assets/dualphone.png";
import badgesImg from "../assets/apple.jpg";

export default function MasterFooter() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedback("");
  };

  return (
    <footer className="w-full text-white select-none">
      {/* ========================================================
          TIER 1: BID ON-THE-GO BANNER (REMOVED PHONE ON MOBILE)
          ======================================================== */}
      <div className="bg-[#F4F4F4] text-neutral-900 pt-6 md:pt-8 pb-0 px-4 md:px-12 lg:px-24 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Phones - HIDDEN on mobile ('hidden'), VISIBLE on md/lg ('md:flex') */}
          <div className="hidden md:flex md:w-1/2 justify-center items-end h-48 md:h-56 overflow-hidden">
            <img
              src={dualPhone}
              alt="Invaluable App Mockups"
              className="h-full max-h-50 md:max-h-55 w-auto object-contain drop-shadow-sm translate-y-px"
            />
          </div>

          {/* Right Side: Action Text & Compact Swapped Badges - Full width on mobile ('w-full md:w-1/2') */}
          <div className="w-full md:w-1/2 space-y-3 text-center md:text-left pb-6 md:pb-8">
            <h3 className="font-sans text-xl md:text-2xl font-normal tracking-tight text-neutral-900">
              Bid On-the-Go!
            </h3>
            <p className="font-sans text-xs md:text-sm text-neutral-600 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Download the BidSpirit app and never miss an auction from your
              iOS or Android device.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-1">
              {/* App Store Button */}
              <div className="h-9 w-[125px] overflow-hidden relative cursor-pointer hover:opacity-85 transition-opacity rounded-md">
                <img
                  src={badgesImg}
                  alt="Download on the App Store"
                  className="absolute right-0 top-0 h-full max-w-none object-right mix-blend-multiply"
                />
              </div>

              {/* Google Play Button */}
              <div className="h-9 w-[125px] overflow-hidden relative cursor-pointer hover:opacity-85 transition-opacity rounded-md">
                <img
                  src={badgesImg}
                  alt="Get it on Google Play"
                  className="absolute left-0 top-0 h-full max-w-none object-left mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          TIER 2: SOCIAL MEDIA BAR (BIGGER ICONS & MORE SPACE)
          ======================================================== */}
      <div className="bg-[#8B1E2F] py-5 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-12">
          <a
            href="#"
            className="text-white text-2xl hover:text-neutral-300 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white text-2xl hover:text-neutral-300 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white text-2xl hover:text-neutral-300 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white text-2xl hover:text-neutral-300 transition-colors"
          >
            <FaPinterestP />
          </a>
        </div>
      </div>

      {/* ========================================================
          TIER 3: THE DIRECTORY, CONTACT, & BRANDED FEEDBACK
          ======================================================== */}
      <div className="bg-[#0A0A0A] pt-16 pb-8 px-4 md:px-12 lg:px-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          
          {/* Main 4-Column Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start mb-16">
            
            {/* Column 1: Custom Branded Feedback Portal */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-serif text-lg md:text-xl font-medium tracking-wide text-white">
                Submit Platform Feedback
              </h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                Help us improve BidSpirit. Share your thoughts regarding the system interface or bidding experience.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3 w-full">
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Enter your feedback here..."
                  className="w-full h-24 bg-[#141414] border border-neutral-800 rounded-sm p-3 font-sans text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#8B1E2F] transition-colors resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#8B1E2F] hover:bg-[#a32437] text-white font-sans text-xs font-semibold py-2.5 px-4 rounded-sm transition-colors duration-200 shadow-sm cursor-pointer text-center"
                >
                  Send Submission
                </button>
              </form>
            </div>

            {/* Column 2: Site Map */}
            <div className="flex flex-col space-y-4 lg:pl-6">
              <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-white border-b border-neutral-900 pb-1">
                SITE MAP
              </h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="font-sans text-xs text-neutral-400 hover:text-[#8B1E2F] transition-colors font-light">Live Marketplace</a></li>
                <li><a href="#" className="font-sans text-xs text-neutral-400 hover:text-[#8B1E2F] transition-colors font-light">Fine Art Catalog</a></li>
                <li><a href="#" className="font-sans text-xs text-neutral-400 hover:text-[#8B1E2F] transition-colors font-light">Antique Showcase</a></li>
                <li><a href="#" className="font-sans text-xs text-neutral-400 hover:text-[#8B1E2F] transition-colors font-light">Premium Collectibles</a></li>
              </ul>
            </div>

            {/* Column 3: Explore */}
            <div className="flex flex-col space-y-4">
              <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-white border-b border-neutral-900 pb-1">
                EXPLORE
              </h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="font-sans text-xs text-neutral-400 hover:text-[#8B1E2F] transition-colors font-light">Media Gallery</a></li>
                <li><a href="#" className="font-sans text-xs text-neutral-400 hover:text-[#8B1E2F] transition-colors font-light">Sponsored Auctions</a></li>
                <li><a href="#" className="font-sans text-xs text-neutral-400 hover:text-[#8B1E2F] transition-colors font-light">Completed Lots</a></li>
                <li><a href="#" className="font-sans text-xs text-neutral-400 hover:text-[#8B1E2F] transition-colors font-light">Terms & Assurances</a></li>
              </ul>
            </div>

            {/* Column 4: Contact & Corporate Info */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-serif text-lg md:text-xl font-medium tracking-wide text-white">
                Contact & Corporate Info
              </h3>
              
              <div className="space-y-4 pt-1">
                {/* Corporate Address */}
                <div className="grid grid-cols-[20px_auto] items-start gap-2 font-sans text-xs text-neutral-400 font-light leading-relaxed">
                  <span className="text-sm shrink-0"></span>
                  <p>
                    <strong className="text-white font-medium">Address:</strong> Aptech Corporate Centre, Phase 1 Headquarters, IT Hub Metro Plaza, Plaza District
                  </p>
                </div>

                {/* Corporate Phone */}
                <div className="grid grid-cols-[20px_auto] items-center gap-2 font-sans text-xs text-neutral-400 font-light">
                  <span className="text-sm shrink-0"></span>
                  <p>
                    <strong className="text-white font-medium">Phone:</strong> +1 (800) 555-0199 / +1 (800) 555-0142
                  </p>
                </div>

                {/* Corporate Email */}
                <div className="grid grid-cols-[20px_auto] items-center gap-2 font-sans text-xs text-neutral-400 font-light">
                  <span className="text-sm shrink-0"></span>
                  <p>
                    <strong className="text-white font-medium">Email:</strong> <a href="mailto:bidspirit@gmail.com" className="text-[#8B1E2F] font-medium hover:underline">bidspirit@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-[11px] text-neutral-600 font-light text-center sm:text-left w-full sm:w-auto">
              © 2026 BidSpirit International Marketplace. All Rights Reserved.
            </p>
            <p className="font-sans text-[11px] text-neutral-600 font-light italic text-center sm:text-right w-full sm:w-auto">
              Premium Bidding Platform Experience
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
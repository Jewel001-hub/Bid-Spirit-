import React, { useState } from "react";

export default function MasterFooter() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() !== "") {
      setSubmitted(true);
      setFeedback("");
      setTimeout(() => setSubmitted(false), 4000); // clears message
    }
  };

  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 pt-14 pb-20 px-4 md:px-12 lg:px-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 pb-10 border-b border-neutral-800">
        
        {/* COLUMN 1: LIVE VIEWER FEEDBACK FORM */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg text-white tracking-wide">Submit Portal Feedback</h4>
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            Let the eProjects Team know your thoughts regarding the interface and layout.
          </p>
          
          <form onSubmit={handleFeedbackSubmit} className="space-y-2">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback here..."
              rows="3"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-sm p-3 text-xs text-white placeholder-neutral-600 focus:outline-hidden focus:border-amber-500 font-sans transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full bg-white hover:bg-neutral-200 text-neutral-950 font-sans text-xs font-semibold py-2.5 px-4 rounded-sm transition-colors duration-200"
            >
              Send Submission
            </button>
          </form>

          {submitted && (
            <p className="text-emerald-400 font-sans text-xs italic animate-pulse">
              ✔ Thank you! Your submission has been captured.
            </p>
          )}
        </div>

        {/* COLUMN 2: SITE MAP & LINKS MATRIX */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white uppercase tracking-wider">Site Map</h4>
            <ul className="space-y-2 font-sans text-xs text-neutral-400">
              <li className="hover:text-white transition-colors cursor-pointer">Live Marketplace</li>
              <li className="hover:text-white transition-colors cursor-pointer">Fine Art Catalog</li>
              <li className="hover:text-white transition-colors cursor-pointer">Antique Showcase</li>
              <li className="hover:text-white transition-colors cursor-pointer">Premium Collectibles</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 font-sans text-xs text-neutral-400">
              <li className="hover:text-white transition-colors cursor-pointer">Media Gallery</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sponsored Auctions</li>
              <li className="hover:text-white transition-colors cursor-pointer">Completed Lots</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms & Assurances</li>
            </ul>
          </div>
        </div>

        {/* COLUMN 3: CORPORATE IDENTIFICATION DETAILS */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg text-white tracking-wide">Contact & Corporate Info</h4>
          <div className="font-sans text-xs text-neutral-400 space-y-2.5 leading-relaxed">
            <p className="flex items-start gap-2">
              <span className="text-white font-medium">🏢 Address:</span>
              <span>Aptech Corporate Centre, Phase 1 Headquarters, IT Hub Metro Plaza, Plaza District</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-white font-medium">📞 Phone:</span>
              <span>+1 (800) 555-0199 / +1 (800) 555-0142</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-white font-medium">✉ Email:</span>
              <span className="text-amber-500 underline cursor-pointer hover:text-amber-400 transition-colors">
                eprojects-team@bidspirit-marketplace.org
              </span>
            </p>
          </div>
        </div>

      </div>

      {/* BASELINE LEGAL STAMP */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-sans text-neutral-600">
        <p>© 2026 BidSpirit International Marketplace. All Rights Reserved.</p>
        <p className="italic font-light">Academic eProject Submission Framework Phase 4</p>
      </div>
    </footer>
  );
}
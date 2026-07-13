import lionArt from "../assets/Ban.jpg";
import watchAsset from "../assets/rolex.jpg";
import antiqueAsset from "../assets/sculp.avif";
import ban2 from "../assets/Ban2.jpg";
import pocketWatch from "../assets/pocket.avif";
import marbleBust from "../assets/mab2.jpg";

export const promotedAuctions = [
  {
    id: "p1",
    title: "The Summer Collectibles Auction",
    house: "Goldberg Coins & Collectibles",
    date: "Jul 15, 6:00 PM GMT+1",
    image: lionArt,
  },
  {
    id: "p2",
    title: "The Glorya Kaufman Collection",
    house: "Abell Auction",
    date: "Jul 14, 5:00 PM GMT+1",
    image: watchAsset,
  }
];

export const marketplaceItems = [
  {
    id: "m1",
    title: "Comic & Comic Art: Online Edition",
    house: "Landy Pop...",
    date: "Jul 15, 11:00 PM GMT+1",
    location: "Millville, MA, US",
    image: ban2,
  },
  {
    id: "m2",
    title: "Auktion 26 | TRIBAL ART | AFRIKA...",
    house: "GAILER...",
    date: "Jul 11, 9:00 AM GMT+1",
    location: "Breitbrunn am Chiemsee, DE",
    image: antiqueAsset,
  },
  {
    id: "m3",
    title: "LA 09 - Classical Sale",
    house: "Auction Lisbon",
    date: "Jul 9, 3:00 PM GMT+1",
    location: "Amadora, Portugal",
    image: pocketWatch,
  }
];

export const premiumParityItems = [
  { id: "b1", title: "WWI Liberty Loan Poster Group", house: "Keystone Auctions LLC", date: "Jul 19, 2:00 PM GMT+1", price: 50, image: marbleBust },
  { id: "b2", title: "5% Loan Bond of the City of Tiflis, 1910", house: "Eternity Gallery", date: "Jul 25, 3:30 PM GMT+1", price: 80, image: lionArt },
  { id: "b3", title: "Group of 8 Printed Government Documents", house: "East Coast Books", date: "Jul 9, 8:00 PM GMT+1", price: 25, image: watchAsset },
  { id: "b4", title: "5% Loan Obligation of the City of Sevas", house: "Eternity Gallery", date: "Jul 25, 3:30 PM GMT+1", price: 90, image: ban2 }
];

export const upcomingAuctions = [
  {
    id: "u1",
    title: "Auction 144 - Day 2",
    house: "Kiefer Buch- und Kunstauktionen",
    rating: 4.6,
    reviewsCount: 87,
    date: "July 9, 9:00 AM GMT+1",
    location: "Pforzheim, Germany",
    coverImage: marbleBust,
    featuredItems: [lionArt, watchAsset, antiqueAsset, ban2, pocketWatch]
  },
  {
    id: "u2",
    title: "Art & Antiques",
    house: "Deutsch Auktionen",
    rating: 4.4,
    reviewsCount: 41,
    date: "July 9, 9:00 AM GMT+1",
    location: "Vienna, Austria",
    coverImage: antiqueAsset,
    featuredItems: [pocketWatch, ban2, watchAsset, lionArt, marbleBust]
  }
];
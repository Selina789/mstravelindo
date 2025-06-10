import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import backArrow from '../../assets/back-arrow.png';
import Footer from "../../components/Footer";
import '../../index.css';
import batamfast from '../../assets/tickets-img/batamfast.png';
import citraIndomas from '../../assets/tickets-img/citra-indomas.jpg';
import dolphinFerry from '../../assets/tickets-img/dolphin-ferry-1.jpeg';
import ferryGeneric from '../../assets/tickets-img/ferry.jpg';
import horizon from '../../assets/tickets-img/horizon.png';
import majesticFerry from '../../assets/tickets-img/majesticferry.png';
import marineHawk from '../../assets/tickets-img/marine-hawk-ferry.jpg';
import putriAnggreni from '../../assets/tickets-img/putri-anggreni.jpeg';
import sindoFerry from '../../assets/tickets-img/sindoferry.png';

const ferryImages = {
  'Batam Fast': batamfast,
  'Citra Indomas Ferry': citraIndomas,
  'Dolphin Ferry': dolphinFerry,
  'Horizon Ferry': horizon,
  'Majestic Ferry': majesticFerry,
  'Marine Hawk Ferry': marineHawk,
  'Putri Anggreni Ferry': putriAnggreni,
  'Sindo Ferry': sindoFerry,
};

const ferries = [
  'Sindo Ferry', 'Majestic Ferry', 'Batam Fast', 'Horizon Ferry',
  'Marine Hawk Ferry', 'Putri Anggreni Ferry', 'Dolphin Ferry', 'Citra Indomas Ferry',
];

const directions = ['One Way', 'Round Trip'];
const nationalityOptions = ['Indonesian Only', 'All Passports'];

const getCountry = (ferry) =>
  ['Marine Hawk Ferry', 'Putri Anggreni Ferry', 'Dolphin Ferry', 'Citra Indomas Ferry'].includes(ferry)
    ? 'Malaysia'
    : 'Singapore';

const generateTickets = () => {
  const tickets = [];
  ferries.forEach((ferry) => {
    const country = getCountry(ferry);
    if (country === 'Malaysia') {
      directions.forEach((direction) => {
        tickets.push({ ferry, direction, nationality: 'All', country });
      });
    } else {
      directions.forEach((direction) => {
        nationalityOptions.forEach((nationality) => {
          tickets.push({ ferry, direction, nationality, country });
        });
      });
    }
  });
  return tickets;
};

const ticketData = generateTickets();

const priceMap = {
  'Sindo Ferry-Singapore-One Way-Indonesian Only': 400000,
  'Sindo Ferry-Singapore-One Way-All Passports': 500000,
  'Sindo Ferry-Singapore-Round Trip-Indonesian Only': 740000,
  'Sindo Ferry-Singapore-Round Trip-All Passports': 940000,
  'Majestic Ferry-Singapore-One Way-Indonesian Only': 400000,
  'Majestic Ferry-Singapore-One Way-All Passports': 500000,
  'Majestic Ferry-Singapore-Round Trip-Indonesian Only': 740000,
  'Majestic Ferry-Singapore-Round Trip-All Passports': 940000,
  'Batam Fast-Singapore-One Way-Indonesian Only': 400000,
  'Batam Fast-Singapore-One Way-All Passports': 500000,
  'Batam Fast-Singapore-Round Trip-Indonesian Only': 740000,
  'Batam Fast-Singapore-Round Trip-All Passports': 940000,
  'Horizon Ferry-Singapore-One Way-Indonesian Only': 460000,
  'Horizon Ferry-Singapore-One Way-All Passports': 530000,
  'Horizon Ferry-Singapore-Round Trip-Indonesian Only': 760000,
  'Horizon Ferry-Singapore-Round Trip-All Passports': 960000,
  'Marine Hawk Ferry-Malaysia-One Way-All': 395000,
  'Marine Hawk Ferry-Malaysia-Round Trip-All': 565000,
  'Putri Anggreni Ferry-Malaysia-One Way-All': 395000,
  'Putri Anggreni Ferry-Malaysia-Round Trip-All': 595000,
  'Dolphin Ferry-Malaysia-One Way-All': 385000,
  'Dolphin Ferry-Malaysia-Round Trip-All': 575000,
  'Citra Indomas Ferry-Malaysia-One Way-All': 395000,
  'Citra Indomas Ferry-Malaysia-Round Trip-All': 565000,
};

const FerryTickets = () => {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [page, setPage] = useState(1);
  const perPage = 12;

  const filtered = selectedCountry === 'All'
    ? ticketData
    : ticketData.filter(t => t.country === selectedCountry);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const uniqueCountries = ['All', ...new Set(ticketData.map(t => t.country))];

  const getPrice = (ticket) => {
    const key =
      ticket.nationality === 'All'
        ? `${ticket.ferry}-${ticket.country}-${ticket.direction}-All`
        : `${ticket.ferry}-${ticket.country}-${ticket.direction}-${ticket.nationality}`;
    return priceMap[key] ?? 'N/A';
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white px-4 py-8 sm:px-6 lg:px-8 mt-16 flex flex-col items-center">
        <Link to="/tickets" className="text-base lg:text-xl w-full mt-4 pl-0 flex flex-row items-center lg:pl-20 lg:mt-10 group-hover:text-red-600 group-hover:scale-110">
          <img src={backArrow} alt="Back" className="w-6 h-6 hover:scale-110 slowmo-link-hover" />
          <h2 className="text-red-400 font-bold mt-[5px] lg:mt-[3px] ml-2 hover:scale-110 slowmo-link-hover">BACK</h2>
        </Link>

        <h1 className="text-4xl font-bold text-red-600 text-center mt-5">FERRY TICKETS</h1>
        <p className="text-red-400 italic text-center mb-6 mt-3">Singapore / Malaysia</p>

        <div className="mb-8">
          <select
            value={selectedCountry}
            onChange={(e) => { setSelectedCountry(e.target.value); setPage(1); }}
            className="border border-gray-300 px-4 py-2 rounded bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            {uniqueCountries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center gap-x-20 gap-y-15"
          >
            {paginated.map((ticket, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden w-[90%] sm:w-[250px] transition hover:shadow-lg hover:scale-[1.02] duration-300"
              >
                <div className="h-36 w-full overflow-hidden">
                  <img
                    src={ferryImages[ticket.ferry] || ferryGeneric}
                    alt={ticket.ferry}
                    className={`w-full h-full ${
                      ['Sindo Ferry', 'Batam Fast', 'Majestic Ferry', 'Horizon Ferry'].includes(ticket.ferry)
                        ? 'object-contain p-2'
                        : 'object-cover'
                    }`}
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-base text-gray-900 mb-1">
                    {ticket.ferry} – {ticket.direction}
                  </h3>
                  <p className="text-xs text-gray-500 mb-1">
                    {ticket.country} — {ticket.nationality}
                  </p>
                  <hr className="border-gray-300 my-2" />
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm font-semibold">Rp. {getPrice(ticket).toLocaleString()}</p>
                    <a href="https://wa.me/6282170824534" target="_blank" rel="noopener noreferrer">
                      <button className="slowmo-link-hover bg-red-400 hover:bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                        INQUIRE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center mt-12 space-x-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="slowmo-button-hover text-red-500 hover:text-red-700 disabled:text-gray-400"
          >
            ← Prev
          </button>

          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                className={`w-3 h-3 rounded-full ${page === i + 1 ? 'bg-red-500' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="slowmo-button-hover text-red-500 hover:text-red-700 disabled:text-gray-400"
          >
            Next →
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FerryTickets;

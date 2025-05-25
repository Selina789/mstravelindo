import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import backArrow from '../../assets/back-arrow.png';
import Footer from '../../components/Footer';
import '../../index.css';

const destinations = [
  { country: 'Japan', continent: 'Asia', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b' },
  { country: 'France', continent: 'Europe', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' },
  { country: 'Thailand', continent: 'Asia', image: 'https://images.unsplash.com/photo-1505731133653-01d5f53b0648' },
  { country: 'United States', continent: 'North America', image: 'https://images.unsplash.com/photo-1549921296-3a9d0a98a89b' },
  { country: 'Italy', continent: 'Europe', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea' },
  { country: 'Turkey', continent: 'Europe', image: 'https://images.unsplash.com/photo-1588601883332-cd9a9d1b3a6e' },
  { country: 'Mexico', continent: 'North America', image: 'https://images.unsplash.com/photo-1603302576836-2b4a153e4d15' },
  { country: 'Spain', continent: 'Europe', image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad' },
  { country: 'Germany', continent: 'Europe', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be' },
  { country: 'United Kingdom', continent: 'Europe', image: 'https://images.unsplash.com/photo-1555088465-17364c8e0b0c' },
  { country: 'Australia', continent: 'Oceania', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d3' },
  { country: 'China', continent: 'Asia', image: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3' },
  { country: 'Canada', continent: 'North America', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
  { country: 'Indonesia', continent: 'Asia', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
  { country: 'South Korea', continent: 'Asia', image: 'https://images.unsplash.com/photo-1549693578-d683be217e58' },
  { country: 'Vietnam', continent: 'Asia', image: 'https://images.unsplash.com/photo-1576402187874-80f9b8b9035c' },
  { country: 'Singapore', continent: 'Asia', image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8b2' },
  { country: 'Brazil', continent: 'South America', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
  { country: 'India', continent: 'Asia', image: 'https://images.unsplash.com/photo-1548013146-72479768bada' },
  { country: 'Netherlands', continent: 'Europe', image: 'https://images.unsplash.com/photo-1526470498-9ae73c665b1d' },
  { country: 'Greece', continent: 'Europe', image: 'https://images.unsplash.com/photo-1504265689282-58f44e02f42e' },
  { country: 'Malaysia', continent: 'Asia', image: 'https://images.unsplash.com/photo-1586087463713-3a1932a98b18' },
  { country: 'Egypt', continent: 'Africa', image: 'https://images.unsplash.com/photo-1586363091793-6cf31e106a7f' },
  { country: 'Russia', continent: 'Europe', image: 'https://images.unsplash.com/photo-1618220188520-b3449f157127' },
  { country: 'Portugal', continent: 'Europe', image: 'https://images.unsplash.com/photo-1545259742-2f30cfcb8f34' },
  { country: 'United Arab Emirates', continent: 'Asia', image: 'https://images.unsplash.com/photo-1603302577302-3f6f2df93b7e' },
  { country: 'Morocco', continent: 'Africa', image: 'https://images.unsplash.com/photo-1531686264886-56d9439bdf45' },
  { country: 'Switzerland', continent: 'Europe', image: 'https://images.unsplash.com/photo-1526481280690-7c7c98f4d951' },
  { country: 'South Africa', continent: 'Africa', image: 'https://images.unsplash.com/photo-1505761937142-2f72ecf7c1f5' },
  { country: 'Austria', continent: 'Europe', image: 'https://images.unsplash.com/photo-1534349762230-401a206d09d4' },
  { country: 'Philippines', continent: 'Asia', image: 'https://images.unsplash.com/photo-1583215302207-7924c7c2594f' },
];

const PlaneTickets = () => {
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [page, setPage] = useState(1);
  const perPage = 12;

  const filtered = selectedContinent === 'All'
    ? destinations
    : destinations.filter(t => t.continent === selectedContinent);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const continents = ['All', ...new Set(destinations.map(t => t.continent))];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white px-4 py-8 sm:px-6 lg:px-8 mt-16 flex flex-col items-center">
        {/* Back button */}
        <Link to="/" className="text-base lg:text-xl w-full mt-4 ml-0 flex flex-row items-center lg:ml-20 lg:mt-10">
          <img src={backArrow} alt="Back" className="w-6 h-6 hover:scale-110 slowmo-link-hover" />
          <h2 className="text-red-400 font-bold mt-[5px] lg:mt-[3px] ml-2 hover:scale-110 slowmo-link-hover">BACK</h2>
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold text-red-600 text-center mt-5">AIRPLANE</h1>
        <p className="text-red-400 italic text-center mb-6 mt-3">Explore international destinations</p>

        {/* Continent Filter */}
        <div className="mb-8">
          <select
            value={selectedContinent}
            onChange={(e) => { setSelectedContinent(e.target.value); setPage(1); }}
            className="border border-gray-300 px-4 py-2 rounded bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            {continents.map(continent => (
              <option key={continent} value={continent}>{continent}</option>
            ))}
          </select>
        </div>

        {/* Animated Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center"
          >
            {paginated.map((tour, index) => (
              <div
                key={index}
                className="bg-white border-4 border-white rounded-xl shadow-lg overflow-hidden w-full max-w-[260px] transition hover:scale-[1.02] duration-300"
              >
                <img
                  src={`${tour.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={tour.country}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 text-center">{tour.country}</h3>
                  <p className="text-sm text-gray-500 text-center mb-2">{tour.continent}</p>
                  <a href="https://wa.me/6282170824534" target="_blank" rel="noopener noreferrer">
                    <button className="slowmo-link-hover bg-red-400 hover:bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm w-full">
                      INQUIRE
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
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

export default PlaneTickets;

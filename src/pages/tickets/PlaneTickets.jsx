import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import backArrow from '../../assets/back-arrow.png';
import Footer from '../../components/Footer';
import '../../index.css';

const destinations = [
  {
    country: 'Indonesia',
    continent: 'Asia',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447359/indonesia_ue5iez.jpg'
  },
  {
    country: 'Japan',
    continent: 'Asia',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447350/japan_xjzkel.jpg'
  },
  {
    country: 'France',
    continent: 'Europe',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447732/france_zunhdc.jpg'
  },
  {
    country: 'Thailand',
    continent: 'Asia',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447544/thailand_muyp4a.jpg'
  },
  {
    country: 'United States',
    continent: 'North America',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447174/america_q7b6yr.jpg'
  },
  {
    country: 'Italy',
    continent: 'Europe',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447638/italy_gb1qfp.jpg'
  },
  {
    country: 'Turkey',
    continent: 'Europe',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447081/turkiye_odo22u.jpg'
  },
  {
    country: 'Netherland',
    continent: 'Europe',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447177/netherland_e4hiof.jpg'
  },
  {
    country: 'Spain',
    continent: 'Europe',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447465/spain_visjes.jpg'
  },
  {
    country: 'Germany',
    continent: 'Europe',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447491/german_veoski.jpg'
  },
  {
    country: 'United Kingdom',
    continent: 'Europe',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447429/uk_qii7in.jpg'
  },
  {
    country: 'Australia',
    continent: 'Oceania',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447187/australia_fivzv5.jpg'
  },
  {
    country: 'China',
    continent: 'Asia',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447236/china_rlx6zr.jpg'
  },
  {
    country: 'Canada',
    continent: 'North America',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447903/canada_krikkh.jpg'
  },
  {
    country: 'South Korea',
    continent: 'Asia',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447986/korea_oigiqn.jpg'
  },
  {
    country: 'Vietnam',
    continent: 'Asia',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748447809/vietnam_nxtvab.jpg'
  },
  {
    country: 'Singapore',
    continent: 'Asia',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748448100/singapore_q47xgp.jpg'
  },
  {
    country: 'Brazil',
    continent: 'South America',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748448792/brazil_i26exz.jpg'
  },
  {
    country: 'India',
    continent: 'Asia',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748448417/india_wzmo0o.jpg'
  },
  {
    country: 'Mexico',
    continent: 'North America',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748448228/mexico_ssqiog.jpg'
  },
  {
    country: 'Greece',
    continent: 'Europe',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748448472/greece_akyzjf.jpg'
  },
  {
    country: 'Malaysia',
    continent: 'Asia',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748448107/malaysia_zc7wge.jpg'
  },
  {
    country: 'Egypt',
    continent: 'Africa',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748448528/egypt_ndgbgz.jpg'
  },
  {
    country: 'Russia',
    continent: 'Europe',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748448874/russia_mgm3oz.jpg'
  },
  {
    country: 'Portugal',
    continent: 'Europe',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748449023/portugal_cva58m.jpg'
  },
  {
    country: 'United Arab Emirates',
    continent: 'Asia',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748449116/arab_ycism5.jpg'
  },
  {
    country: 'Switzerland',
    continent: 'Europe',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748448973/switzerland_pidevy.jpg'
  },
  {
    country: 'Austria',
    continent: 'Europe',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748449149/austria_w6hiqf.jpg'
  },
  {
    country: 'Philippines',
    continent: 'Asia',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748448830/phillipines_vdeeuw.jpg'
  }
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
        <Link to="/tickets" className="text-base lg:text-xl w-full mt-4 ml-0 flex flex-row items-center lg:ml-20 lg:mt-10">
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
                  loading="lazy"
                  src={`${tour.image}?auto=format&fit=crop&w=800&dpr=2&q=90`}
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

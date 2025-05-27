import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import backArrow from '../../assets/back-arrow.png';
import Footer from '../../components/Footer';
import '../../index.css';

const destinations = [
  {
    country: 'Japan',
    continent: 'Asia',
    image: 'https://media.istockphoto.com/id/1131297221/photo/cherry-blossoms-and-mount-fuji.jpg'
  },
  {
    country: 'France',
    continent: 'Europe',
    image: 'https://media.istockphoto.com/id/157482029/photo/eiffel-tower-paris.jpg'
  },
  {
    country: 'Thailand',
    continent: 'Asia',
    image: 'https://media.istockphoto.com/id/1146517116/photo/wat-arun-temple-bangkok-thailand.jpg'
  },
  {
    country: 'United States',
    continent: 'North America',
    image: 'https://media.istockphoto.com/id/157482029/photo/statue-of-liberty-new-york.jpg'
  },
  {
    country: 'Italy',
    continent: 'Europe',
    image: 'https://media.istockphoto.com/id/157482029/photo/colosseum-rome-italy.jpg'
  },
  {
    country: 'Turkey',
    continent: 'Europe',
    image: 'https://media.istockphoto.com/id/157482029/photo/cappadocia-turkey.jpg'
  },
  {
    country: 'Mexico',
    continent: 'North America',
    image: 'https://media.istockphoto.com/id/157482029/photo/chichen-itza-mexico.jpg'
  },
  {
    country: 'Spain',
    continent: 'Europe',
    image: 'https://media.istockphoto.com/id/157482029/photo/sagrada-familia-barcelona-spain.jpg'
  },
  {
    country: 'Germany',
    continent: 'Europe',
    image: 'https://media.istockphoto.com/id/157482029/photo/brandenburg-gate-berlin-germany.jpg'
  },
  {
    country: 'United Kingdom',
    continent: 'Europe',
    image: 'https://media.istockphoto.com/id/157482029/photo/big-ben-london-uk.jpg'
  },
  {
    country: 'Australia',
    continent: 'Oceania',
    image: 'https://media.istockphoto.com/id/157482029/photo/sydney-opera-house-australia.jpg'
  },
  {
    country: 'China',
    continent: 'Asia',
    image: 'https://media.istockphoto.com/id/157482029/photo/great-wall-of-china.jpg'
  },
  {
    country: 'Canada',
    continent: 'North America',
    image: 'https://media.istockphoto.com/id/157482029/photo/moraine-lake-banff-national-park-canada.jpg'
  },
  {
    country: 'Indonesia',
    continent: 'Asia',
    image: 'https://media.istockphoto.com/id/157482029/photo/borobudur-temple-indonesia.jpg'
  },
  {
    country: 'South Korea',
    continent: 'Asia',
    image: 'https://media.istockphoto.com/id/157482029/photo/gyeongbokgung-palace-seoul-south-korea.jpg'
  },
  {
    country: 'Vietnam',
    continent: 'Asia',
    image: 'https://media.istockphoto.com/id/157482029/photo/ha-long-bay-vietnam.jpg'
  },
  {
    country: 'Singapore',
    continent: 'Asia',
    image: 'https://media.istockphoto.com/id/157482029/photo/marina-bay-sands-singapore.jpg'
  },
  {
    country: 'Brazil',
    continent: 'South America',
    image: 'https://media.istockphoto.com/id/157482029/photo/christ-the-redeemer-rio-de-janeiro-brazil.jpg'
  },
  {
    country: 'India',
    continent: 'Asia',
    image: 'https://media.istockphoto.com/id/157482029/photo/taj-mahal-agra-india.jpg'
  },
  {
    country: 'Netherlands',
    continent: 'Europe',
    image: 'https://media.istockphoto.com/id/157482029/photo/windmills-netherlands.jpg'
  },
  {
    country: 'Greece',
    continent: 'Europe',
    image: 'https://media.istockphoto.com/id/157482029/photo/parthenon-athens-greece.jpg'
  },
  {
    country: 'Malaysia',
    continent: 'Asia',
    image: 'https://media.istockphoto.com/id/157482029/photo/petronas-twin-towers-kuala-lumpur-malaysia.jpg'
  },
  {
    country: 'Egypt',
    continent: 'Africa',
    image: 'https://media.istockphoto.com/id/157482029/photo/pyramids-of-giza-egypt.jpg'
  },
  {
    country: 'Russia',
    continent: 'Europe',
    image: 'https://media.istockphoto.com/id/157482029/photo/saint-basils-cathedral-moscow-russia.jpg'
  },
  {
    country: 'Portugal',
    continent: 'Europe',
    image: 'https://media.istockphoto.com/id/157482029/photo/belem-tower-lisbon-portugal.jpg'
  },
  {
    country: 'United Arab Emirates',
    continent: 'Asia',
    image: 'https://media.istockphoto.com/id/157482029/photo/burj-khalifa-dubai-uae.jpg'
  },
  {
    country: 'Morocco',
    continent: 'Africa',
    image: 'https://media.istockphoto.com/id/157482029/photo/koutoubia-mosque-marrakech-morocco.jpg'
  },
  {
    country: 'Switzerland',
    continent: 'Europe',
    image: 'https://media.istockphoto.com/id/157482029/photo/matterhorn-mountain-switzerland.jpg'
  },
  {
    country: 'South Africa',
    continent: 'Africa',
    image: 'https://media.istockphoto.com/id/157482029/photo/table-mountain-cape-town-south-africa.jpg'
  },
  {
    country: 'Austria',
    continent: 'Europe',
    image: 'https://media.istockphoto.com/id/157482029/photo/schonbrunn-palace-vienna-austria.jpg'
  },
  {
    country: 'Philippines',
    continent: 'Asia',
    image: 'https://media.istockphoto.com/id/157482029/photo/mayon-volcano-philippines.jpg'
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

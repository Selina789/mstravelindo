import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const TourList = ({ title, subtitle, tours }) => {
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 12;

  // Filter tours by selected duration
  const filteredTours = tours.filter((tour) => {
    const days = parseInt(tour.duration.match(/\d+/)?.[0] || '0');
    if (selectedDuration === '3-5') return days >= 3 && days <= 5;
    if (selectedDuration === '6-8') return days >= 6 && days <= 8;
    return true;
  });

  const totalPages = Math.ceil(filteredTours.length / perPage);
  const paginatedTours = filteredTours.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8 mt-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-red-600 text-center mt-10">{title}</h1>
      {subtitle && <p className="text-red-400 italic text-center mb-6 mt-3">{subtitle}</p>}

      {/* Filter Dropdown */}
      <div className="relative mb-8">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-red-400 hover:bg-red-500 rounded shadow"
        >
          <FontAwesomeIcon icon={faFilter} className="slowmo-link-hover mr-2" />
          Filter Duration
        </button>

        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
            {['All', '3-5', '6-8'].map((range) => (
              <button
                key={range}
                onClick={() => {
                  setSelectedDuration(range);
                  setPage(1); // Reset page on filter
                  setDropdownOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-red-100 ${
                  selectedDuration === range ? 'bg-red-50 font-bold' : ''
                }`}
              >
                {range === 'All' ? 'All' : `${range} Days`}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tour Cards */}
      <div className="grid grid-cols-1 [@media(min-width:768px)_and_(max-width:886px)]:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
        {paginatedTours.map((tour, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-[260px] transition hover:scale-[1.02]"
          >
            <img src={tour.image} alt={tour.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900">
                {tour.title}{' '}
                <span className="text-sm text-red-400 font-medium">({tour.duration})</span>
              </h3>
              <p className="text-sm text-gray-500 mb-1">Departure: {tour.departureDate}</p>
              <hr className="border-gray-300 my-1" />
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm font-semibold">Rp. {tour.price}</p>
                <a
                  href="https://wa.me/6282170824534"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="slowmo-link-hover bg-red-300 hover:bg-red-400 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    INQUIRE
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

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
  );
};

export default TourList;

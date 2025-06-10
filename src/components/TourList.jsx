import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMap } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const TourList = ({ title, subtitle, tours }) => {
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, selectedDuration]);

  const filteredTours = (tours || []).filter((tour) => {
    const durationStr = tour?.duration || '';
    const days = parseInt(durationStr.match(/\d+/)?.[0] || '0');
    if (selectedDuration === '1-5') return days >= 1 && days <= 5;
    if (selectedDuration === '6-13') return days >= 6 && days <= 13;
    return true;
  });

  const totalPages = Math.ceil(filteredTours.length / perPage);
  const paginatedTours = filteredTours.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="min-h-full bg-white px-4 py-8 sm:px-6 lg:px-8 mt-[70px] flex flex-col items-center">
      <h1 className="text-4xl font-bold text-red-600 text-center mt-10">{title}</h1>
      {subtitle && <p className="text-red-500 italic text-center mb-6 mt-3">{subtitle}</p>}

      <div className="relative mb-8">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="slowmo-link-hover flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded shadow"
        >
          <FontAwesomeIcon icon={faFilter} className="slowmo-link-hover mr-2" />
          Filter Duration
        </button>

        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
            {['All', '1-5', '6-13'].map((range) => (
              <button
                key={range}
                onClick={() => {
                  setSelectedDuration(range);
                  setPage(1);
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

      {filteredTours.length === 0 ? (
        <div className="flex flex-col items-center mt-20 mb-20 text-center">
          <FontAwesomeIcon icon={faMap} className="text-6xl text-red-300 mb-4" />
          <p className="text-xl font-semibold italic text-gray-600">No tours available at the moment.</p>
          <p className="text-sm text-gray-400 mt-1">Try adjusting your filters or check back soon.</p>
          <button
            onClick={() => {
              setSelectedDuration('All');
            }}
            className="slowmo-link-hover font-bold mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-full"
          >
            Browse All Tours
          </button>

          <p className="text-sm font-semibold italic text-gray-600 mt-10">
            Or.. custom make your own tour now with us!
          </p>
          <a href="https://wa.me/6281266489200" target="_blank" rel="noopener noreferrer">
            <button className="slowmo-link-hover font-bold mt-3 px-8 py-2 bg-red-400 hover:bg-red-600 text-white text-sm">
              Contact Us Now!
            </button>
          </a>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 [@media(min-width:768px)_and_(max-width:886px)]:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-[40px] justify-items-center">
            {paginatedTours.map((tour, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-[260px] transition hover:scale-[1.02]"
              >
                <img src={tour.image} alt={tour.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-base text-gray-900">
                    {tour.title}{' '}
                    <span className="text-sm text-red-400 font-medium">({tour.duration})</span>
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">Date: {tour.departureDate}</p>
                  <hr className="border-gray-300 my-1" />
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm font-semibold">Rp. {tour.price}</p>
                    <a
                      href="https://wa.me/6282170824534"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="slowmo-link-hover bg-red-400 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
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
        </>
      )}
    </div>
  );
};

export default TourList;

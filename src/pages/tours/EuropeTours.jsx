import React from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../assets/back-arrow.png';
import Footer from "../../components/Footer";
import '../../index.css';

const tours = [
  {
    title: 'Tokyo Explorer',
    departureDate: '2025-06-15',
    price: '12,500,000',
    image: 'https://cdn.pixabay.com/photo/2019/03/30/10/59/tokyo-4093741_1280.jpg',
  },
  {
    title: 'Bali Paradise',
    departureDate: '2025-07-10',
    price: '9,200,000',
    image: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/bali-1993704_1280.jpg',
  },
  {
    title: 'Seoul Highlights',
    departureDate: '2025-08-05',
    price: '11,800,000',
    image: 'https://cdn.pixabay.com/photo/2016/11/18/16/15/seoul-1834263_1280.jpg',
  },
  {
    title: 'Bangkok Adventure',
    departureDate: '2025-09-12',
    price: '10,000,000',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/bangkok-1868450_1280.jpg',
  },
  {
    title: 'Hanoi Heritage',
    departureDate: '2025-10-20',
    price: '9,500,000',
    image: 'https://cdn.pixabay.com/photo/2019/03/22/14/09/hanoi-4072175_1280.jpg',
  },
  {
    title: 'Singapore Skyline',
    departureDate: '2025-11-15',
    price: '13,000,000',
    image: 'https://cdn.pixabay.com/photo/2015/09/18/11/36/singapore-944406_1280.jpg',
  },
  {
    title: 'Kathmandu Trek',
    departureDate: '2025-12-05',
    price: '14,200,000',
    image: 'https://cdn.pixabay.com/photo/2018/03/01/09/39/kathmandu-3198630_1280.jpg',
  },
  {
    title: 'Jaipur Journey',
    departureDate: '2026-01-10',
    price: '10,800,000',
    image: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/jaipur-1993703_1280.jpg',
  },
  {
    title: 'Shanghai Nights',
    departureDate: '2026-02-18',
    price: '12,300,000',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/shanghai-1868451_1280.jpg',
  },
];

const EuropeTours = () => {
  return (
    <>
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8 mt-16 flex flex-col items-center">
      {/* Back Button */}
      <Link to="/" className="text-base lg:text-xl w-full mt-4 ml-0 flex flex-row items-center lg:ml-20 lg:mt-10 group-hover:text-red-600 group-hover:scale-110">
        <img src={backArrow} alt="Back" className="w-6 h-6 hover:scale-110 slowmo-link-hover" />
        <h2 className="text-red-400 font-bold mt-[5px] lg:mt-[3px] ml-2 hover:scale-110 slowmo-link-hover">BACK</h2>
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold text-red-600 text-center mt-10">EUROPE</h1>
      <p className="text-red-400 italic text-center mb-10 mt-3"> (the continent of contrasts)</p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-[260px] transition hover:scale-[1.02]"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900">{tour.title}</h3>
              <p className="text-sm text-gray-500 mb-1">Departure: {tour.departureDate}</p>
              <hr className="border-gray-300 my-1" />
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm font-semibold">Rp. {tour.price}</p>
                <a href="https://wa.me/6282170824534" target="_blank" rel="noopener noreferrer">
                  <button className="slowmo-link-hover bg-red-300 hover:bg-red-400 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    INQUIRE
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default EuropeTours;

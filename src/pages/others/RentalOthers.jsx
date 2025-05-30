import React from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../assets/back-arrow.png';
import Footer from '../../components/Footer';
import avanzaImg from '../../assets/cars-img/avanza.png';
import xl7Img from '../../assets/cars-img/xl7.png';
import vanImg from '../../assets/cars-img/hiace.png';
import '../../index.css';

const rentalData = [
  {
    name: 'Toyota Avanza',
    type: '7-Seat MPV',
    image: avanzaImg,
    cityTour: 700000,
    interland: 900000,
  },
  {
    name: 'Suzuki XL7',
    type: '7-Seat SUV',
    image: xl7Img,
    cityTour: 700000,
    interland: 900000,
  },
  {
    name: 'Hiace',
    type: '12-Seat Van',
    image: vanImg,
    cityTour: 800000,
    interland: 1000000,
  }
];

const RentalOthers = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white px-4 py-10 sm:px-10 md:px-20 lg:px-8 mt-16">
        <Link to="/" className="text-base lg:text-xl w-full mt-4 ml-0 flex flex-row items-center lg:pl-20 lg:mt-10">
          <img src={backArrow} alt="Back" className="w-6 h-6 hover:scale-110 transition-transform" />
          <h2 className="text-red-400 font-bold mt-[5px] lg:mt-[3px] ml-2 hover:scale-110 transition-transform">BACK</h2>
        </Link>

        <h1 className="text-4xl font-bold text-red-600 text-center mt-5 mb-2">RENTAL CARS</h1>
        <p className="text-red-400 italic text-center mb-10">Explore Batam with comfort and style</p>

        {rentalData.map((car, idx) => (
          <div
            key={idx}
            className="bg-white/90 shadow-md border border-gray-200 rounded-xl overflow-hidden flex flex-col lg:flex-row items-center mb-12 max-w-4xl mx-auto"
          >
            {/* Car Image */}
            <div className="w-full lg:w-1/2 bg-red-50 flex justify-center items-center p-0">
              <img
                src={car.image}
                alt={car.name}
                className="object-contain h-[200px] sm:h-[250px] md:h-[300px] transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Car Info */}
            <div className="w-full lg:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-1">{car.name}</h2>
              <p className="text-red-500 italic mb-4">{car.type}</p>

              <div className="flex flex-col max-w-72 sm:flex-row justify-between text-sm mb-4">
                <div className="mb-2 sm:mb-0">
                  <p className="font-medium text-gray-600">City Tour 10 Hours</p>
                  <p className="text-red-600 font-semibold">IDR {car.cityTour.toLocaleString()}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Interland 10 Hours</p>
                  <p className="text-blue-600 font-semibold">IDR {car.interland.toLocaleString()}</p>
                </div>
              </div>

              <a href="https://wa.me/6285224918888" target="_blank" rel="noopener noreferrer">
                <button className="slowmo-link-hover bg-red-400 hover:bg-red-500 text-white px-5 py-1 rounded-full font-medium transition">
                  INQUIRE NOW
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default RentalOthers;

import React from 'react';
import visaPic from  '../assets/others-img/visa2.jpg';
import rentalPic from  '../assets/others-img/rental.jpg';
import Footer from "../components/Footer";
import othersLogo from '../assets/others-img/others.png';
import { Link } from 'react-router-dom';

const packages = [
  {
    region: 'VISA',
    image: visaPic,
    link: "/others/visa",
  },
  {
    region: 'CAR RENTALS',
    image: rentalPic,
    link: "/others/rental",
  }
];

const Tours = () => {
  return (
  <>
    <section className="py-8 px-4 text-center mt-20">
      <div className="flex items-center justify-center mt-8 mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-600 ml-4">OTHER SERVICES</h2>
        <img src={othersLogo} alt="Logo" className="slowmo-link-hover hover:scale-105 w-7 h-7 sm:w-9 sm:h-9 ml-4" />
      </div>

      <p className="span-tour-detail-underlinetext-base sm:text-lg text-gray-600 mt-4 mb-8 text-red-500">
        All in one provider for your travel needs
      </p>

      <div className="flex flex-col items-center gap-12">
        {packages.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="w-full max-w-md sm:max-w-md md:max-w-lg lg:max-w-xl"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={item.image}
                alt={item.region}
                className="w-full h-60 sm:h-72 md:h-80 lg:h-[22rem] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="px-10 rounded-lg absolute bottom-0 align-center justify-center left-0 bg-gray-800 bg-opacity-80 px-5 py-3 text-left">
                <span className="text-yellow-400 font-extrabold text-xl sm:text-2xl lg:text-3xl">{item.region}</span>
                <div className="h-1 w-16 sm:w-20 bg-yellow-400 mt-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Tours;

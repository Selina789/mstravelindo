import React from 'react';
import asiaMain from  '../assets/tours-img/asia-main.jpg';
import americaMain from  '../assets/tours-img/america-main.jpg';
import europeMain from  '../assets/tours-img/europe-main.jpg';
import indonesiaMain from  '../assets/tours-img/indonesia-main.jpg';
import Footer from "../components/Footer";
import Packages from "../components/Packages";
import ToursLanding from "../components/Tours";
import tourLogo from '../assets/tours-landing/tour-logo.jpg';
import { Link } from 'react-router-dom';

const packages = [
  {
    region: 'ASIA',
    image: asiaMain,
    link: "/tours/asia",
  },
  {
    region: 'EUROPE',
    image: europeMain,
    link: "/tours/europe",    
  },
  {
    region: 'AMERICA',
    image: americaMain,
     link: "/tours/america",   
  },
  {
    region: 'INDONESIA',
    image: indonesiaMain,
    link: "/tours/indonesia",    
  },
];

const Tours = () => {
  return (
  <>
    <section className="font-hammersmith py-8 text-center mt-20">
      <div className="flex items-center justify-center mt-8 mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-600 ml-4">PACKAGE TOUR</h2>
        <img src={tourLogo} alt="Logo" className="slowmo-link-hover hover:scale-105 w-10 h-10 sm:w-12 sm:h-12 ml-4" />
      </div>

      <p className="span-tour-detail-underlinetext-base sm:text-lg text-gray-600 mt-4 mb-8 text-red-500">
        A wonderful tour to different sides of the world.
      </p>

      <div className="flex flex-col items-center gap-12 mb-20">
        {packages.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
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
      <Packages></Packages>
      <ToursLanding></ToursLanding>
    </section>
    <Footer />
    </>
  );
};

export default Tours;

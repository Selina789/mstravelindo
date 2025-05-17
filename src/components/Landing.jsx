import React from 'react';
import '../index.css';
import backgroundImage from '../assets/landing/landing.png';

const Landing = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Background Image */}
      <div className="absolute inset-0 bg-black opacity-10"></div> {/* Optional: overlay for better contrast */}

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
        <h1 className="landing-headline text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 mt-0 md:mt-5 pt-10">
          TRAVEL AROUND <br/> THE WORLD
        </h1>
        <p className="landing-headline text-xl sm:text-xl md:text-2xl lg:text-3xl mb-6 font-medium tracking-wide drop-shadow-lg drop-shadow-red-500/50 landing-subline">
          TRIP WITHOUT HASSLE, ONLY WITH MSTRAVELINDO
        </p>
        <button className="slowmo-button-hover font-bold bg-red-400 text-white py-3 px-8 rounded-lg text-lg sm:text-xl md:text-2xl hover:bg-red-600 transition tracking-wider animation">
          PLAN YOUR TRIP
        </button>
      </div>
    </div>
  );
};

export default Landing;

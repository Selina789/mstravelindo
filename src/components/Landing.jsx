import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../index.css';
import backgroundImage1 from '../assets/landing/landing2.png';
import backgroundImage2 from '../assets/landing/landing3.png';
import { Link } from 'react-router-dom';

const images = [backgroundImage2, backgroundImage1];

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      {...swipeHandlers}
      className="relative h-screen bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
        <h1 className="font-lilita landing-headline text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 mt-0 md:mt-5 pt-10 text-center">
          <span className="block">ADVENTURE AWAITS</span>
          <span className="block mt-0 md:mt-6">LET’S GO EXPLORE!</span>
        </h1>

        <p className="font-quicksand landing-headline text-lg sm:text-lg md:text-xl lg:text-2xl mb-6 font-medium tracking-wide drop-shadow-lg landing-subline">
          Pack your bags, chase the sun, and make memories with MSTravelindo 🌞✈️
        </p>

        <Link to='/contacts'>
          <button className="slowmo-button-hover font-bold bg-red-500 text-white py-3 px-8 rounded-lg text-lg sm:text-xl md:text-2xl hover:bg-red-700 transition tracking-wider">
          PLAN YOUR TRIP
          </button>
        </Link>
        
      </div>

      <div
        className="absolute top-1/2 transform left-5 -translate-y-1/2 left-5 text-white text-md md:text-3xl cursor-pointer z-20"
        onClick={goToPrevious}
      >
        ❮
      </div>
      <div
        className="absolute top-1/2 transform right-5 -translate-y-1/2 right-5 text-white text-md md:text-3xl cursor-pointer z-20"
        onClick={goToNext}
      >
        ❯
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              idx === currentIndex ? 'bg-red-400' : 'bg-white/40'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Landing;

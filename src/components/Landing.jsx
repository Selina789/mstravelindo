import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../index.css';
import backgroundImage1 from '../assets/landing/landing2.png';
import backgroundImage2 from '../assets/landing/landing3.png';
// Add more images as needed

const images = [backgroundImage1, backgroundImage2];

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
      {/* Optional: Overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
        <h1 className="landing-headline text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 mt-0 md:mt-5 pt-10">
          TRAVEL AROUND <br /> THE WORLD
        </h1>
        <p className="landing-headline text-xl sm:text-xl md:text-2xl lg:text-3xl mb-6 font-medium tracking-wide drop-shadow-lg landing-subline">
          TRIP WITHOUT HASSLE, ONLY WITH MSTRAVELINDO
        </p>
        <button className="slowmo-button-hover font-bold bg-red-400 text-white py-3 px-8 rounded-lg text-lg sm:text-xl md:text-2xl hover:bg-red-600 transition tracking-wider">
          PLAN YOUR TRIP
        </button>
      </div>

      {/* Left and Right Arrows */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-5 text-white text-3xl cursor-pointer z-20"
        onClick={goToPrevious}
      >
        ❮
      </div>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-5 text-white text-3xl cursor-pointer z-20"
        onClick={goToNext}
      >
        ❯
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
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

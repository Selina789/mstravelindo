import React, { useState, useEffect } from 'react';
import chinaImage from '../assets/tours-landing/china-potrait.jpg';
import parisImage from '../assets/tours-landing/paris-potrait.jpg';
import singaporeImage from '../assets/tours-landing/singapore-potrait.jpg';
import thailandImage from '../assets/tours-landing/thailand-potrait.jpg';
import taiwanImage from '../assets/tours-landing/taiwan-potrait.jpg';
import malaysiaImage from '../assets/tours-landing/malaysia-potrait.jpg';
import baliImage from '../assets/tours-landing/bali-potrait.jpg';
import samosirImage from '../assets/tours-landing/samosir-potrait.jpg';
import koreaImage from '../assets/tours-landing/korea-potrait.jpg';
import tourLogo from '../assets/tours-landing/tour-logo.jpg';
import '../index.css';

const slides = [
  {
    image: chinaImage,
    title: 'Chinatown Tour',
    description: 'Explore the rich cultural heritage of Chinatown!',
  },
  {
    image: parisImage,
    title: 'Paris City Tour',
    description: 'Discover the iconic landmarks of Paris, including the Eiffel Tower!',
  },
  {
    image: singaporeImage,
    title: 'Singapore Garden Tour',
    description: 'Take a stroll through the stunning Gardens by the Bay!',
  },
  {
    image: thailandImage,
    title: 'Thailand Temple Tour',
    description: 'Wander through golden temples and vibrant floating markets in Bangkok!',
  },
  {
    image: taiwanImage,
    title: 'Taiwan Discovery Tour',
    description: 'Explore vibrant streets, tasty snacks, and stunning mountain views!',
  },
  {
    image: malaysiaImage,
    title: 'Malaysia City Lights Tour',
    description: 'Marvel at the Petronas Towers and savor delicious street food in Kuala Lumpur!',
  },
  {
    image: baliImage,
    title: 'Bali Beach Escape',
    description: 'Soak up the sun on Bali’s stunning beaches and discover sacred temples!',
  },
  {
    image: samosirImage,
    title: 'Samosir Lake Getaway',
    description: 'Unwind by the crystal-clear waters of Lake Toba and explore Batak culture!',
  },
  {
    image: koreaImage,
    title: 'Korea Culture & K-Drama Tour',
    description: 'Walk the vibrant streets of Seoul and visit famous K-drama spots!',
  }
];

function Tours() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(3);

  const updateSlidesPerPage = () => {
    if (window.innerWidth >= 1024) {
      setSlidesPerPage(3);
    } else if (window.innerWidth >= 768) {
      setSlidesPerPage(2);
    } else {
      setSlidesPerPage(1);
    }
  };

  useEffect(() => {
    updateSlidesPerPage();
    window.addEventListener('resize', updateSlidesPerPage);
    return () => {
      window.removeEventListener('resize', updateSlidesPerPage);
    };
  }, []);

  const nextSlide = () => {
    if (currentSlide + slidesPerPage < slides.length) {
      setCurrentSlide(currentSlide + slidesPerPage);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide - slidesPerPage >= 0) {
      setCurrentSlide(currentSlide - slidesPerPage);
    } else {
      setCurrentSlide(slides.length - slidesPerPage);
    }
  };

  return (
    <div className="font-hammersmith relative w-full max-w-7xl mx-auto mt-20 mb-20 px-7 sm:px-0">
      <div className="flex items-center sm:justify-start mb-4">
        <div className="w-10 h-[3px] bg-red-600 rounded-xl" />
        <h2 className="text-2xl sm:text-3xl font-bold text-red-600 ml-4">PACKAGE TOUR</h2>
        <img src={tourLogo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 ml-4" />
      </div>

      <p className="text-base sm:text-lg text-gray-600 mt-4 md:ml-12 lg:ml-12 mb-5 text-red-500">
        Take a look at various tour packages that{' '}
        <span className="span-tour-detail-underline">
          <a href="#">we provide</a>
        </span>
      </p>

      <div className="flex items-center justify-center space-x-4 sm:space-x-6">
        <div className="w-[40px] sm:w-[60px]">
          <button
            onClick={prevSlide}
            className="slowmo-link-hover bg-red-500 text-white p-2 sm:p-4 rounded-full opacity-50 hover:opacity-100 transition-opacity"
          >
            &#10094;
          </button>
        </div>

        <div className="relative w-full sm:w-3/4 mt-5 overflow-hidden ">
          <div className="round-div flex transition-transform duration-500 ease-in-out">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative group flex-shrink-0 px-2 mb-4"
                style={{
                  width: `${100 / slidesPerPage}%`,
                  display: index >= currentSlide && index < currentSlide + slidesPerPage ? 'block' : 'none',
                }}
              >
                <a href="#">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[400px] object-cover rounded-lg border-2 border-red-400 p-0 lg:p-1"
                  />
                </a>
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-black bg-opacity-50 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <a href="#">
                    <h3 className="text-base sm:xl md:xl lg:2xl font-bold">{slide.title}</h3>
                  </a>
                  <a href="#">
                    <p className="text-[10px] sm:text-base md:text-base lg:text-sm mt-4">{slide.description}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[40px] sm:w-[60px] text-right">
          <button
            onClick={nextSlide}
            className="slowmo-link-hover bg-red-500 text-white p-2 sm:p-4 rounded-full opacity-50 hover:opacity-100 transition-opacity"
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <div className="w-[40%] sm:w-[20%] bg-gray-200 rounded-full h-1 mt-5">
          <div
            className="bg-red-500 h-1 rounded-full progress-bar"
            style={{
              width: `${((currentSlide + slidesPerPage) / slides.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Tours;

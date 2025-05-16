import React, { useState, useEffect } from 'react';
import chinaImage from '../assets/tours-landing/china-potrait.jpg';
import parisImage from '../assets/tours-landing/paris-potrait.jpg';
import singaporeImage from '../assets/tours-landing/singapore-potrait.jpg';
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
    image: chinaImage,
    title: 'Chinatown Tour',
    description: 'Explore the rich cultural heritage of Chinatown!',
  },
  {
    image: singaporeImage,
    title: 'Singapore Garden Tour',
    description: 'Take a stroll through the stunning Gardens by the Bay!',
  },
  {
    image: chinaImage,
    title: 'Chinatown Tour',
    description: 'Explore the rich cultural heritage of Chinatown!',
  }
];

function Tours() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(3); // Default to 3 for large screens

  // Detect the screen size and update the number of slides per page accordingly
  const updateSlidesPerPage = () => {
    if (window.innerWidth >= 1024) {
      setSlidesPerPage(3); // Large screens (3 images per page)
    } else if (window.innerWidth >= 768) {
      setSlidesPerPage(2); // Medium screens (2 images per page)
    } else {
      setSlidesPerPage(1); // Small screens (1 image per page)
    }
  };

  useEffect(() => {
    // Update slides per page on mount and when the screen is resized
    updateSlidesPerPage();
    window.addEventListener('resize', updateSlidesPerPage);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', updateSlidesPerPage);
    };
  }, []);

  const nextSlide = () => {
    if (currentSlide + slidesPerPage < slides.length) {
      setCurrentSlide(currentSlide + slidesPerPage);
    } else {
      setCurrentSlide(0); // Go back to the first set of slides
    }
  };

  const prevSlide = () => {
    if (currentSlide - slidesPerPage >= 0) {
      setCurrentSlide(currentSlide - slidesPerPage);
    } else {
      setCurrentSlide(slides.length - slidesPerPage); // Go to the last set of slides
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-20 mb-20 sm:ml-10 sm:mr-10">
      <div className="flex items-center sm:justify-start mb-4">
        <div className="w-10 h-[3px] bg-red-600 rounded-xl" /> {/* Left Line */}
        <h2 className="text-2xl sm:text-3xl font-bold text-red-600 ml-4">PACKAGE TOUR</h2> {/* Title with margin */}
        <img src={tourLogo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 ml-4" /> {/* Logo */}
      </div>

      <p className="text-base sm:text-lg text-gray-600 mt-4 ml-12 mb-5 text-red-500">
        Take a look at various tour packages that{' '}
        <span className="span-tour-detail-underline">
          <a href="#">we provide</a>
        </span>
      </p>

      <div className="flex items-center justify-center space-x-4 sm:space-x-6">
        <div className="w-[40px] sm:w-[60px]">
          <button
            onClick={prevSlide}
            className="bg-red-500 text-white p-2 sm:p-4 rounded-full opacity-50 hover:opacity-100 transition-opacity"
          >
            &#10094;
          </button>
        </div>

        <div className="relative overflow-hidden w-full sm:w-3/4 mt-5">
          <div className="flex justify-center transition-transform duration-500 ease-in-out">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative group flex-shrink-0 w-full sm:w-[260px] mx-2 mb-4"
                style={{ display: index >= currentSlide && index < currentSlide + slidesPerPage ? 'block' : 'none' }}
              >
                <a href="#">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg border-2 border-gray-300"
                  />
                </a>
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-black bg-opacity-50 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <a href="#">
                    <h3 className="text-xl font-bold">{slide.title}</h3>
                  </a>
                  <a href="#">
                    <p className="text-sm mt-4">{slide.description}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[40px] sm:w-[60px] text-right">
          <button
            onClick={nextSlide}
            className="bg-red-500 text-white p-2 sm:p-4 rounded-full opacity-50 hover:opacity-100 transition-opacity"
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

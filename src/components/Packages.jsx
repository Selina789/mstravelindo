import React from 'react';
import { motion } from 'framer-motion';

import finlandImage from '../assets/packages-landing/finland.jpg';
import shanghaiImage from '../assets/packages-landing/shanghai.jpg';
import norwayImage from '../assets/packages-landing/norway.jpg';
import beijingImage from '../assets/packages-landing/beijing.jpg';
import thailandImage from '../assets/packages-landing/thailand.jpg';
import parisImage from '../assets/packages-landing/paris.jpg';
import leftLogo from '../assets/packages-landing/left-logo.png';
import rightLogo from '../assets/packages-landing/right-logo.png';

function SpecialOffers() {
  const offers = [
    { image: shanghaiImage, title: 'Shanghai', tours: 38, span: 'lg:col-span-2' },
    { image: finlandImage, title: 'Finland', tours: 32 },
    { image: norwayImage, title: 'Norway', tours: 54 },
    { image: beijingImage, title: 'Beijing', tours: 14, span: 'lg:col-span-2' },
    { image: thailandImage, title: 'Thailand', tours: 9 },
    { image: parisImage, title: 'Paris', tours: 16, span: 'lg:col-span-2' },
  ];

  return (
    <div className="package-bg width-full p-2">
      <div className="max-w-7xl mx-auto mt-8 mb-10 px-4">
        <div className="mb-6 text-center items-center justify-center">
          <div className="font-hammersmith flex justify-center items-center mb-3 text-3xl md:text-4xl lg:text-5xl ">
            <img src={leftLogo} alt="Left image" className="logo-left-right mr-4 sm:mr-3" />
            <h2 className="font-bold offer-title">SPECIAL OFFERS & PROMOS</h2>
            <img src={rightLogo} alt="Right image" className="logo-left-right ml-4 sm:ml-3" />
          </div>
          <p className="font-hammersmith text-lg text-gray-600 mt-0 offer-desc">
            Exclusive promotions and special offers that last for a period of time,
            <span className="block">don't miss out on your dream vacation!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative group col-span-1 sm:col-span-1 ${offer.span || ''}`}
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-[270px] object-cover object-center rounded-lg"
              />

              {/* Hover content (for lg and up) */}
              <div className="
                absolute inset-0 hidden lg:flex items-center justify-center
                bg-black bg-opacity-50 opacity-0 group-hover:opacity-100
                transition-opacity duration-300 rounded-lg
              ">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-semibold">{offer.title}</h3>
                  <p className="text-lg mt-2">{offer.tours} Tours</p>
                </div>
              </div>

              {/* Static visible content for sm and md screens */}
              <div className="
                absolute bottom-0 left-0 z-10
                w-full bg-gradient-to-t bg-black bg-opacity-40 from-black/70 to-transparent
                px-4 py-3
                text-white
                flex flex-col justify-end
                rounded-b-lg
                lg:hidden
              ">
                <h3 className="text-lg font-semibold leading-tight">{offer.title}</h3>
                <p className="text-sm">{offer.tours} Tours</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialOffers;

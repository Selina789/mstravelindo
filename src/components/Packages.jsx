import React from 'react';
import finlandImage from '../assets/packages-landing/finland.jpg';
import shanghaiImage from '../assets/packages-landing/shanghai.jpg';
import norwayImage from '../assets/packages-landing/norway.jpg';
import beijingImage from '../assets/packages-landing/beijing.jpg';
import thailandImage from '../assets/packages-landing/thailand.jpg';
import parisImage from '../assets/packages-landing/paris.jpg';
import leftLogo from '../assets/packages-landing/left-logo.png';
import rightLogo from '../assets/packages-landing/right-logo.png'

function SpecialOffers() {
  return (
    <div className="package-bg width-full p-2">
    <div className="max-w-7xl mx-auto mt-8 mb-10 px-4">
      <div className="mb-6 text-center items-center justify-center">
        <div className="flex justify-center items-center mb-3 text-3xl md:text-4xl lg:text-5xl ">
          <img src={leftLogo} alt="Left image" className="logo-left-right mr-4 sm:mr-3" />
          <h2 className="font-bold offer-title">SPECIAL OFFERS & PROMOS</h2>
          <img src={rightLogo} alt="Right image" className="logo-left-right ml-4 sm:ml-3" />
        </div>
          <p className="text-lg text-gray-600 mt-0 offer-desc">
            Exclusive promotions and special offers that last for a period of time,
            <span className="block">don't miss out on your dream vacation!</span>
          </p>
      </div>


      {/* Adjust the grid layout based on screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Row */}
        <div className="relative group col-span-1 sm:col-span-1 lg:col-span-2 md:ml-1d md:mr-1 sm:ml-1d sm:mr-1">
          <img 
            src={shanghaiImage} 
            alt="Shanghai" 
            className="w-full h-[270px] object-cover object-center rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <div className="text-center text-white">
              <h3 className="text-2xl font-semibold">Shanghai</h3>
              <p className="text-lg mt-2">38 Tours</p>
            </div>
          </div>
        </div>

        <div className="relative group md:ml-1d md:mr-1 sm:ml-1d sm:mr-1">
          <img 
            src={finlandImage} 
            alt="Finland" 
            className="w-full h-[270px] object-cover object-center rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <div className="text-center text-white">
              <h3 className="text-2xl font-semibold">Finland</h3>
              <p className="text-lg mt-2">32 Tours</p>
            </div>
          </div>
        </div>

        <div className="relative group md:ml-1d md:mr-1 sm:ml-1d sm:mr-1">
          <img 
            src={norwayImage} 
            alt="Norway" 
            className="w-full h-[270px] object-cover object-center rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <div className="text-center text-white">
              <h3 className="text-2xl font-semibold">Norway</h3>
              <p className="text-lg mt-2">54 Tours</p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="relative group md:ml-1d md:mr-1 sm:ml-1d sm:mr-1 col-span-1 sm:col-span-1 lg:col-span-2">
          <img 
            src={beijingImage} 
            alt="Beijing" 
            className="w-full h-[270px] object-cover object-center rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <div className="text-center text-white">
              <h3 className="text-2xl font-semibold">Beijing</h3>
              <p className="text-lg mt-2">14 Tours</p>
            </div>
          </div>
        </div>

        <div className="relative group md:ml-1d md:mr-1 sm:ml-1d sm:mr-1 col-span-1 sm:col-span-1 lg:col-span-1">
          <img 
            src={thailandImage} 
            alt="Thailand" 
            className="w-full h-[270px] object-cover object-center rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <div className="text-center text-white">
              <h3 className="text-2xl font-semibold">Thailand</h3>
              <p className="text-lg mt-2">9 Tours</p>
            </div>
          </div>
        </div>

        <div className="relative group md:ml-1d md:mr-1 sm:ml-1d sm:mr-1 col-span-1 sm:col-span-1 lg:col-span-2">
          <img 
            src={parisImage} 
            alt="Paris" 
            className="w-full h-[270px] object-cover object-center rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <div className="text-center text-white">
              <h3 className="text-2xl font-semibold">Paris</h3>
              <p className="text-lg mt-2">16 Tours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SpecialOffers;

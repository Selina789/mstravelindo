import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backArrow from '../../assets/back-arrow.png';
import Footer from '../../components/Footer';
import '../../index.css';

const visaData = [
  {
    country: 'China',
    flag: 'https://flagcdn.com/w320/cn.png',
    types: [
      { label: 'Single (Regular)', price: 1350000 },
      { label: 'Single (Express)', price: 1950000 },
      { label: 'Double (Regular)', price: 1550000 },
      { label: 'Double (Express)', price: 2150000 },
      { label: 'Multiple (6M Regular)', price: 1750000 },
      { label: 'Multiple (6M Express)', price: 2350000 },
      { label: 'Multiple (12M Regular)', price: 2150000 },
      { label: 'Multiple (12M Express)', price: 2750000 },
    ]
  },
  {
    country: 'Japan',
    flag: 'https://flagcdn.com/w320/jp.png',
    types: [{ label: 'Paspor Regular', price: 1100000 }]
  },
  {
    country: 'South Korea',
    flag: 'https://flagcdn.com/w320/kr.png',
    types: [
      { label: 'Single (Regular)', price: 1350000 },
      { label: 'Single (Express)', price: 1850000 },
      { label: 'Double (Regular)', price: 1850000 },
      { label: 'Double (Express)', price: 2450000 },
      { label: 'Multiple (Regular)', price: 2150000 },
      { label: 'Multiple (Express)', price: 2800000 },
    ]
  },
  {
    country: 'Taiwan',
    flag: 'https://flagcdn.com/w320/tw.png',
    types: [
      { label: 'Regular', price: 1250000 },
      { label: 'Express', price: 1650000 },
    ]
  },
  {
    country: 'Australia',
    flag: 'https://flagcdn.com/w320/au.png',
    types: [{ label: 'Tourist', price: 2800000 }]
  },
  {
    country: 'New Zealand',
    flag: 'https://flagcdn.com/w320/nz.png',
    types: [
      { label: 'Main Applicant', price: 4950000 },
      { label: 'Additional', price: 1300000 },
    ]
  },
  {
    country: 'USA',
    flag: 'https://flagcdn.com/w320/us.png',
    types: [{ label: 'Tourist Visa', price: 3800000 }]
  },
  {
    country: 'UK',
    flag: 'https://flagcdn.com/w320/gb.png',
    types: [
      { label: '6 Months', price: 3800000 },
      { label: '2 Years', price: 12800000 },
      { label: '5 Years', price: 22500000 },
      { label: '10 Years', price: 28000000 },
    ]
  },
  {
    country: 'Canada',
    flag: 'https://flagcdn.com/w320/ca.png',
    types: [
      { label: 'Biometric', price: 3100000 },
      { label: 'Non-biometric', price: 2500000 },
    ]
  },
  {
    country: 'Schengen (Europe)',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
    types: [
      { label: 'Switzerland', price: 2800000 },
      { label: 'Netherlands', price: 2800000 },
      { label: 'Denmark', price: 2800000 },
      { label: 'Czech Republic', price: 3000000 },
      { label: 'Germany', price: 3000000 },
      { label: 'Norway', price: 2900000 },
      { label: 'Sweden', price: 2900000 },
      { label: 'Hungary', price: 2700000 },
      { label: 'Greece', price: 3100000 },
      { label: 'Portugal', price: 3000000 },
      { label: 'Croatia', price: 2900000 },
      { label: 'Austria', price: 2700000 },
      { label: 'France', price: 2900000 },
    ]
  },
];

const VisaOthers = () => {
  const [selectedTypes, setSelectedTypes] = useState({});

  useEffect(() => {
    const defaults = {};
    visaData.forEach((visa) => {
      if (visa.types.length > 0) {
        defaults[visa.country] = visa.types[0].label;
      }
    });
    setSelectedTypes(defaults);
  }, []);

  const handleTypeChange = (country, e) => {
    setSelectedTypes({ ...selectedTypes, [country]: e.target.value });
  };

  const getPrice = (country, typeLabel) => {
    const countryData = visaData.find(c => c.country === country);
    const typeData = countryData?.types.find(t => t.label === typeLabel);
    return typeData ? `Rp. ${typeData.price.toLocaleString()}` : '-';
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white px-4 py-10 sm:px-6 lg:px-8 mt-16 flex flex-col items-center justify-center text-center">
        <Link to="/others" className="text-base lg:text-xl w-full mt-4 ml-0 flex flex-row items-center lg:ml-20 lg:mt-10">
          <img src={backArrow} alt="Back" className="w-6 h-6 hover:scale-110 slowmo-link-hover" />
          <h2 className="text-red-400 font-bold mt-[5px] lg:mt-[3px] ml-2 hover:scale-110 slowmo-link-hover">BACK</h2>
        </Link>

        <h1 className="text-4xl font-bold text-red-600 text-center mt-5">VISA SERVICES</h1>
        <p className="text-red-400 italic text-center mb-10 mt-3">Choose country & visa type</p>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 justify-items-center">
            {visaData.map((visa, index) => (
              <div key={index} className="bg-white border border-red-200 rounded-xl shadow-md overflow-hidden w-full max-w-[260px] transition hover:scale-[1.02]">
                <img src={visa.flag} alt={visa.country} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 text-center">{visa.country}</h3>
                  <select
                    className="mt-3 w-full border border-gray-300 rounded px-2 py-1 text-sm"
                    onChange={(e) => handleTypeChange(visa.country, e)}
                    value={selectedTypes[visa.country] || ''}
                  >
                    {visa.types.map((type, i) => (
                      <option key={i} value={type.label}>{type.label}</option>
                    ))}
                  </select>
                  {selectedTypes[visa.country] && (
                    <p className="mt-4 text-base text-red-600 font-bold text-center">
                      {getPrice(visa.country, selectedTypes[visa.country])}
                    </p>
                  )}
                  <a href="https://wa.me/6282170824534" target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 bg-red-400 hover:bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold w-full shadow-sm">
                      INQUIRE
                    </button>
                  </a>
                </div>
              </div>
             ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VisaOthers;

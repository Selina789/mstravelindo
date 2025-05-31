import React from 'react';
import { Link } from 'react-router-dom';
import TourList from '../../components/TourList';
import backArrow from '../../assets/back-arrow.png';
import Footer from "../../components/Footer";
import '../../index.css';

const europeTours = [
  {
    title: 'Aurora Lapland',
    departureDate: 'Nov-Dec 2025',
    duration: '13 Days',
    price: '62.000,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748708998/aurora_vitsvw.jpg',
  },
  {
    title: 'Eastern Europe',
    departureDate: 'Apr–Dec 2025',
    duration: '11 Days',
    price: '30,800,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748712887/poland_srwn0n.jpg',
  },
  {
    title: 'Central Europe',
    departureDate: 'Nov-Dec 2025',
    duration: '11 Days',
    price: '27,500,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748713046/central_e5jexh.jpg',
  },
  {
    title: 'Spain Portugal',
    departureDate: 'Oct-Nov 2025',
    duration: '12 Days',
    price: '49,250,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748713213/spain_m5vsac.jpg',
  },
];

const EuropeTours = () => (
  <>
    {/* Back Button outside layout flow */}
    <div className="relative  mt-10 top-20 pl-5 lg:pl-20">
      <Link
        to="/"
        className="flex items-center text-base lg:text-xl group hover:text-red-600"
      >
        <img
          src={backArrow}
          alt="Back"
          className="w-6 h-6 hover:scale-110 transition-transform duration-200"
        />
        <h2 className="text-red-400 font-bold ml-2 transition-transform duration-200 hover:scale-110">
          BACK
        </h2>
      </Link>
    </div>

    {/* Main Content */}
    <TourList
      title="EUROPE"
      subtitle="(Classic charm meets modern marvels)"
      tours={europeTours}
    />
    <Footer />
  </>
);


export default EuropeTours;
import React from 'react';
import { Link } from 'react-router-dom';
import TourList from '../../components/TourList';
import backArrow from '../../assets/back-arrow.png';
import Footer from "../../components/Footer";
import '../../index.css';

const indonesiaTours = [
  {
    title: '4D3N Danau Toba',
    departureDate: 'Flexible',
    duration: '4 Days',
    price: '5.400,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748704813/samosir_yjejhp.jpg',
  },
  {
    title: '5D4N in Bali',
    departureDate: 'Flexible',
    duration: '5 Days',
    price: '8,200,000',
    image: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/bali-1993704_1280.jpg',
  },
  {
    title: 'Batam Temptation',
    departureDate: 'Flexible',
    duration: '3 Days',
    price: '2,400,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748704803/batam_e2fwkt.jpg',
  },
  {
    title: 'Nipah Staycation',
    departureDate: 'Flexible',
    duration: '1 Day',
    price: '1,980,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748705036/nipah_rtrgzc.jpg',
  },
];

const IndonesiaTours = () => (
  <>
    {/* Back Button outside layout flow */}
    <div className="relative mt-10 top-20 pl-5 lg:pl-20">
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
      title="INDONESIA"
      subtitle="(An island paradise rich in culture and natural beauty)"
      tours={indonesiaTours}
    />
    <Footer />
  </>
);


export default IndonesiaTours;
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
    title: 'Day Trip in Batam',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '1 Days',
    price: '400,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748704803/batam_e2fwkt.jpg',
  },
  {
    title: '2D Free & Ez Batam',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '2 Days',
    price: '850,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748704803/batam_e2fwkt.jpg',
  },
  {
    title: 'Nipah Staycation',
    departureDate: 'Flexible',
    duration: '1 Day',
    price: '1,980,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748705036/nipah_rtrgzc.jpg',
  },
  {
    title: '1D Lagoi - Bintan',
    departureDate: 'Flexible Min. 4 Pax',
    duration: '1 Day',
    price: '400,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748775670/bintan_px0teh.jpg',
  },
  {
    title: '2D Free & Ez Bintan',
    departureDate: 'Flexible Min. 4 Pax',
    duration: '2 Day',
    price: '1,000,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748775670/bintan_px0teh.jpg',
  },
  {
    title: '4D Labuan Bajo',
    departureDate: 'Flexible',
    duration: '2 Day',
    price: '1,000,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748775804/labuan_pkqsan.jpg',
  },
];

const IndonesiaTours = () => (
  <>
    <div className="relative mt-10 top-20 pl-5 lg:pl-20">
      <Link
        to="/tours"
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

    <TourList
      title="INDONESIA"
      subtitle="(An island paradise rich in culture and natural beauty)"
      tours={indonesiaTours}
    />
    <Footer />
  </>
);


export default IndonesiaTours;
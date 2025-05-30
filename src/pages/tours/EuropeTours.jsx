import React from 'react';
import { Link } from 'react-router-dom';
import TourList from '../../components/TourList';
import backArrow from '../../assets/back-arrow.png';
import Footer from "../../components/Footer";
import '../../index.css';

const europeTours = [
  {
    title: 'Korea Seoul-Busan',
    departureDate: '2025-06-15',
    duration: '7 Days',
    price: '12,500,000',
    image: 'https://cdn.pixabay.com/photo/2019/03/30/10/59/tokyo-4093741_1280.jpg',
  },
  {
    title: 'Bali Paradise',
    departureDate: '2025-07-10',
    duration: '5 Days',
    price: '9,200,000',
    image: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/bali-1993704_1280.jpg',
  },
  {
    title: 'Vietnam',
    departureDate: '2025-08-05',
    duration: '6 Days',
    price: '11,800,000',
    image: 'https://cdn.pixabay.com/photo/2016/11/18/16/15/seoul-1834263_1280.jpg',
  },
  {
    title: 'Bangkok Adventure',
    departureDate: '2025-09-12',
    duration: '4 Days',
    price: '10,000,000',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/bangkok-1868450_1280.jpg',
  },
  {
    title: 'Hanoi Heritage',
    departureDate: '2025-10-20',
    duration: '5 Days',
    price: '9,500,000',
    image: 'https://cdn.pixabay.com/photo/2019/03/22/14/09/hanoi-4072175_1280.jpg',
  },
  {
    title: 'Singapore Skyline',
    departureDate: '2025-11-15',
    duration: '3 Days',
    price: '13,000,000',
    image: 'https://cdn.pixabay.com/photo/2015/09/18/11/36/singapore-944406_1280.jpg',
  },
  {
    title: 'Kathmandu Trek',
    departureDate: '2025-12-05',
    duration: '8 Days',
    price: '14,200,000',
    image: 'https://cdn.pixabay.com/photo/2018/03/01/09/39/kathmandu-3198630_1280.jpg',
  },
  {
    title: 'Jaipur Journey',
    departureDate: '2026-01-10',
    duration: '6 Days',
    price: '10,800,000',
    image: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/jaipur-1993703_1280.jpg',
  },
  {
    title: 'Shanghai Nights',
    departureDate: '2026-02-18',
    duration: '5 Days',
    price: '12,300,000',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/shanghai-1868451_1280.jpg',
  },
];

const EuropeTours = () => (
  <>
    {/* Back Button outside layout flow */}
    <div className="relative  mt-10 top-20 left-5 lg:left-20 z-50">
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
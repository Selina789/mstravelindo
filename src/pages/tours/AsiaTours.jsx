import React from 'react';
import { Link } from 'react-router-dom';
import TourList from '../../components/TourList';
import backArrow from '../../assets/back-arrow.png';
import Footer from "../../components/Footer";
import '../../index.css';

const asiaTours = [
  {
    title: 'Taiwan Alishan',
    departureDate: 'Sep-Nov 2025',
    duration: '8 Days',
    price: '15,070,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748713490/taiwan_akdmhh.jpg',
  },
  {
    title: 'Phu Quoc Vietnam',
    departureDate: 'Jun-Oct 2025',
    duration: '5 Days',
    price: '13,800,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748713631/vietnam_lqhczn.jpg',
  },
  {
    title: 'Northern Xinjiang',
    departureDate: '09-21 Sep 2025',
    duration: '13 Days',
    price: '40,450,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748713729/xinjiang_kizbum.jpg',
  },
  {
    title: 'Hainan Sanya',
    departureDate: 'June-Aug 2025',
    duration: '5 Days',
    price: '12,700,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748713806/hainan_v7qs4t.jpg',
  },
  {
    title: 'Busan Seoul',
    departureDate: '22 & 28 June 2025',
    duration: '8 Days',
    price: '19,800,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748714088/busan_q94igs.jpg',
  },
  {
    title: 'Chongqing Tour',
    departureDate: 'June 2025',
    duration: '8 Days',
    price: '20,150,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748713921/chongqing_mvbccx.jpg',
  },
];

const AsiaTours = () => (
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
      title="ASIA"
      subtitle="(Continent of contrasts)"
      tours={asiaTours}
    />
    <Footer />
  </>
);


export default AsiaTours;
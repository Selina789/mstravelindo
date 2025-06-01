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
    title: 'Chongqing - Chengdu',
    departureDate: 'June 2025',
    duration: '8 Days',
    price: '20,150,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748713921/chongqing_mvbccx.jpg',
  },
  {
    title: 'Chongqing - Wulong',
    departureDate: 'July-Sep 2025',
    duration: '5 Days',
    price: '9,850,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748774724/wulong_l96m8m.jpg',
  },
  {
    title: 'Dubai - UAE',
    departureDate: 'May-Oct 2025',
    duration: '6 Days',
    price: '14,100,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748775043/dubai_baezwq.jpg',
  },
  {
    title: 'Hongkong',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '4 Days',
    price: '7,950,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748775421/hongkong_idrark.jpg',
  },
  {
    title: '6D5N Tokyo-Japan',
    departureDate: 'June-Dec 2025',
    duration: '6 Days',
    price: '20,100,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748776121/fuji_vxktjv.jpg',
  },
  {
    title: '1D Malaysia-Johor',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '1 Days',
    price: '1,500,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748776318/malaysia_begg2x.jpg',
  },
  {
    title: '2D1N Free & Ez Johor',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '2 Days',
    price: '1,750,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748776318/malaysia_begg2x.jpg',
  },
  {
    title: '2D Johor + Legoland',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '2 Days',
    price: '2,850,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748776318/malaysia_begg2x.jpg',
  },
  {
    title: '3D2N Malaysia-SG',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '3 Days',
    price: '2,900,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748777364/2country_a9kvux.png',
  },
  {
    title: '4D3N Malaysia-SG',
    departureDate: 'June-Sep 2025',
    duration: '4 Days',
    price: '3,800,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748777364/2country_a9kvux.png',
  },
  {
    title: '6D Tour-3 Country',
    departureDate: 'June-Sep 2025',
    duration: '6 Days',
    price: '7,750,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748777132/3D_ygfwjh.png',
  },
  {
    title: '4D Maafushi-Maldives',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '4 Days',
    price: '9,250,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748777544/maldives_ec0mbf.jpg',
  },
  {
    title: '1D Singapore Trip',
    departureDate: 'Flexible',
    duration: '1 Days',
    price: '1,550,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748777604/singapore_fgwwjh.jpg',
  },
  {
    title: '2D Free & Ez SG',
    departureDate: 'Flexible',
    duration: '2 Days',
    price: '2,100,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748777604/singapore_fgwwjh.jpg',
  },
  {
    title: '3D Free & Ez SG',
    departureDate: 'Flexible',
    duration: '3 Days',
    price: '3,400,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748777604/singapore_fgwwjh.jpg',
  },
  {
    title: '4D Bangkok-Pattaya',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '4 Days',
    price: '2,450,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748776940/thailand_pypywr.jpg',
  },
  {
    title: '4D Phuket-Phiphi',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '4 Days',
    price: '3,500,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748777831/phiphi_rc4gt3.jpg',
  },
  {
    title: '4D Chiang Mai',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '4 Days',
    price: '3,300,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748777939/chiangmai_khj8wa.jpg',
  },
  {
    title: '5D Hanoi-Sapa',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '5 Days',
    price: '11,700,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748778211/hanoi_hnxsxt.jpg',
  },
  {
    title: '4D Danang-Bana Hill',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '4 Days',
    price: '9,000,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748778209/danang_xjqm5j.jpg',
  },
  {
    title: '4D Ho Chi Minh',
    departureDate: 'Flexible Min. 2 Pax',
    duration: '4 Days',
    price: '8,700,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748778246/hochiminh_erwahu.jpg',
  },
  {
    title: '5D Korea',
    departureDate: 'June-Sep 2025',
    duration: '5 Days',
    price: '9,150,000',
    image: 'https://res.cloudinary.com/ddotc6ecd/image/upload/v1748714088/busan_q94igs.jpg',
  },
];

const AsiaTours = () => (
  <>
    {/* Back Button outside layout flow */}
    <div className="relative  mt-10 top-20 pl-5 lg:pl-20">
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
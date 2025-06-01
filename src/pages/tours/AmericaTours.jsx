import React from 'react';
import { Link } from 'react-router-dom';
import TourList from '../../components/TourList';
import backArrow from '../../assets/back-arrow.png';
import Footer from "../../components/Footer";
import '../../index.css';

const americaTours = [];

const AmericaTours = () => (
  <>
    {/* Back Button outside layout flow */}
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

    {/* Main Content */}
    <TourList
      title="AMERICA"
      subtitle="(A vast and diverse adventure)"
      tours={americaTours}
    />
    <Footer />
  </>
);


export default AmericaTours;
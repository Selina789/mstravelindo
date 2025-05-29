import React from 'react';
import '../index.css'; // Create About.css and include glow effect
import Footer from "../components/Footer";
import airplaneIcon from '../assets/about-img/airplane-ticket.png';
import visaIcon from '../assets/about-img/passport.png';
import ticketIcon from '../assets/about-img/tour.png';
import carIcon from '../assets/about-img/sports-car.png';
import hotelIcon from '../assets/about-img/hotel.png';

const About = () => {
  const services = [
    { label: 'PACKAGE TOURS', icon: airplaneIcon },
    { label: 'VISA & DOCUMENTS', icon: visaIcon },
    { label: 'TICKETS', icon: ticketIcon },
    { label: 'RENTAL CARS', icon: carIcon },
    { label: 'HOTEL RESERVATION', icon: hotelIcon },
  ];


  const romans = ['I', 'II', 'III', 'IV'];

  return (
    <>
      <section className="w-full px-4 py-12 max-w-6xl mx-auto mt-32 text-center">
        {/* --- Your existing content unchanged --- */}
        {/* Top Section */}
        <div className="grid md:grid-cols-2 items-center gap-12 mb-16">
          {/* Video Placeholder */}
          <div className="glow-box p-1 rounded-md w-full max-w-[300px] mx-auto md:max-w-[90%]">
            <div className="aspect-video w-full rounded-md overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://player.cloudinary.com/embed/?cloud_name=ddotc6ecd&public_id=kztadaazt7drvefonezs&profile=cld-default&poster_options[public_id]=Untitled_design_2_cqr55m"
                title="MST Tour Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left space-y-4">
            <div className="inline-block bg-white text-rose-800 border-2 border-red-400 font-semibold text-[10px] px-4 py-1 rounded uppercase tracking-wider">
              Contact Us
            </div>
            <h2 className="text-3xl font-extrabold text-red-400 mb-2 mt-4">
              MST TOUR & TRAVEL BATAM
            </h2>
            <p className="text-lg text-gray-500 font-semibold tracking-wide mb-0">
              TRUSTED SERVICE SINCE 2019
            </p>
            <hr className="mt-0 mb-1 border-t border-red-500 border-2 w-28 mx-auto md:mx-0" />
            <p className="text-sm text-gray-700 mb-4 leading-[1.7] text-justify">
              Tour & travel agent that provides airplane and ferry tickets, tour packages for domestic 
              and international travel, hotel reservations, and travel document processing services.
            </p>
            <a href="https://wa.me/6282170824534" target="_blank" rel="noopener noreferrer">
              <button className="mt-2 slowmo-link-hover font-bold bg-red-400 hover:bg-red-600 text-white text-sm py-2 px-4 rounded">
                Travel With Us
              </button>
            </a>
          </div>
        </div>

        <div className="text-center mb-6 mt-20">
          <span className="bg-red-400 text-white px-7 py-2 text-sm font-semibold rounded mt-20">
            OUR SERVICES
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-box bg-white rounded-xl p-6 shadow-md flex flex-col items-center justify-center text-center transition hover:scale-105 hover:shadow-2xl"
            >
              <img src={service.icon} alt={service.label} className="w-12 h-12 mb-4 object-contain" />
              <p className="text-red-400 text-base font-bold">{service.label}</p>
            </div>
          ))}
        </div>

        {/* Vision & Mission Section */}
        <div className="mt-24 px-4 max-w-6xl mx-auto text-center mb-10">
          <div className="relative">
            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full pt-12">
              <div className="w-1 h-full bg-rose-300 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision Column */}
              <div className="space-y-6 text-center">
                <h3 className="text-3xl mb-10 font-bold text-red-800">VISION</h3>
                {romans.map((num, i) => (
                  <div key={i} className="flex items-center justify-center gap-4">
                    <span className="w-12 h-12 hover:bg-red-400 hover:text-white slowmo-link-hover flex items-center justify-center border-2 border-rose-500 text-rose-500 rounded-full font-semibold">
                      {num}
                    </span>
                    <div className="bg-red-400 text-white rounded-lg px-6 py-4">
                      Lorem ipsum dolor sit amet
                    </div>
                  </div>
                ))}
              </div>

              {/* Mission Column */}
              <div className="space-y-6 text-center">
                <h3 className="text-3xl mb-10 font-bold text-red-800">MISSION</h3>
                {romans.map((num, i) => (
                  <div key={i} className="flex items-center justify-center gap-4">
                    <div className="bg-red-400 text-white rounded-lg px-6 py-4">
                      Lorem ipsum dolor sit amet
                    </div>
                    <span className="w-12 h-12 hover:bg-red-400 hover:text-white slowmo-link-hover flex items-center justify-center border-2 border-rose-500 text-rose-500 rounded-full font-semibold">
                      {num}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer goes here, full width */}
      <Footer />
    </>
  );
};

export default About;

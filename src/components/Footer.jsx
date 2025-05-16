import React from 'react';
import planeLogo from '../assets/footer/black-plane.png';
import mailLogo from '../assets/footer/mail.png';
import messengerLogo from '../assets/footer/messenger.png';
import pinLogo from '../assets/footer/pin.png';
import telephoneLogo from '../assets/footer/telephone.png';

const Footer = () => {
  return (
    <div className="bg-red-400 py-12 text-white mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 p-10 lg:pl-20">
          {/* Contact Us Section */}
          <div className="flex flex-col items-start lg:w-1/3">
            <h4 className="landing-headline text-xl font-bold mb-8 lg:underline md:underline">CONTACT US</h4>
            <ul className="space-y-6">
              <li className="flex items-center mb-2">
                <img src={pinLogo} alt="Location" className="w-6 h-6 mr-2" />
                Komplek Nagoya Newton Blok S No. 5
              </li>
              <li className="flex items-center mb-2">
                <img src={mailLogo} alt="Email" className="w-6 h-6 mr-2" />
                mstreservasi@gmail.com
              </li>
              <li className="flex items-center mb-2">
                <img src={telephoneLogo} alt="Phone" className="w-6 h-6 mr-2" />
                +62821-7082-4534 (Reservasi)
              </li>
            </ul>
          </div>

        <div className="lg:hidden md:block w-full border-t mb-10 sm:block"></div>

          {/* Explore Section */}
          <div className="flex flex-col items-start lg:w-1/3 lg:pl-40 sm:pl-0">
            <h4 className="landing-headline text-2xl font-bold mb-4 lg:underline md:underline">EXPLORE</h4>
            <ul className="flex flex-col gap-4 mt-3">
              <a href="#" className="flex items-center mb-2">
                <span className="explore-link">Destinations</span>
              </a>
              <a href="#" className="flex items-center mb-2">
                <span className="explore-link">Tours</span>
              </a>
              <a href="#" className="flex items-center mb-2">
                <span className="explore-link">Tickets</span>
              </a>
              <a href="#" className="flex items-center mb-2">
                <span className="explore-link">Promotions</span>
              </a>
              <a href="#" className="flex items-center mb-2">
                <span className="explore-link">Rentals</span>
              </a>
            </ul>
          </div>

          <div className="lg:hidden md:block w-full border-t mb-10 sm:block"></div>

          {/* Let's Travel Together Section */}
          <div className="flex flex-col items-start lg:w-1/3 text-left lg:pl-20 sm:pl-0">
            <h4 className="block text-2xl font-semibold mb-4 tracking-wider">Let's Travel 
              <span className="flex flex-row items-center tracking-wider text-2xl"> Together
                <img src={planeLogo} alt="Contact Us" className="w-6 h-6 mr-2 ml-2 -rotate-45" />
              </span>
            </h4>
            <p className="mb-4 flex flex-col gap-1">Got questions or travel dreams to share?
              <span>Reach out and let’s plan something magical </span>
              <span>together.</span>
            </p>
            <button className="slowmo-button-hover flex items-center justify-center bg-white text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-600 transition tracking-wider animation">
              <img src={messengerLogo} alt="Contact Us" className="w-5 h-5 mr-2" />
              <p className="testimonials-text pt-1">Contact Us</p>
            </button>
          </div>
        </div>
      </div>

        {/* Footer Copyright */}
      <div className="w-full text-center mt-10">
        <div className="w-full border-t mb-10"></div>
          <p className="text-base flex flex-col lg:text-lg md:text-lg ">MSTravelindo
            <span>Copyright @2025. All rights reserved.</span>
          </p>
        </div>
      </div>

  );
};

export default Footer;

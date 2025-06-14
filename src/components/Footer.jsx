import React from 'react';
import planeLogo from '../assets/footer/black-plane.png';
import mailLogo from '../assets/footer/mail.png';
import messengerLogo from '../assets/footer/messenger2.png';
import pinLogo from '../assets/footer/pin.png';
import telephoneLogo from '../assets/footer/telephone.png';

const Footer = () => {
  return (
    <div className="font-hammersmith bg-red-500 py-10 text-white mt-20 overflow-x-hidden">
      <div className="container mx-auto px-3">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 p-0 pl-5 pr-2 lg:space-y-0 md:px-10 md:py-1 lg:pl-20">
          <div className="flex flex-col items-start lg:w-1/3">
            <h4 className="footer-headline text-xl font-bold mb-5 md:mb-8 lg:underline md:underline">CONTACT US</h4>
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

        <div className="lg:hidden md:block w-full border-t mb-5 md:mb-10 sm:block"></div>
          <div className="footer-second-column flex flex-col items-start lg:w-1/3 lg-mid:w-2/3 lg:pl-40 sm:pl-0">
            <h4 className="footer-headline text-2xl font-bold mb-2 md:mb-4 lg:underline md:underline">EXPLORE</h4>
            <ul className="flex flex-col gap-2 md:gap-4 mt-3">
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

          <div className="flex flex-col items-start lg:w-1/3 lg-mid:w-2/3 text-left lg:pl-20 sm:pl-0">
            <h4 className="block text-2xl font-semibold mb-4 tracking-wider">Let's Travel 
              <span className="flex flex-row items-center tracking-wider text-2xl"> Together
                <img src={planeLogo} alt="Contact Us" className="w-6 h-6 mr-2 ml-2 -rotate-45" />
              </span>
            </h4>
            <p className="w-[80%] mb-4 flex flex-col gap-1 tracking-wide">Got questions or travel dreams to share? Reach out and let’s plan something magical together.
            </p>
            <a href="https://wa.me/6282170824534" target="_blank" rel="noopener noreferrer" className="slowmo-button-hover flex items-center justify-center bg-white text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition tracking-wider animation">
              <img src={messengerLogo} alt="Contact Us" className="w-5 h-5 mr-2" />
              <p className="text-red-500 pt-1">Contact Us</p>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full text-center mt-8">
        <div className="w-full border-t mb-8"></div>
          <p className="text-base flex flex-col lg:text-lg md:text-lg ">MSTravelindo
            <span>Copyright @2025. All rights reserved.</span>
          </p>
        </div>
      </div>

  );
};

export default Footer;

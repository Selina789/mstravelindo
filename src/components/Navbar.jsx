import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../index.css';
import mstLogo from '../assets/logo.png';
import mstLogo2 from '../assets/logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";
  const isNotLanding = location.pathname !== "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<nav className={`fixed top-0 left-0 w-full z-20 p-6 transition-colors duration-500 
  ${isLanding 
    ? (scrolled ? 'bg-red-400 bg-opacity-100' : 'bg-transparent') 
    : 'bg-red-400'}`}>

      <div className="hidden lg:flex md:flex text-custom-navbar max-w-screen-xl mx-auto items-center justify-between space-x-6">
        <Link to="/"><img src={mstLogo2} className="mstLogo h-7 space-y-auto w-auto object-contain" alt="MST Logo" /></Link>

        <Link to="/" className={`slowmo-link-hover hover-outline-rose font-bold transition text-base sm:text-xs md:text-ms lg:text-lg ${isLanding ? 'text-white' : 'hover-outline-rose-notlanding'}`}>HOME</Link>
        <Link to="/about" className={`slowmo-link-hover hover-outline-rose font-bold transition text-base sm:text-xs md:text-ms lg:text-lg ${isLanding ? 'text-white' : 'hover-outline-rose-notlanding'}`}>ABOUT</Link>

        <div className="dropdown relative">
          <Link to="/tours" className={`navbar-button slowmo-link-hover hover-outline-rose font-bold transition text-base sm:text-xs md:text-ms lg:text-lg 
            ${isLanding ? 'text-white' : 'hover-outline-rose-notlanding'}`}>
            TOURS <span className="caret md:text-xs lg:text-base">▼</span>
          </Link>
          <div className="navbar-dropdown absolute bg-white text-black shadow-lg rounded-md mt-3 w-40">
            <Link to="/tours/asia" className="block px-4 py-2 font-bold hover:bg-gray-100">ASIA</Link>
            <Link to="/tours/europe" className="block px-4 py-2 font-bold hover:bg-gray-100">EUROPE</Link>
            <Link to="/tours/america" className="block px-4 py-2 font-bold hover:bg-gray-100">AMERICA</Link>
            <Link to="/tours/indonesia" className="block px-4 py-2 font-bold hover:bg-gray-100">INDONESIA</Link>
          </div>
        </div>

        <div className="dropdown relative">
          <Link to="/tickets" className={`navbar-button slowmo-link-hover hover-outline-rose font-bold transition text-base sm:text-xs md:text-ms lg:text-lg ${isLanding ? 'text-white' : 'hover-outline-rose-notlanding'}`}>
            TICKETS <span className="caret md:text-xs lg:text-base">▼</span>
          </Link>
          <div className="navbar-dropdown absolute bg-white text-black shadow-lg rounded-md mt-3 w-40">
            <Link to="/tickets/ferry" className="block px-4 py-2 font-bold hover:bg-gray-100">FERRY</Link>
            <Link to="/tickets/plane" className="block px-4 py-2 font-bold hover:bg-gray-100">PESAWAT</Link>
          </div>
        </div>

        <div className="dropdown relative">
          <Link to="/others" className={`navbar-button slowmo-link-hover hover-outline-rose font-bold transition text-base sm:text-xs md:text-ms lg:text-lg ${isLanding ? 'text-white' : 'hover-outline-rose-notlanding'}`}>
            OTHERS <span className="caret md:text-xs lg:text-base">▼</span>
          </Link>
          <div className="navbar-dropdown absolute bg-white text-black shadow-lg rounded-md mt-3 w-40">
            <Link to="/others/visa" className="block px-4 py-2 font-bold hover:bg-gray-100">VISA</Link>
            <Link to="/others/vehicles" className="block px-4 py-2 font-bold hover:bg-gray-100">KENDARAAN</Link>
          </div>
        </div>

        <a href="https://wa.me/6282170824534" target="_blank" rel="noopener noreferrer"
          className={`slowmo-button-hover font-bold py-3 px-6 text-base transition tracking-wide animation sm:text-xs md:text-ms lg:text-lg md:px-4 md:py-2
            ${isNotLanding ? 'bg-white text-rose-500 hover:bg-red-600 hover:text-white'
            : (scrolled ? 'bg-white text-rose-500 hover:bg-red-600 hover:text-white': 'bg-red-400 text-white hover:bg-red-600')}`}>
          CONTACT US
        </a>
      </div>

      {/* Mobile Navbar */}
      <div className={`hamburger-link lg:hidden md:hidden transition-all duration-[1200ms] ease-in-out absolute top-20 left-0 w-full bg-blue-600 text-white p-6 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex justify-end h-3">
          <button className="text-white font-bold text-2xl" onClick={toggleMenu}>&times;</button>
        </div>
          <Link to="/" className="block py-2 text-lg font-bold">HOME</Link>
          <Link to="/about" className="block py-2 text-lg font-bold">ABOUT</Link>
          <Link to="/tours" className="block py-2 text-lg font-bold">TOURS</Link>
          <Link to="/tickets" className="block py-2 text-lg font-bold">TICKETS</Link>
          <Link to="/others" className="block py-2 text-lg font-bold">RENTAL</Link>
          <div className="flex justify-end pb-5">
            <a href="https://wa.me/6282170824534" target="_blank" rel="noopener noreferrer" className="px-4 bg-red-600 block py-2 text-lg text-white font-bold hover:bg-red-400">
              CONTACT US
            </a>
          </div>
        </div>

      {/* Hamburger Button */}
      <div className="flex justify-between align-center items-center">
        <Link to="/"><img src={mstLogo2} className="lg:hidden md:hidden h-6 w-auto object-contain space-y-auto" alt="MST Logo" /></Link>
        <div className="hamburger-menu lg:hidden md:hidden flex flex-col space-y-2 cursor-pointer" onClick={toggleMenu}>
          <div className={`w-8 h-1 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-x-1.0 translate-y-3' : ''}`}></div>
          <div className={`w-8 h-1 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-8 h-1 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-3' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

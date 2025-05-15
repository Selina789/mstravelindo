import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const navbar = document.querySelector("nav");

    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 p-6">
      <div className="hidden lg:flex md:flex text-custom-navbar max-w-screen-xl mx-auto items-center justify-between space-x-6">

        <a href="#" className="slowmo-link-hover hover-outline-rose text-white font-bold transition text-base sm:text-lg md:text-lg lg:text-1xl">HOME</a>
        <a href="#" className="slowmo-link-hover hover-outline-rose text-white font-bold transition text-base sm:text-lg md:text-lg lg:text-1xl">ABOUT</a>
        <div className="dropdown relative">
          <button className="navbar-button slowmo-link-hover hover-outline-rose text-white font-bold transition text-base sm:text-lg md:text-lg lg:text-1l">
            TOURS <span className="caret">▼</span>
          </button>
          <div className="navbar-dropdown absolute bg-white text-black shadow-lg rounded-md mt-2 w-40">
            <a href="#" className="block px-4 py-2 font-bold hover:bg-gray-100">ASIA</a>
            <a href="#" className="block px-4 py-2 font-bold hover:bg-gray-100">EUROPE</a>
            <a href="#" className="block px-4 py-2 font-bold hover:bg-gray-100">AMERICA</a>
            <a href="#" className="block px-4 py-2 font-bold hover:bg-gray-100">INDONESIA</a>
          </div>
        </div>

        {/* Tickets Dropdown */}
        <div className="dropdown relative">
          <button className="navbar-button slowmo-link-hover hover-outline-rose text-white font-bold transition text-base sm:text-lg md:text-lg lg:text-1xl">
            TICKETS <span className="caret">▼</span>
          </button>
          <div className="navbar-dropdown absolute bg-white text-black shadow-lg rounded-md mt-2 w-40">
            <a href="#" className="block px-4 py-2 font-bold hover:bg-gray-100">FERRY</a>
            <a href="#" className="block px-4 py-2 font-bold hover:bg-gray-100">PESAWAT</a>
            <a href="#" className="block px-4 py-2 font-bold hover:bg-gray-100">PELNI</a>
          </div>
        </div>

        {/* Rental Dropdown */}
        <div className="dropdown relative">
          <button className="navbar-button slowmo-link-hover hover-outline-rose text-white font-bold transition text-base sm:text-lg md:text-lg lg:text-1xl">
            OTHERS <span className="caret">▼</span>
          </button>

          <div className="navbar-dropdown absolute bg-white text-black shadow-lg rounded-md mt-2 w-40">
            <a href="#" className="block px-4 py-2 font-bold hover:bg-gray-100">VISA</a>
            <a href="#" className="block px-4 py-2 font-bold hover:bg-gray-100">VEHICLES</a>
          </div>
        </div>

        {/* Contact Us Button */}
        <a href="#" className="slowmo-button-hover font-bold bg-red-400 text-white py-3 px-8 text-2xl hover:bg-red-600 transition tracking-wider animation md:text-lg md:px-4 md:py-2">
          CONTACT US
        </a>
      </div>

      {/* Mobile Navbar (Hamburger menu) */}
      <div className={`hamburger-link lg:hidden md:hidden transition-all duration-[1200ms] ease-in-out absolute top-20 left-0 w-full bg-blue-600 text-white p-6 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex justify-end h-3">
          <button className="text-white font-bold text-2xl" onClick={toggleMenu}>
            &times;
          </button>
        </div>
        <a href="#" className="block py-2 text-lg font-bold relative before:absolute before:w-0 before:h-1 before:bg-white before:transition-all before:duration-500 hover:before:w-full">HOME</a>
        <a href="#" className="block py-2 text-lg font-bold relative before:absolute before:w-0 before:h-1 before:bg-white before:transition-all before:duration-500 hover:before:w-full">ABOUT</a>
        <a href="#" className="block py-2 text-lg font-bold relative before:absolute before:w-0 before:h-1 before:bg-white before:transition-all before:duration-500 hover:before:w-full">TOURS</a>
        <a href="#" className="block py-2 text-lg font-bold relative before:absolute before:w-0 before:h-1 before:bg-white before:transition-all before:duration-500 hover:before:w-full">TICKETS</a>
        <a href="#" className="block py-2 text-lg font-bold relative before:absolute before:w-0 before:h-1 before:bg-white before:transition-all before:duration-500 hover:before:w-full">RENTAL</a>
        <a href="#" className="block py-2 text-lg font-bold relative before:absolute before:w-0 before:h-1 before:bg-white before:transition-all before:duration-500 hover:before:w-full">CONTACT US</a>
      </div>

      {/* Hamburger Menu (Button for small screen) */}
      <div className="hamburger-menu lg:hidden md:hidden flex flex-col space-y-2 cursor-pointer" onClick={toggleMenu}>
        <div className={`w-8 h-1 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-x-1.0 translate-y-3' : ''}`}></div>
        <div className={`w-8 h-1 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`w-8 h-1 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-3' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;

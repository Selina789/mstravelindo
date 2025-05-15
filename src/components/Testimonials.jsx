import React, { useState, useEffect, useRef } from 'react';
import speechBubble from '../assets/testimonials-landing/speech-bubble.png';
import starIcon from '../assets/testimonials-landing/star.png';
import usersIcon from '../assets/testimonials-landing/users.png';
import globeIcon from '../assets/testimonials-landing/globe.png';
import customerService from '../assets/testimonials-landing/customer-service.png';

const Testimonials = () => {
  const [destinations, setDestinations] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [providedServices, setProvidedServices] = useState(0);
  const [transactionsCompleted, setTransactionsCompleted] = useState(0);

  const sectionRef = useRef(null);

  const increment = (start, end, setter) => {
    const incrementStep = end / 100;
    let current = start;
    const interval = setInterval(() => {
      if (current < end) {
        current += incrementStep;
        setter(Math.floor(current));
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust the speed here
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          increment(0, 20, setDestinations);
          increment(0, 99, setHappyCustomers);
          increment(0, 10, setProvidedServices);
          increment(0, 1000, setTransactionsCompleted);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Section Title */}
      <div className="mb-20 mt-10">
        <div className="text-center mb-12 flex items-center justify-center align-center space-x-4">
          <h2 className="text-2xl font-semibold testimonials-text mb-3 lg:text-3xl md:text-3xl">What Our Customers Say</h2>
          <img src={speechBubble} className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10" alt="Speech Bubble" />
        </div>

        {/* Testimonials Grid with Centered Text */}
        <div className="flex flex-wrap justify-center gap-20 mb-14">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center flex flex-col justify-between">
            <p className="text-lg text-gray-700 mb-4 italic">"Absolutely unforgettable experience! The views, the food, the people – 10/10 would go again!"</p>
            <p className="testimonials-text font-semibold text-lg">Lucy</p>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center flex flex-col justify-between">
            <p className="text-lg text-gray-700 mb-4 italic">"I loved every moment! Booking was easy and the local guides were so friendly and fun!"</p>
            <p className="testimonials-text font-semibold text-lg">Catherine</p>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center flex flex-col justify-between">
            <p className="text-lg text-gray-700 mb-4 italic">"Best vacation I’ve ever had. Everything was perfectly organized. Stress-free and magical."</p>
            <p className="testimonials-text font-semibold text-lg">Davin</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section with Pink Background */}
      <div className="bg-pink-50 w-full py-12 mb-10" ref={sectionRef}>
        <h3 className="text-3xl font-semibold text-center mb-10 testimonials-text">Why Choose Us? <span role="img" aria-label="Globe">🌍</span></h3>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:space-x-20 mt-20 mb-10"> {/* Adjusted responsive flex layout */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img src={globeIcon} alt="Destinations" className="w-12 h-12 mb-4 object-contain" />
            <span className="text-2xl font-semibold">{destinations}+</span>
            <p className="ml-2 text-gray-600">Destinations</p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img src={usersIcon} alt="Happy Customers" className="w-12 h-12 mb-4 object-contain" />
            <span className="text-2xl font-semibold">{happyCustomers}%</span>
            <p className="ml-2 text-gray-600">Happy Customers</p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img src={customerService} alt="Provided Services" className="w-12 h-12 mb-4 object-contain" />
            <span className="text-2xl font-semibold">{providedServices}</span>
            <p className="ml-2 text-gray-600">Provided Services</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={starIcon} alt="Transactions Completed" className="w-12 h-12 mb-4 object-contain" />
            <span className="text-2xl font-semibold">{transactionsCompleted}+</span>
            <p className="ml-2 text-gray-600">Transactions Completed</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Testimonials;
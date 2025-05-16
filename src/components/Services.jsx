import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import carRental from "../assets/logo-services/car-rental.png";
import hotelLogo from "../assets/logo-services/hotel.png";
import documentsLogo from "../assets/logo-services/international-passport.png";
import packageTour from "../assets/logo-services/itinerary.png";
import ticketLogo from "../assets/logo-services/ticket.png";

const servicesData = [
  {
    img: ticketLogo,
    title: "Tickets",
    description: "Book ferry/airplane tickets for your trip.",
  },
  {
    img: packageTour,
    title: "Tour Packages",
    description: "Explore our exciting tour packages.",
  },
  {
    img: carRental,
    title: "Car Rental",
    description: "Rent a car for your travels.",
  },
  {
    img: hotelLogo,
    title: "Hotel Booking",
    description: "Find the best hotels for your stay.",
  },
  {
    img: documentsLogo,
    title: "Travel Documents",
    description: "Documents prepared for your travel convenience.",
  },
];

const CARD_WIDTH = 256 + 24; // 256 = w-60 + px, 24 = gap-6

function App() {
  const [items, setItems] = useState(servicesData); // Track the items
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      trackRef.current.style.transition = "transform 0.6s ease-in-out";
      trackRef.current.style.transform = `translateX(-${CARD_WIDTH}px)`;
      setTimeout(() => {
        trackRef.current.style.transition = "none";
        const updatedItems = [...items];
        const first = updatedItems.shift();
        updatedItems.push(first);
        setItems(updatedItems);
        trackRef.current.style.transform = "translateX(0)";
      }, 600);
    }, 2500); // Every 2.5s
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="container mx-auto text-center my-12 mt-20 mb-20">
      <h1 className="text-4xl font-bold text-red-500 mb-7">OUR SERVICES</h1>
      <p className="text-lg text-gray-700 mb-6">
        Various services to make your travelling life easy and happier, don't miss out on your trip!
      </p>

      {/* Container */}
      <div className="w-full overflow-hidden flex justify-center lg:pl-20 md:pl-0 pr-auto pb-5 mb-20 mt-20">
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{ width: `${CARD_WIDTH * items.length}px` }}
        >
          {/* Render the first 5 items */}
          {items.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg w-60 py-6 px-4 flex-shrink-0 flex flex-col items-center"
            >
              <img src={service.img} alt={service.title} className="w-24 h-24 object-contain mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mt-2 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

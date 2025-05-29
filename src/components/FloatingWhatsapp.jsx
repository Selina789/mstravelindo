import { useState } from 'react';
import whatsappIcon from '../assets/whatsapp-icon.png';

const admins = [
  { name: 'Admin 1', number: '6281234567890' },
  { name: 'Admin 2', number: '6289876543210' },
  { name: 'Admin 3', number: '6281112223334' },
];

const FloatingWhatsapp = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-0 right-2 md:bottom-6 md:right-6 z-50 flex flex-col items-center">
      {/* Dropdown with slower slide-up animation */}
      <div
        className={`flex flex-col font-bold items-center space-y-4 mb-4 mr-2 transition-all duration-700 ease-out ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        {admins.map((admin, idx) => (
          <a
            key={idx}
            href={`https://wa.me/${admin.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:bg-red-600 transition-colors"
          >
            {admin.name}
          </a>
        ))}
      </div>

      {/* Image-only Floating Button */}
      <button onClick={() => setOpen(!open)} className="p-0 m-0 bg-transparent border-none">
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-[150px] h-[150px] cursor-pointer hover:scale-110 transition-transform duration-200"
        />
      </button>
    </div>
  );
};

export default FloatingWhatsapp;

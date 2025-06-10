import { useState } from 'react';
import whatsappIcon from '../assets/whatsapp-icon.png';

const admins = [
  { name: 'Admin', number: '6282170824534' },
  { name: 'Yenny', number: '6281266489200' },
  { name: 'Ependi', number: '6285224918888' },
];

const FloatingWhatsapp = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-0 right-2 md:bottom-3 md:right-6 z-[9999] flex flex-col items-center">
      <div
        className={`
          flex flex-col font-bold items-center space-y-4 mb-4 mr-2
          transition-all duration-700 ease-out
          ${open ? 'opacity-100 translate-y-0 pointer-events-auto relative' : 'opacity-0 translate-y-6 pointer-events-none absolute h-0 overflow-hidden'}
        `}
        style={{ minWidth: 'max-content' }}
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

      {/* Floating WhatsApp Button */}
      <button onClick={() => setOpen(!open)} className="p-0 m-0 bg-transparent border-none">
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-[130px] h-[130px] md:w-[150px] md:h-[150px] cursor-pointer hover:scale-110 transition-transform duration-200"
        />
      </button>
    </div>
  );
};

export default FloatingWhatsapp;
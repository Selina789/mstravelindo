// src/pages/ContactPage.jsx
import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
  <>
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-6 text-center mt-[100px] text-red-600">
      {/* Company Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3">MSTravelindo</h1>
      <a href="" className="font-bold text-lg hover:text-red-800 slowmo-link-hover explore-link">(PT. Mitra Sukses Travelindo)</a>

      <hr className="mt-8 border-red-600 w-full md:w-[350px] mx-auto" />

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-6 drop-shadow-md">Connect with us</h2>
        <div className="flex justify-center gap-10 text-5xl">
          <a
            href="https://instagram.com/mstravelindo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 slowmo-link-hover text-red-500 hover:text-red-700 drop-shadow-[0_0_1px_rgba(255,129,129,0.8)]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/mstbatam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 slowmo-link-hover text-red-500 hover:text-red-700 drop-shadow-[0_0_1px_rgba(255,129,129,0.8)]"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/6282170824534"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 slowmo-link-hover text-red-500 hover:text-red-700 drop-shadow-[0_0_1px_rgba(255,129,129,0.8)]"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <hr className="mt-10 border-red-600 w-full md:w-[350px] mx-auto" />
      
      {/* Address */}
      <p className="block md:flex lg:flex justify-center w-fit text-center mx-auto gap-3 text-lg mt-8 mb-8 ">
        <FaMapMarkerAlt className="mb-2 md:mb-0 text-red-600 text-2xl drop-shadow-md mx-auto" />
        <a href="" className="hover:text-red-800 slowmo-link-hover">Komplek Nagoya Newton Blok S No 5 - Batam</a>
      </p>

      {/* Google Map Embed */}
      <div className="slowmo-link-hover glow-box p-1 rounded-md mt-6 w-full md:w-[400px] mx-auto rounded-lg overflow-hidden shadow-md">
        <iframe
          title="MSTravelindo Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31912.440061644204!2d103.99923840403078!3d1.1207770275809732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98f9110af1ac9%3A0xfb4e7e4d5e0bf20b!2sPT.MITRA%20SUKSES%20TRAVELINDO!5e0!3m2!1sid!2sid!4v1748539096928!5m2!1sid!2sid"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="space-y-6 text-xl font-medium mt-10">
        <p className="flex justify-center items-center gap-3">
          <FaEnvelope className="text-red-600 text-3xl drop-shadow-md" />
          <a href="mailto:mstreservasi@gmail.com" className="explore-link">mstreservasi@gmail.com</a>
        </p>
      <p className="flex justify-center items-center gap-3">
          <FaPhone className="text-red-600 text-3xl drop-shadow-md" />
          <a href="tel:+6282170824534" className="explore-link">+62821-7082-4534</a>
        </p>
      </div>

      <hr className="mt-10 border-red-600 w-full md:w-[350px] mx-auto mb-0" />
    </div>
    <Footer />
  </>
  );
};

export default ContactPage;

import React from "react";
import { useNavigate } from "react-router-dom"; 
import ValuesSection from "./ValuesSection";
import { FaStore, FaPhone, FaEnvelope } from "react-icons/fa";
import sliderImage from '../assets/slider1.svg';

const ContactUsPage: React.FC = () => {
  const navigate = useNavigate(); 

  const handleShopNowClick = () => {
    navigate("/jewelry"); 
  };

  return (
    <div className="p-4 flex flex-col items-center">
      {/* Title and Description */}
      <h1 className="text-3xl font-bold text-black text-center">
        We believe in sustainable fashion. We're passionate about style that empowers you.
      </h1>
      <p className="text-gray-600 text-center mt-2">
        Our collection features timeless fashion, with natural fabrics, elegant silhouettes, and classic designs that can elevate any wardrobe. Each piece enchants with its sophistication, made to last for generations, blending the essence of past eras with a modern touch.
      </p>

      {/* Layout for About Us Section */}
      <div className="flex flex-col md:flex-row mt-8 w-full max-w-6xl">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={sliderImage}
            alt="About Us"
            className="w-[560px] h-[413px] object-cover opacity-100"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-black text-2xl font-bold">About Us</h2>
          <p className="text-gray-600 mt-2">
            UrbanNest is a fashion store based in Skopje, Macedonia. Established in 2024, by Mario Pavlov. Our dedicated customer service team is always ready to support you 24/7.
          </p>
          <button
            onClick={handleShopNowClick}
            className="text-black underline mt-4 inline-block"
          >
            Shop Now →
          </button>
        </div>
      </div>

      {/* Contact Us Section */}
      <h2 className="text-3xl font-bold text-black mt-8">Contact Us</h2>
      <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex items-center">
          <FaStore className="text-black mr-2" />
          <span className="text-gray-600">ADDRESS: Skopje, Macedonia</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-black mr-2" />
          <span className="text-gray-600">CONTACT US: +38970326842</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-black mr-2" />
          <span className="text-gray-600">EMAIL: mariopavlov67@gmail.com</span>
        </div>
      </div>

      {/* Form Section */}
      <form className="mt-6 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Full Name *</label>
          <input type="text" id="name" className="border rounded w-full py-2 px-3" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email *</label>
          <input type="email" id="email" className="border rounded w-full py-2 px-3" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message *</label>
          <textarea id="message" className="border rounded w-full py-2 px-3" rows={4} required />
        </div>
        <button type="submit" className="bg-[#22637E] text-white rounded py-2 px-4">
          Send Message
        </button>
      </form>

      {/* Include ValuesSection */}
      <ValuesSection className="mt-8" />
    </div>
  );
};

export default ContactUsPage;

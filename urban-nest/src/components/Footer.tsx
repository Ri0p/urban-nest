import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141718] p-8 md:p-20 flex flex-col items-center">
      {/* Top Text Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-4 text-center md:text-left">
        <h1 className="text-[#22637E] text-3xl font-bold mr-2">UrbanNest</h1>
        <div className="border-l-2 border-white h-8 mx-2 hidden md:block" />
        <p className="text-white text-lg hidden md:block">It’s More Affordable Than Ever to Upgrade Your Wardrobe!</p>
      </div>
      
      {/* Horizontal Divider */}
      <div className="border-b-2 border-white w-full mb-4" />

      {/* Social Icons Section for Mobile Screens */}
      <div className="flex space-x-4 mb-4 md:hidden">
        <FaInstagram className="text-white h-5 w-5" />
        <FaFacebookF className="text-white h-5 w-5" />
        <FaYoutube className="text-white h-5 w-5" />
      </div>

      {/* Copyright Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl text-white text-sm">
        <p className="text-center md:text-left mb-4 md:mb-0">
          Copyright © 2024 <span className="text-[#22637E]">UrbanNest</span>. All rights reserved 
          <span className="ml-6 font-bold">Privacy Policy</span> {/* Added margin for spacing */}
          <span className="ml-6 font-bold">Terms of Use</span>
        </p>
        
        {/* Social Icons Section for Desktop Screens */}
        <div className="hidden md:flex space-x-4">
          <FaInstagram className="text-white h-5 w-5" />
          <FaFacebookF className="text-white h-5 w-5" />
          <FaYoutube className="text-white h-5 w-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
